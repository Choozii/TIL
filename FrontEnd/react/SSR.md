<h3>서버 사이드 렌더링</h3>

- 서버사이드 렌더링
  - 서버에서 리액트 코드를 실행해서 렌더링하는 것을 의미
  - 구글을 제외한 다른 검색 엔진에서는 js를 실행하지 않음 -> CSR 웹사이트는 내용이 없는 사이트와 동일하게 처리
  - CSR은 자바스크립트가 실행되어야 화면이 보이기 때문에 유저가 저사양 기기를 사용할수록 느리지만 서버 사이드는 사용자가 요청한 페이지를 빠르게 보여줄 수 있음
- 서버사이드 렌더링 함수
  - renderToString, renderToNodeStream : 최초 렌더링 이후에도 화면을 갱신해서 렌더링 해야하는 경우 사용
  - renderToStaticMarkup, renderToStaticNodeStream : 정적 페이지를 렌더링할 때 사용
  - react-dom package의 /server에 서버에서 사용되는 기능이 모여있음
  - renderToString은 리액트 코드를 문자열로 반환함
  - 렌더링된 문자열을 html에 반영해줌

[실습 코드](https://github.com/Choozii/react_playground/tree/main/test-ssr)
