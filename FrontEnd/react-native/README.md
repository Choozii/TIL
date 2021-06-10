

<h1>React Native 정리</h1>
<h3>개요</h3>

- 장점
	- 코드 대부분 플랫폼 간 공유가 가능 -> IOS, Android 동시 개발 가능
	- JS만 알면 개발 가능
	- 컴포넌트 재사용 가능
	- webview를 사용하는 방식이 아닌 플랫폼에 알맞는 native element로 변환하는 방식을 사용하기 때문에 성능 저하가 적음
- 단점
	- native에 새로운 기능이 추가되는 경우 react native에서 지원하기까지 오래 걸림
	- 유지 보수의 어려움
	- 리액트 네이티브의 잦은 업데이트

- 환경설정
	- watchman -> 파일 시스템 감지 도구. 리액트 네이티브에서 소스 코드 변화를 감지
	- homebrew -> 맥용 package manager
	- cocoapods -> 라이브러리 관리
	- 리액트 네이티브 프로젝트 생성 : Expo or 리액트 네이티브 CLI 통해서 가능

<h3> component 개발 </h3>

- JSX
	- View 태그는 UI를 구성하는 가장 기본적인 요소. 웹에서의 div 태그와 비슷한 역할.
	- Fragment 태그로 감쌀 수도 있음(<></>)
	- 내장 컴포넌트(core component). 기본적으로 사용될만한 컴포넌트들 존재 ex.Button, Image -> 플랫폼에 따라 props가 달라서 UI가 다르게 보일 수 있다.
	- 커스텀 컴포넌트 -> IOS, AOS에서 같은 UI로 보일 수 있게끔 커스텀하게 생성할 수 있다.
	- defaultProps 사용하기
	- propTypes 사용하기 -> prop-types 라이브러리 설치
- Event
	- onPressIn, onPressOut은 항상 호출됨. onPress, onLongPress는 press 시간에 따라 둘 중 하나만 호출되는 것 주의!
	- pressable component : 사용자의 터치에 상호작용하는 컴포넌트, Touchable Opacity와 다른 점은 HitRect와 PressRect를 조절할 수 있다는 점!(hitSlop, pressRetentionOffset)

<h3> style </h3>

- inline styling
	- 태그 내부에 선언하는 방식
	- style을 객체 형태로 전달한다
	- 단점 : 동일 코드 반복. 코드만 보고 해당 스타일 적용 이유를 알 수 있어야 함
- class styling
	- 스타일 시트에 정의된 스타일을 불러서 사용한다.
	- const Style = StyleSheet.create({}) 문법
	- 유지보수 측면에서 생각해보면 클래스 스타일을 사용하는 것이 좋다.
	- 여러개의 스타일을 적용 가능하다. => style={[styles.text, styles.error]} 같은 형태! 스타일 객체로 배열을 전달한다.
	- styles.js 파일을 따로 만들어서 import 해서 사용할 수도 있다.

- flex
	- 고정값(px)를 사용하면 화면 크기의 차이 때문에 화면이 원하는대로 그려지지 않음. => 다양한 크기의 기기에 대응하기 어렵다.
	- flex는 비율로 크기가 설정된다. 값으로 숫자를 받고, 해당 값에 따라 비례하여 크기가 조절된다.
	- flex가 1인 경우-> 차지할 수 있는 모든 영역을 차지함
	- 동일한 부모 컴포넌트에 있는 컴포넌트 두 개의 flex 값이 1과 2라면 -> 1:2로 나누어 채우게 된다.
	- 동일한 부모 컴포넌트에 있는 컴포넌트 세 개의 flex 값이 1, 2, 1 이라면 -> 전체 화면을 1:2:1로 나누어 채우게 된다.
