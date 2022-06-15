<h3>next.js</h3>

- framework와 library의 차이점

  - react는 library로 어떤 구조로 프로젝트를 생성할지 자유, 코드를 원하는대로 작성할 수 있음 index, App만 기본적으로 제공됨
  - next.js는 프레임워크. 규칙을 따라야하고, 규칙을 따랐을 때 정상적으로 작동함
  - next.js는 reactDOM.Render이 노출되어있지 않고, 우리가 조작할 수 없음. page에서 페이지를 만들수만 있음

- Pages

  - pages 내부의 파일 이름이 url으로 들어감, 코드에서 export하는 함수 이름은 상관이 없음
  - 페이지 내부 컴포넌트는 export default 해주어야함
  - 404 페이지 같은 것도 next.js는 미리 만들어져있음
  - index는 랜딩페이지로 라우팅해줌
  - jsx를 사용하기 위해 react를 임포트할 필요가 없음

- Static Pre Rendering

  - CSR : 브라우저가 자바스크립트를 가져와서 UI 렌더링. HTML을 보면 \<div id="root">\</div> 만 존재
  - 유저 하드웨어 성능이 안좋으면 UI가 느리게 렌더링됨
  - SSR : UI가 HTML 코드 내부에 존재함 -> 유저가 왔을 때 즉시 렌더링될 것(화면의 초기값을 바탕으로 서버에서 미리 렌더링해서 HTML에 넣어둠 -> 유저가 접속하면 HTML로 바로 볼 수 있음)
    ==>>> 검색엔진에게 되게 좋다. 정보가 HTML에 미리 들어가있으니까!

- Routing
  - <a> 태그를 페이지 이동에 쓰지 않기 -> 페이지 이동시마다 HTML을 새로 받아옴
  - \<Link href="">\<a>\</a>\</Link>
  - Link태그에는 href말고 다른 어트리뷰트가 불가능! className같은거 a 태그 내부에 넣어주기
- useRouter

  - import {useRouter} from "next/router";
  - location에 대한 정보들이 들어있음
  - next에 기본적으로 존재

- styling
  - styled jsx
    ```
    <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          color: blue;
        }
      `}</style>
    ```
    - page 하단에 style 태그와 함께 써주면 됨!
    - style이 해당 컴포넌트 scope! 부모 자식간에 class name이 똑같아도 아예 영향을 주지 않음
- setting global styles
  - ` <style jsx global>{``}</style> `
  - \_app.js <- 반드시 해당 이름이어야함. 다른 페이지들을 보기 전에 \_app.js를 거침
  - \_app 내부의 컴포넌트는 반드시 두개의 props를 가짐 - {Component, pageProps}
  - \_app내부에서 작성한 걸 첨가해서 렌더링함....! -> nextjs가 자동으로 Component prop에 페이지 컴포넌트와 pageProps를 넣어서 렌더링하는 거시다
  - 모든 페이지에서 공통인 요소들을 \_app.js에 넣어주면 된다눙
  - 공통인 스타일 요소들을 넣어줄 수도 있다.
  - \_app.js에서만 global.css를 임포트할 수 있음
- layout pattern
  - component에 layout이란걸 만들어서 공통적인 UI(ex.nav bar)를 설정하고, children으로 <Component {...pageProps}/>를 받음
  - 보통 \_app.js에 코드를 길게 넣고 싶어하지 않음
  - \_app.js에서 임포트되는 공통요소들이 많을 것. ex.구글 애널리틱스, 분석툴 같은거!
- public 파일은 "/이름"으로 쉽게 찾아올 수 있음

- api key 숨기기(redirect, rewrite)

  - redirect

    - next.config.js에서 설정 가능

      ```
      async redirects(){ //해당 URL에 접근 시 리다이렉트함. 외부 사이트로도 가능!
      return [
      {
      source : "/old-blog/:path*",
      destination :"/new-sexy-blog/:path*",
      permanent : false
      }
      ]
      }
      ```

    - rewrite
      - 페이지는 이동시키지만 url이 변하지 않음. 유저가 눈치채지 못하게...
      - 해당 기능을 이용해서 api 주소를 마스킹할 수 있음

- only ssr만 할건지 설정 가능

  - api까지 완료되었을 때 화면에 렌더링 - api가 느리면 빈 화면만 뜰수도 있음
  - getServerSideProps funtion을 export하기
  - gerServerSideProps() => 서버에서만 실행됨. API 노출은 신경쓸 필요x
  - 해당 메소드 내부에서는 객체를 return {props : {}} 객체는 props라는 키를 가짐
  - props라고 키로 준 객체가 해당 페이지에 정말 prop으로 들어온다능...! 신기해
  - \_app.js에서 전해주는 {...pageProps}를 통해서 컴포넌트 props로 들어온다
  - 즉, getServerSideProps는 페이지가 렌더링 되기 전 서버에서 api를 호출한 결과를 컴포넌트에 prop으로 전달하는 함수

  - dynamic url
    - pages 내부에 [변수명].js 형태로 만들어주면됨

- routing

  - Link와 a 태그를 써서 해도 되고
  - useRouter 써서 해도됨! push 메소드가 있다,....
    ex. router.push(url)
  - 해당 메소드로 state를 넘겨줄 수 있음
  - 넘겨주면서 url은 마스킹할 수 있음(push의 세번째 인자, as 설정)
    - 즉, userRouter 객체를 사용해서 데이터를 넘길 수 있고, 넘기는 데이터는 사용자에게 노출되지 않도록 할 수 있음

> https://nomadcoders.co/nextjs-fundamentals/lobby
