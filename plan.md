# Storybook + Figma Token Sync 구현 계획

## 현황 파악

### 패키지 구조
```
packages/
  ui/           @monorepo/ui — React 컴포넌트 라이브러리 (Vite + Emotion + CSS Modules)
  tailwind-config/  @monorepo/tailwind-config — CSS 변수 토큰 제공
  core/         @monorepo/core — 공통 훅/유틸
apps/
  finance, banner, header, shell, viewer, ...
```

### 컴포넌트 목록 (packages/ui/src/)
Button, CheckBox, Input, Text, TextArea, Toast, Table, Layout, SearchDropDown, ErrorMessage + 14개 Icon

### 디자인 토큰 현황
| 파일 | 역할 |
|------|------|
| `tokens.json` | Figma Tokens Studio 내보내기 (마스터 소스) |
| `global.json` / `light.json` / `dark.json` | Style Dictionary 입력값 (resolved values) |
| `config.global/light/dark.json` | Style Dictionary 설정 파일 3개 |
| `build/global/_variables.css` | 색상 팔레트, 스페이싱, 타이포 CSS 변수 (112줄) |
| `build/light/_variables.css` | 라이트 테마 시맨틱 색상 변수 |
| `build/dark/_variables.css` | 다크 테마 시맨틱 색상 변수 |
| `packages/tailwind-config/tokens.css` | 컴포넌트가 실제 참조하는 CSS 변수 (수동 작성) |

> 현재 컴포넌트는 `tokens.css`의 수동 변수를 참조하고 있고, Figma에서 생성된 `build/` CSS는 아직 연결 안 됨.

---

## 목표

1. **Storybook** — `packages/ui` 내에 설치, 전 컴포넌트 스토리 + Design Token 문서 페이지 구성
2. **Figma API 동기화** — Figma Variables API → `global/light/dark.json` → Style Dictionary → CSS 자동화

---

## 구현 방안

### A. Storybook 설치 (`packages/ui`)

#### 설치 패키지
```
storybook@8.x
@storybook/react-vite@8.x
@storybook/addon-essentials@8.x
@storybook/addon-themes@8.x
```

#### 파일 구조
```
packages/ui/
├── .storybook/
│   ├── main.ts          # Vite builder + 애드온 등록
│   └── preview.ts       # CSS 글로벌 임포트 + Light/Dark 테마 데코레이터
├── src/
│   ├── styles/
│   │   └── tokens-dark.css   # [data-theme="dark"] 다크 모드 오버라이드
│   ├── Button/
│   │   └── Button.stories.tsx
│   ├── CheckBox/
│   │   └── CheckBox.stories.tsx
│   ├── Input/
│   │   └── Input.stories.tsx
│   ├── Text/
│   │   └── Text.stories.tsx
│   ├── TextArea/
│   │   └── TextArea.stories.tsx
│   ├── Toast/
│   │   └── Toast.stories.tsx
│   ├── Table/
│   │   └── Table.stories.tsx
│   ├── Layout/
│   │   └── Layout.stories.tsx
│   ├── SearchDropDown/
│   │   └── SearchDropDown.stories.tsx
│   ├── Error/
│   │   └── ErrorMessage.stories.tsx
│   ├── Icon/
│   │   └── Icons.stories.tsx   # 14개 아이콘 그리드
│   └── tokens/
│       └── Tokens.stories.tsx  # Design Token 문서 페이지
```

#### `.storybook/main.ts`
```ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-themes'],
  framework: { name: '@storybook/react-vite', options: {} },
};
export default config;
```

#### `.storybook/preview.ts`
```ts
import '@monorepo/tailwind-config/tokens.css';
import '../src/styles/tokens-dark.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

export const decorators = [
  withThemeByDataAttribute({
    themes: { Light: 'light', Dark: 'dark' },
    defaultTheme: 'Light',
    attributeName: 'data-theme',
  }),
];
export const parameters = { layout: 'centered' };
```

#### 다크 모드 CSS (`src/styles/tokens-dark.css`)
`build/dark/_variables.css` 값을 `tokens.css` 변수명으로 매핑:
```css
[data-theme="dark"] {
  --color-background-default: #000000;
  --color-primary: #ffffff;
  --color-secondary-300: #cccccc;
  --color-secondary-400: #bbbbbb;
  --color-secondary-600: #aaaaaa;
  /* ... */
}
```

#### 스토리 패턴
```ts
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryFill: Story = { args: { type: 'primary', style: 'fill', children: 'Button' } };
export const Outline: Story = { args: { style: 'outline', children: 'Button' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
```

#### Design Token 페이지 (`src/tokens/Tokens.stories.tsx`)
- Color Palette (blue/red/yellow/green/gray 100~900 + semantic)
- Typography (heading / label / paragraph 스케일)
- Spacing (8px ~ 64px 스와치)
- Border Radius

---

### B. Figma API 동기화

#### 환경 변수
```
FIGMA_ACCESS_TOKEN=figd_xxxx   # Figma Settings > Security > Personal Access Tokens
FIGMA_FILE_ID=xxxx             # Figma 파일 URL에서 추출
```

> Figma Variables API는 **Professional 플랜 이상** 필요.  
> Free 플랜이면 Tokens Studio 플러그인의 GitHub Sync 기능 대안 사용 가능.

#### `scripts/sync-figma-tokens.js`
```
Figma GET /v1/files/:FILE_ID/variables/local
  → variableCollections + variables 파싱
  → mode별(global/light/dark) 분류
  → RGB float → HEX 변환
  → global.json / light.json / dark.json 저장
  → tokens.json 전체 합본 업데이트
```

#### `package.json` (루트) scripts 추가
```json
"tokens:build": "style-dictionary build --config config.global.json && style-dictionary build --config config.light.json && style-dictionary build --config config.dark.json",
"tokens:sync": "node scripts/sync-figma-tokens.js && pnpm tokens:build"
```

#### `.github/workflows/sync-tokens.yml`
- 트리거: `workflow_dispatch` (수동) + `schedule` (매주 월요일 09:00 UTC)
- Steps: checkout → pnpm install → `tokens:sync` → PR 자동 생성 (`peter-evans/create-pull-request`)
- Secrets: `FIGMA_ACCESS_TOKEN`, `FIGMA_FILE_ID`

---

## 수정/생성 파일 목록

| 경로 | 타입 |
|------|------|
| `packages/ui/package.json` | 수정 |
| `packages/ui/.storybook/main.ts` | 생성 |
| `packages/ui/.storybook/preview.ts` | 생성 |
| `packages/ui/src/styles/tokens-dark.css` | 생성 |
| `packages/ui/src/Button/Button.stories.tsx` | 생성 |
| `packages/ui/src/CheckBox/CheckBox.stories.tsx` | 생성 |
| `packages/ui/src/Input/Input.stories.tsx` | 생성 |
| `packages/ui/src/Text/Text.stories.tsx` | 생성 |
| `packages/ui/src/TextArea/TextArea.stories.tsx` | 생성 |
| `packages/ui/src/Toast/Toast.stories.tsx` | 생성 |
| `packages/ui/src/Table/Table.stories.tsx` | 생성 |
| `packages/ui/src/Layout/Layout.stories.tsx` | 생성 |
| `packages/ui/src/SearchDropDown/SearchDropDown.stories.tsx` | 생성 |
| `packages/ui/src/Error/ErrorMessage.stories.tsx` | 생성 |
| `packages/ui/src/Icon/Icons.stories.tsx` | 생성 |
| `packages/ui/src/tokens/Tokens.stories.tsx` | 생성 |
| `scripts/sync-figma-tokens.js` | 생성 |
| `package.json` (루트) | 수정 |
| `.github/workflows/sync-tokens.yml` | 생성 |
| `.env.example` | 생성 |

---

## 검증 방법

1. `cd packages/ui && pnpm storybook` → `localhost:6006` 접속
2. 전 컴포넌트 스토리 렌더링 확인
3. Light ↔ Dark 토글 정상 동작 확인
4. Design Tokens 페이지 색상/타이포/스페이싱 시각화 확인
5. `.env` 설정 후 `pnpm tokens:sync` → `build/*/variables.css` 갱신 확인
6. GitHub Actions `workflow_dispatch`로 수동 실행 → PR 자동 생성 확인
