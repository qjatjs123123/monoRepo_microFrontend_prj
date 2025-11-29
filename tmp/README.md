# pwc


# 배포
https://pwcprj.netlify.app/

<br />

# 📚 고민한 내용
## FSD
- 협업하기 좋은 코드
- 사이드 이펙트 최소화 개발


<br />


## 레이어드 아키텍처
- API 레이어
  - Axios interceptor
  - 400, 401, 402 ... 다양한 에러 처리

- Entity 레이어
  - DTO mapping
  - API 응답 DTO를 프론트엔드 타입으로 매핑

- Model 레이어
  - Tanstack Query
  - Custom Hook

- View 레이어
  - React

  
<br />


## 백엔드 API 없이 프론트엔드 개발하기
- Mock
- API 에러 테스트


<br />


## 선언적 개발하기
- react-error-boundary
  - API 에러 처리 선언적

- suspense
  - API 로딩 처리 선언적

- react-hook-form
  - 폼 구현 선언적
  - 성능

- tanstack-query
  - API 호출, 성공, 에러 처리

- Overlay, portal
  - 모달 처리 선언적

- 커스텀 훅
  - 대부분 비즈니스 로직 커스텀 훅 사용


<br />

## 반응형 디자인
- 다양한 디바이스 지원 UI


<br />

## 에러 핸들링
- 모든 API에 대응하는 에러 핸들링 with 선언
  - react-error-boundary
  - suspense
  - Get 요청은 react-error-boundary로
  - Post, Put, Delete 요청은 tanstack-query, axios를 활용하여 선언적 처리


<br />

## UX
- 스켈레톤 UI
  - Suspense로 다양한 상황에 맞는 스켈레톤 UI

  - react-error-boundary로 상황에 맞는 에러 화면
    - tanstack-query를 사용한 retry 버튼 구현

- 토스트 UI
  - 사용자 인터렉션에 따른 메시지 
  - API message 그대로 출력
  - axios 레이어에서 매핑작업


<br />

## 단일 책임 원칙
- 모든 컴포넌트, 함수 등을 단일 책임 원칙
- 렌더 프롭스 등



<br />

선택 과제 수행 여부(x)