
<h3>Map</h3>

- map 객체 : 키와 값의 쌍으로 이루어진 컬렉션
- 객체와 유사하지만 다른 점이 있음
	- key로 <u>객체를 포함</u>한 모든 값을 사용 가능
	- 이터러블
- 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성. 인수로 전달되는 값은 키와 쌍으로 이루어져 있어야 함
	```
	const map1 = new Map([['key1','value1'],['key2','value2']]);
	```
- 중복된 키를 갖는 요소가 존재할 수 없음
- map.size에 접근해서 length를 알 수 있음
- Map의 메소드
	- set : 객체에 요소를 추가할 때
	- get(key) : 인수로 전달한 키를 갖는 값을 반환, 존재a하지 않으면 undefined를 반환함
	- has : 특정 요소가 존재하는지 확인
	- delete : 특정 요소 삭제
	- clear : 일괄 삭제
- forEach를 통해 요소를 순회할 수 있다. 
	```
	map.forEach((v,k,map) => ...)
	// v : 현재 순회 중인 요소값
	// k : 현재 순회 중인 요소키
	// map : 현재 순회 중인 map 객체 자체
	```
- Map 객체는 이터러블 -> for...of, 스프레드, 디스트럭처링 사용 가능
- map.keys(), map.values(), map.entries()를 사용해서 접근 가능
