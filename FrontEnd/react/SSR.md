<h3>서버 사이드 렌더링</h3>

- 서버사이드 렌더링

  - 서버에서 리액트 코드를 실행해서 렌더링하는 것을 의미
  - 구글을 제외한 다른 검색 엔진에서는 js를 실행하지 않음 -> CSR 웹사이트는 내용이 없는 사이트와 동일하게 처리
  - CSR은 자바스크립트가 실행되어야 화면이 보이기 때문에 유저가 저사양 기기를 사용할수록 느리지만 서버 사이드는 사용자가 요청한 페이지를 빠르게 보여줄 수 있음

- 서버사이드 렌더링 함수

  - renderToString, renderToNodeStream : 최초 렌더링 이후에도 화면을 갱신해서 렌더링 해야하는 경우 사용
  - renderToStaticMarkup, renderToStaticNodeStream : 정적 페이지를 렌더링할 때 사용
  - react-dom package의 /server에 서버에서 사용되는 기능이 모여있음

  - renderToString
    - server.js 에서 renderToString(\<App/>)을 실행
    - renderToString은 리액트 코드를 문자열로 반환함
    - 렌더링된 문자열을 html에 반영해줌
  - hydrate
    - 서버사이드 렌더링을 하면 돔 요소가 만들어진 상태
    - react에서 제공하는 hydrate 함수는 돔요소에 이벤트 처리 함수를 붙여줌
      ```
      ReactDOM.hydrate(\<App/>, document.getElementById('root'));
      ```

- 서버 데이터를 클라이언트로 전달하기

  ```
  //client
  window.__DATA__ = __DATA_FROM_SERVER__;

  //server
  const result = html.replace('__DATA_FROM_SERVER', initialData);
  ```

  - 클라이언트 : 서버의 데이터를 받아서 window.변수명을 통해 참조함
  - 서버 : 데이터를 html로 삽입(정해진 변수와 replace 해줌)

- 스타일 적용

  - css-in-js나 css-module -> js가 실행되며 코드가 DOM에 삽입되는 방식 -> ssr에서는 추가 작업이 필요
  - 서버사이드 렌더링 시 스타일을 추출해 HTML에 삽입해주는 작업 필요

    ```
    //client
    <head>
    __STYLE_FROM_SERVER__
    </head>

    //server
    const renderString = renderToString(sheet.collectStyles(\<App/>))
    const styles = renderString.getStyleTags();

    const result = html.replace('__STYLE_FROM_SERVER__', styles);
    ```

  - collectStyles
    - server.js에서 리액트 요소에 대해서 호출함
    - 스타일 정보를 수집하기 위한 리액트 요소가 삽입됨
  - getStyleTags

    - 호출시 스타일 정보가 추출됨

  - 스타일 정보가 HTML에 포함되어 전달 -> js가 실행되지 않더라도 빠르게 스타일이 적용됨

> [실습 코드 🐿](https://github.com/Choozii/react_playground/tree/main/test-ssr)
