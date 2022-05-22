<h3> Babel, Webpack </h3>

- babel

  - jsx -> createElement(js)로 변환해줄 때 바벨 사용
    - jsx는 js 표준 문법이 아니기 때문
  - babel plugin : 하나의 변환하는 기능
  - babel preset : 플러그인들의 모음(특정 목적을 위해 preset으로 묶어줌 ex.react-preset)
  - watch 모드로 실행 시 js가 수정될 때마다 자동으로 compile

- webpack

  - webpack을 사용하는 가장 큰 이유 : 모듈 시스템 사용을 위해
  - 모듈 시스템
    - ESM(ES Module, ES6에서 도입) : import, export 문법
    - commonJS(node에서 많이 사용) : require(), module.exports 문법
  - 브라우저에서 ESM은 지원, commonJS는 지원하지 않음
  - 오픈소스에서 commonJS 많이 사용됨, 오래된 브라우저에서 ESM의 처리가 안됨 => webpack을 사용해 모듈 시스템을 사용
  - 웹팩을 사용하지 x -> 필요한 js 파일을 모두 html에서 load -> 파일이 많아질수록 관리가 어려워짐 -> 코드 간 의존성 등의 문제 발생
  - 웹팩을 실행하면 dist 디렉토리에 결과물이 저장됨

    - 결과물에는 js에서 import해서 사용하는 패키지, webpack 코드, 우리가 작성한 js까지 하나로 번들링 되어있음

    +) javascript style 적용 시 camel case로 적음 -> '-'를 자바스크립트에서는 마이너스로 인식하기 때문(재밋다..)

> [실습코드👩‍💻](https://github.com/Choozii/react_playground/tree/main/react_environment)

> reference : 실전 리액트 프로그래밍 강의 - <리액트 프로그래밍 시작하기>
