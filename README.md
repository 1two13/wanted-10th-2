# 원티드 프리온보딩 기업과제

## 목차

- 배포링크
- 주요기능
- 실행방법
- 개발환경
- 기술스택
- 파일구조

## 🔗 [배포링크](https://wanted-10th-2-pp5wjjux7-1two13.vercel.app/)

## 주요기능

#### 1. API 호출 별로 로컬 캐싱 구현

- localStorage를 사용하여 검색 창에 입력한 값을 키로, 입력된 값의 추천 검색어를 값으로 저장했습니다.
- 추가로, `useState`에 현재 시간(`Date.now()`) + 43200000(12시간을 ms로 변환한 값)을 저장해두고,
  일정 시간(12시간 기준)이 지나면 `localStorage.clear()`를 사용하여 데이터가 삭제될 수 있도록 구현하였습니다.

#### 2. 입력마다 API가 호출되지 않도록 API 호출 횟수 줄이는 전략 수립

1. localStorage에 캐싱해둔 키에 접근하기
2. localStorage에 찾는 키가 있다면 해당 키의 값을 가져오기
3. localStorage에 찾는 키가 없다면 API 호출하기

#### 3. 키보드로 추천 검색어 이동 가능하도록 구현

- 검색 창에 `onKeyDown` 이벤트를 등록하고, 해당 이벤트의 key 값이 `ArrowDown`, `ArrowUp`, `Escape`일 때를 구분하여 `useState`로 생성한 `setSelectedIndex` 함수의 값을 업데이트해주었습니다.

## 실행방법

#### install

```
npm install
```

#### start

```
npm start
```

## 개발환경

- 테스트 환경 : Chrome browser
- IDE : Visual Studio Code 1.71.0 (Universal)
- 인프라 : Vercel
- 주요 라이브러리
  - React : 18.2.0
  - TypeScript : 4.9.5
  - styled-components: 5.3.10

## 기술스택

#### Environment

<code><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"></code>

#### config

<code><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"></code>

#### Language

<code><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"></code>

#### Development

<code><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></code>
<code><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></code>

#### deploy

<code><img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=Axios&logoColor=white"/></code>

## 파일구조

```
📦public
📦src
 ┣ 📂api
 ┣ 📂components
 ┃ ┣ 📜SearchBar.tsx
 ┃ ┣ 📜SearchSvg.tsx
 ┃ ┣ 📜SuggestedList.tsx
 ┃ ┗ 📜Title.tsx
 ┣ 📂static
 ┣ 📂styles
 ┣ 📂types
```
