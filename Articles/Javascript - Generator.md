<h3> Generator 이해하기 </h3>

- Generator

  - Generator 함수를 실행했을 때 반환되는 객체
  - well-formed iterable

- Generator 함수

  - function\* \[name](param....){
    statements
    }
  - Generator 함수는 화살표 함수를 이용해서 정의할 수 없음

- yield

  - generator 객체가 반복하며 반환할 값을 결정
  - next 메서드를 호출하면 yield 까지만 실행됨
  - yield 우항에 있는 값이 iteratorResult의 value에 담겨서 반환

- Generetor 함수 내부에서 return 메서드를 실행하면 값이 반환되며 done값이 true로 변경됨

  - for...of, spread 등에서는 return 키워드가 나오기 전까지의 yield까지만 취급

- Generator는 값을 평가하는 시점을 사용자가 선택할 수 있음 -> 자바스크립트에서는 해당 특징을 사용해 지연평가를 구현할 수 있음
