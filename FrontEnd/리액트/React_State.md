<h3> state </h3>

- 변수를 사용해서 데이터를 업데이트 -> 변수가 변한 것이 화면에 rendering 되지 않음
	- 화면은 로딩될 때 한번만 rendering 되기 때문에 초기값이 그대로 화면에 나타남
	- 변수 변경 시 ReactDOM.render()를 호출해서 화면을 다시 렌더링 해주면 됨 -> <u>but 값을 변경하는 일이 있을 때마다 render 함수를 호출하지 않으면 화면에 해당 변경 사항이 반영되지 않음</u>
- react에서는 state를 사용해서 변수를 관리, rerender 해준다.
	- setState 함수는 인자를 state로 설정 + trigger rendering을 함!
	- state를 직접 조작하면 state 값은 변하지만 rerender 되지 않아 화면에 나타나지 않음
	- `setState(curr => curr+1)` 현재 state를 base로 다음 state를 계산할 때는 함수를 사용하는게 더 안전함	
- React는 UI에서 변경된 부분만 update 해줌 -> super optimized for interactive web site
	- ex. 카운터 프로그램
		- vanilla js -> 버튼 클릭 시 모든 node가 rerender
		- react -> 숫자 부분만 변경


		
