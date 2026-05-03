# Todo — Storybook + Figma Token Sync

> `[ ]` 미완료 / `[x]` 완료  
> 상세 내용은 `plan.md` 참고

---

## 1단계: Storybook 기반 설치

- [ ] `packages/ui/package.json` — Storybook 관련 devDependencies 및 scripts 추가
  - `storybook`, `@storybook/react-vite`, `@storybook/addon-essentials`, `@storybook/addon-themes`
  - scripts: `"storybook"`, `"build-storybook"`
- [ ] `pnpm install` — 패키지 설치
- [ ] `packages/ui/.storybook/main.ts` — Storybook 설정 파일 생성
- [ ] `packages/ui/.storybook/preview.ts` — 글로벌 CSS 임포트 + 테마 데코레이터 설정

---

## 2단계: 다크 모드 CSS 토큰

- [ ] `packages/ui/src/styles/tokens-dark.css` — `[data-theme="dark"]` 오버라이드 CSS 생성
  - `tokens.css` 변수명 기준으로 다크 값 매핑

---

## 3단계: 컴포넌트 스토리 파일

- [ ] `src/Button/Button.stories.tsx` — Primary/Default × Fill/Outline × Big/Medium × Disabled
- [ ] `src/CheckBox/CheckBox.stories.tsx` — Checked, Unchecked, Disabled
- [ ] `src/Input/Input.stories.tsx` — Default, WithLabel, Disabled, Error
- [ ] `src/Text/Text.stories.tsx` — display/title/body/caption × size × weight
- [ ] `src/TextArea/TextArea.stories.tsx` — Default, WithValue, Disabled
- [ ] `src/Toast/Toast.stories.tsx` — Info, Success, Error
- [ ] `src/Table/Table.stories.tsx` — 샘플 데이터 포함
- [ ] `src/Layout/Layout.stories.tsx` — 기본 레이아웃 구조
- [ ] `src/SearchDropDown/SearchDropDown.stories.tsx` — Default, WithResults
- [ ] `src/Error/ErrorMessage.stories.tsx` — Default
- [ ] `src/Icon/Icons.stories.tsx` — 14개 아이콘 그리드 전시

---

## 4단계: Design Token 문서 페이지

- [ ] `src/tokens/Tokens.stories.tsx` — Figma 토큰 시각화 페이지 생성
  - Color Palette (blue/red/yellow/green/gray 100~900 + semantic colors)
  - Typography (heading / label / paragraph 스케일)
  - Spacing (8px ~ 64px)
  - Border Radius

---

## 5단계: Figma API 동기화 스크립트

- [ ] `.env.example` (루트) — `FIGMA_ACCESS_TOKEN`, `FIGMA_FILE_ID` 템플릿 생성
- [ ] `scripts/sync-figma-tokens.js` — Figma Variables API 호출 + 변환 + JSON 저장 스크립트
- [ ] `package.json` (루트) — `tokens:build`, `tokens:sync` 스크립트 추가
- [ ] 로컬 테스트: `.env` 설정 후 `pnpm tokens:sync` 실행 확인

---

## 6단계: GitHub Actions 자동화

- [ ] `.github/workflows/sync-tokens.yml` — 자동 동기화 워크플로 생성
  - 트리거: 수동(`workflow_dispatch`) + 스케줄(매주 월요일)
  - Secrets 등록: `FIGMA_ACCESS_TOKEN`, `FIGMA_FILE_ID`
- [ ] GitHub Secrets 등록 확인 (Repository Settings > Secrets)
- [ ] Actions 탭에서 수동 실행 테스트

---

## 최종 검증

- [ ] `pnpm storybook` → `localhost:6006` 정상 접속 확인
- [ ] 전 컴포넌트 스토리 렌더링 이상 없음
- [ ] Light ↔ Dark 토글 정상 동작
- [ ] Design Tokens 페이지 시각화 확인
- [ ] Figma 토큰 동기화 후 `build/` CSS 갱신 확인
