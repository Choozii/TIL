<h3> Ajax </h3>

- js를 이용해 브라우저가 서버에게 비동기 방식으로 데이터를 요청하고 브라우저가 수신해 웹페이지를 동적으로 갱신하는 프로그래밍 방식
- XMLHttpRequest 객체를 기반으로 동작

- 전통적인 방식

  1. 완전한 HTML을 서버로부터 매번 다시 전송받음 -> 불필요한 데이터 통신 발생
  2. 모든 요소를 새로 렌더링 -> 화면 전환이 일어나면 순간적으로 깜빡임
  3. 동기 방식으로 동작 -> 서버로 부터 응답이 없으면 블로킹됨

- Ajax는 해당 문제들을 해결함