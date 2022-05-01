
<h3>set</h3>

- set : 중복되지 않는 유일한 값들의 집합
- 배열과 유사하지만 다른 점이 있음
  - 중복되는 요소를 가지고 있지 않음
  - 요소 순서에 의미가 없음
  - 인덱스로 요소에 접근이 불가능 함
	  
	```
	  //set을 사용한 배열의 중복 요소 제거
	  const uniq = array => [...new Set(array)];
	  console.log(uniq([1,1,2,2,3,3])) // [1,2,3]
	```

- set.size에 접근해서 length를 알 수 있음
- set의 메소드
  - add() : 값을 저장
  - has() : set에 특정 요소가 존재하는지 확인/ boolean
  - delete() : 요소를 삭제 / boolean
  - clear() : 요소 일괄 삭제
- forEach를 사용하여 순회 가능. 첫번째 인수와 두번째 인수는 같은 값이다.
- set 객체는 이터러블이다 -> for...of, 스프레드, 배열 디스트럭처링이 가능
- set을 통해 수학적 집합(교집합, 합집합, 차집합)을 구현할 수 있다.
- 교집합
	 ``` 
	 Set.prototype.intersection = function(set){
	 return new Set([...this].filter(v => set.has(v))
	 }
	```
- 합집합
	``` 
	Set.prototype.union = function(set){
	return new Set([...this, ...set]);
	} 
	```
- 차집합
	```
	Set.prototype.difference = function(set){
		return new Set([...this].filter(el => !set.has(el)));
	}
	```
- 부분집합 여부 확인
	```
	Set.prototype.isSuperset = function(subset){
	const supersetArr = [...this];
	return new Set([...subset].every(v => supersetArr.includes(v));
	}
	```
