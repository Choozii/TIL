- Axios vs Fetch

  네트워크 리퀘스트가 필요한 앱을 만들 때 우리는 Axios와 Fetch같은 HTTP clients를 사용함.

  Axios와 Fetch에 대해 알아보고 선택할 때 고려해보자

  - overview

    - Fetch api는 모던 브라우저 빌드인 메소드인 fetch() method에서 왔고, 설치가 필요없음
    - Axios는 써드파티 라이브러리로 설치가 필요함

  - comparing

    - 문법

      1.  fetch(url, [configuration options])
          - 두번째 인자인 옵션을 입력하지 않으면 디폴트로 GET 리퀘스트를 보내게 됨
          - configuration options에 다양한 커스텀 세팅값을 입력할 수 있음
      2.  axios
          - 호출하는 형식이 다양함(fetch와 똑같은 방식, axios.get(url, [option])처럼 메소드를 덧붙인 방식 등)
          - default는 GET 리퀘스트

    - reponse 핸들링

      1. fetch

         ```
         fetch(url)
         .then(response => response.json())
         .then(console.log);
         ```

         - fetch() 는 프로미스 값을 리턴하고, 데이터를 받아도 우리가 원하는 Json 형태가 아니라서 .json() 메소드를 호출해야 함.
         - .json()도 프로미스를 반환하기 때문에 .then()으로 핸들링 해주어야함.
         - 그래서 fetch 리퀘스트는 보통 두개의 .then()을 호출함

      2. axios

         ```
         axios.get(url)
         .then(response => console.log(response.data));
         ```

         - axios도 프로미스를 리턴함, but 데이터를 받으면 기본적으로 json 형태로 제공됨.
         - response object의 data property로 접근할 수 있음

    - Auto Stringify

      1. Fetch
         - request의 body 부분에서 JSON.stringify()를 해주어야 함
         - 명시적으로 content-type을 application/json으로 설정해주어야 함.
      2. Axios
         - 자동으로 request body 데이터를 stringify 시킴.
         - headers에 content-type : application/json은 디폴트로 설정됨.

    - Error handling

      1. fetch

         - fetch는 network가 fail한 경우에만 promise를 reject함
         - .then() 내부에서 에러를 체크 해주어야 함 -> then 내부에서 response가 유효한지 체크 후 error를 직접 throw해서 catch에서 다루고 있음
         - response의 ok, status property를 사용해 response가 유효한 지 체크할 수 있음

         ```
         fetch(url)
         .then((response) => {
             if (!response.ok) {
             throw new Error(
                 `This is an HTTP error: The status is ${response.status}`
             );
             }
             return response.json();
         })
         .then(console.log)
         .catch(err => {
             console.log(err.message);
         });
         ```

      2. axios
         - Axios의 promise는 상태 코드값이 2xx이 아닌 경우 reject 됨
         - .catch()를 통해서 에러 핸들링을 하면 됨

    - Response Timeout
      1. fetch
         - AbortController 인터페이스를 통해 abort()를 사용할 수 있음
         - setTimeout과 함께 사용해서 일정 시간이 지난 후에 request가 끝나도록 구현 가능
      2. axios
         - request의 configuration object에 timeout 프로퍼티를 추가해서 설정할 수 있음

> 출처 | https://meticulous.ai/blog/fetch-vs-axios/
