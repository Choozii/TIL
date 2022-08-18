<h1>타입스크립트 딥다이브</h1>

> https://radlohead.gitbook.io/typescript-deep-dive/type-system

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

<h3>Enums</h3>

- Enums는 관련 값 모음을 구성하는 방법
- 자바스크립트의 데이터 타입에는 없지만 타입스크립트 타입에는 존재
- 열거형은 숫자가 디폴트
- 디폴트로 enum은 0을 기준으로 1씩 값이 자동으로 증가
```
enum Color {
    Red, // 0
    Green, // 1
    Blue, // 2
}
```
- 문자열이나 다른 숫자를 할당할 수 있음

<h3>lib.d.ts</h3>

- lib.d.ts는 TS 프로젝트에서 자동으로 추가됨
- 타입 체크가 보장된 JS 코드를 작성할 수 있도록 함
- JS에 대한 ambient 선언을 담고 있음

<h3>함수</h3>

- parameter와 return 값에 대해 type을 지정할 수 있음
- parameter를 optional하게 표현할 수 있음/default value 지정해놓을 수 있음
- 함수를 오버로드할 수 있음. 문서화+타입 보안에 유용함.
