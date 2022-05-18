<h3>개요</h3>

- 장점

  - 코드 대부분 플랫폼 간 공유가 가능 -> IOS, Android 동시 개발 가능
  - webview를 사용하는 방식이 아닌 플랫폼에 알맞는 native element로 변환하는 방식을 사용하기 때문에 성능 저하가 적음

- 단점

  - android, ios에 새로운 기능이 추가되는 경우 react native에서 지원하기까지 오래 걸림
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

- Event
  - onPressIn, onPressOut은 항상 호출됨. onPress, onLongPress는 press 시간에 따라 둘 중 하나만 호출되는 것 주의!
  - pressable component : 사용자의 터치에 상호작용하는 컴포넌트, Touchable Opacity와 다른 점은 HitRect와 PressRect를 조절할 수 있다는 점!(hitSlop, pressRetentionOffset)
