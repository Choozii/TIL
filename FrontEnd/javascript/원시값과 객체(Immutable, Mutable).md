<h3>원시값과 객체 : immutable, mutable</h3>

- 자바스크립트 데이터 타입은 원시타입과 객체타입으로 나뉨
-  차이점
	1. - 원시값은 변경 불가능한 값(immutable)
		- 객체는 변경 가능한 값(mutable)임
	2. - 변수에 원시값을 할당하면 메모리 공간에 실제값이 할당
		- 변수에 객체를 할당하면 메모리 공간에는 참조값이 할당됨
	3. - 변수를 다른 변수에 전달 -> 원시값이 복사되어 전달
		- 객체를 다른 변수에 할당 -> 참조값이 복사되어 전달

---
- 원시값
	- 변경 불가능한 값. 읽기 전용.
	- 어떤 일이 있어도 불변, 데이터의 신뢰성을 보장함
	```
	var score = 80;
	var copy = score;
	console.log(copy); //80
	score = -80;
	console.log(copy); //80
	```
	=> score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값

- 객체
	- 객체는 변경 가능한 값
	- 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있음
	- 객체만 mutable한 이유는 자바스크립트 객체는 크기가 일정하지 않고 property가 객체일수도 있어 deep copy하는 비용이 듦. 메모리의 효율적인 관리가 어려움. 메모리의 효율을 위해 어느정도의 구조적인 단점을 감안한 설계!
	- 단점 : <u>여러 식별자가 하나의 객체를 공유하는 경우 한쪽에서 객체를 변경하면 영향을 받음</u> 
	```
	var person = {
	name : 'Lee'	
	};
	var copy = person;
	copy.name = 'Kim';

	console.log(copy);	//{name : 'Kim'}
	console.log(person);	//{name : 'Kim'}
	```
