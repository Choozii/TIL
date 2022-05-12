- router

  - hash router : #/ < 이따구로 생김 (더 알아본 결과 정적인 페이지에 적합하다고 함..)
  - browser router : 우리가 아는것처럼 생김 (동적인 페이지에 적합), 둘중에 욘석이 주로 사용됨!

- App.js에서 router 컴포넌트를 리턴해줌
  - \<Router> 내부에 \<Route>가 있고 path와 component를 지정
  - \<Switch> 내부에 넣어주면 첫번째로 매칭되는 친구만 렌더링해줌
  - \<Link>는 브라우저 새로고침 없이 페이지를 이동시켜줌
  - dynamic url 형태 : '/movie/:id'
  - path parameter는 컴포넌트에서 useParams()를 써서 쉽게 가져올 수 있음

> 출처 : https://nomadcoders.co/react-for-beginners/lectures/3291
