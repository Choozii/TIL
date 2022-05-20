<h3> About Next.js 👻</h3>

- Next.js는 동적 주소를 처리하지 못하기 때문에, express를 연결해서 동적 주소를 처리함

- express method
  app.all() : 모든 요청 메소드에 대해 한 경로에서 미들웨어 함수를 로드하는데 사용됨

- next-redux-wrapper

  > https://github.com/kirill-konshin/next-redux-wrapper#motivation

  - 사용 이유
    - next.js에서는 request 호출할 때마다 redux store를 새로 생성함 -> store를 하나로 만들어야 함!
    - next.js의 getInitialProps와 getServerSideProps에서 redux store에 접근이 가능하도록 해야함
  - 사용법
    - 리듀서에 HYDRATE action handler를 포함하고 있어야 함
    - createWrapper로 store를 감싸서 export
    - page/\_app에서 모든 페이지를 한번에 wrap하기
      - race condition이 발생해서 한 컴포넌트를 렌더링 하는 동안 다른 컴포넌트가 렌더링 되지 않을수도 있기 때문
      ```
      export default wrapper.withRedux(app);
      ```
  - HYDRATE란?
    - getStaticProps나 getServerSideProps를 포함한 페이지의 경우 HYDRATE 액션이 dispatch 됨
    - hydrate 액션의 payload는 static generation, server side rendering 시의 state -> reducer가 이 state와 client의 state를 병합

- Data Fetching

  - getServerSideProps

    > https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

    - 페이지에서 getServerSideProps라는 함수를 export하면 Next.js가 getServerSideProps에서 받은 데이터를 사용해 해당 페이지를 미리 렌더링함
    - getServerSidePorps는 서버 사이드에서만 동작, 브라우저에서는 동작하지 않음
    - getServerSideProps는 page에서만 export될 수 있음
    - request time에 가져와야 하는 페이지를 렌더링하는 경우에만 써야함, 만약 요청시 렌더링 할 필요 없다면 client side에서 혹은 setStaticProps를 통해 데이터를 fetch하는 방식을 고려해보기
