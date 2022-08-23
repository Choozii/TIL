<h1>타입스크립트 딥다이브</h1>

> https://radlohead.gitbook.io/typescript-deep-dive/type-system

> https://joshua1988.github.io/ts/guide/basic-types.html#%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%ED%83%80%EC%9E%85

<h3>기본 타입</h3>

- :를 사용하여 자바스크립트 코드에 타입을 정의할 수 있음
- ex. let arr: number[] = [1,2,3]; 
<h3>@types</h3>

- 자바스크립트로 만들어진 써드 파티 라이브러리는 타입스크립트에서 사용하기 위해서 각 기능에 대한 타입이 정의되어 있어야 함

- @types라는 라이브러리를 추가적으로 설치해서 타입스크립트가 해당 써드 파티 라이브러리들의 타입을 추론할 수 있도록 해줌

<h3>Ambient Declarations</h3>

- .ts나 .d.ts에 type declarations를 포함할 수 있음
- ambient declarations는 컴파일러에게 하는 약속. 해당 아이템이 존재하지 않으면 컴파일 에러 발생 
- interface를 사용하는 것을 추천

<h3>인터페이스</h3>

- 런타임 환경에 전혀 영향을 주지 않음

```
interface Point {
    x: number; y: number;
}
declare var myPoint: Point;

interface Point {
    z: number;
}

// Your code
var myPoint.z; // Allowed!
```
- interface에 간단하게 새 멤버를 추가할 수 있음
- 클래스를 사용하려면 implements를 사용해 인터페이스와 호환 가능

```
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: 'Capt', age: 28 };
logAge(person);
```
- 인터페이스에 정의된 속성, 타입의 조건만 만족한다면 객체의 속성 갯수가 더 많아도 상관 없음
- readonly 속성을 정의할 수 있음(선언하는 시점에만 값을 정의 가능)
- 타입 추론을 무시하고 싶다면 as 키워드를 사용해서 Type assertion 할 수 있음
- 함수 타입을 정의할 때에도 사용 가능

<h3>Enums</h3>

- Enums는 특정 값들의 집합을 의미
- 자바스크립트의 데이터 타입에는 없지만 타입스크립트 타입에는 존재
- 열거형은 숫자가 디폴트
- 디폴트로 enum은 0을 기준으로 1씩 값이 자동으로 증가
- 초기 값을 주면 초기 값부터 차례로 1씩 증가
```
enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
}
```
- 문자열 이넘은 auto-increasing이 없고, 이넘 값 전부 초기화해주어야함
```
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

<h3>lib.d.ts</h3>

- lib.d.ts는 TS 프로젝트에서 자동으로 추가됨
- 타입 체크가 보장된 JS 코드를 작성할 수 있도록 함
- JS에 대한 ambient 선언을 담고 있음

<h3>함수</h3>

- parameter와 return 값에 대해 type을 지정할 수 있음 (반환 값에 타입을 정하지 않을 때는 void라도 사용)
- parameter를 optional하게 표현할 수 있음/default value 지정해놓을 수 있음
- 함수를 오버로드할 수 있음. 문서화+타입 보안에 유용함.
- 

<h3>제네릭</h3>

- 재사용성이 높은 컴포넌트를 만들 때 자주 활용
- 한가지 타입보다 여러가지 타입에서 동작하는 컴포넌트를 생성하는데 사용
- 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것

<h3>타입 추론</h3>