<h3> basics of React </h3>

- react vs vanilla js

	- vanilla js
		
		- 상태값(변수)가 변해도 html은 새로고침 되지 않는다. -> html에 변한 상태값을 innerHTML로 직접 반영시켜주어야 함
		- javascript에서 element를 추출 -> 이벤트 함수 연동 => 로직의 양이 방대함
	- react
	
		- html을 직접 다루지 않음
		- react에서는 js로 html을 생성, 업데이트함
		- 유저에게 보여줄 값을 js에서 처음부터 끝까지 조작, vanilla js처럼 html에서 요소를 탐색해서 업데이트 할 필요 x
		
		- react-dom : react elements를 html body에 둘 수 있도록 해줌
		- ReactDOM.render(element, root) : root에 element 렌더링
	- jsx는 javascript를 확장한 문법 - normal html과 유사하게 생김
	- jsx로 적은 코드 -> react.createElement 문법으로 변환이 필요함! => <u>using babel!!</u> 
	- 바벨은 code transformer. jsx를 브라우저가 이해할 수 있는 문법으로 변환해줌.

	- 리액트 컴포넌트의 첫글자는 upperCase로 적어줄 것!  -> 일반 html element와 구별 필요