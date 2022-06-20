<h3>Iterable과 Iterator 이해하기</h3>
   
 - Iteration protocol
     - 특정 조건을 만족하면 Iterable 또는 Iterator라는 규약
 - Iterable
    - 반복 가능한 객체
    - iterable 객체는 for...of, spread syntax, destructuring에 사용 가능
    - 객체 내에 [Symbol.iterator] 메서드가 존재하고, 해당 메서드는 Iterator 객체를 반환해야 함
 - Iterator
    - 반복을 실행하는 반복기
    - 객체 내에 next 메서드가 있고, 해당 메서드는 { done:boolean과 value:any } 형태의 객체를 반환해야 함
    - next 메서드 호출의 결과로 done 값이 true를 리턴했다면, 이후 호출들에 대한 done 값도 true여야 함

        ```
        const iterable = {
            [Symbol.iterator](){
                let i = 0;

                //iterator 객체 반환
                return {
                    next(){
                        while(i < 10){
                            //iteratorResult 객체 반환
                            return { value : i++, done : false }
                        }
                        return { done : true }
                    }
                }
            }
        }
        ```

- well-formed iterable - iterator이면서 iterable인 객체 - 자기 자신의 상태를 기억할 수 있음

  ```
  const iterable = {
    i: 0,
    next(){
        while(this.i < 10) {
            return { value: this.i++, done: false }
        }
        return { done: true }
    },
    [Symbol.iterator]() {
        return this
    }
  }
    const iter = iterable\[Symbol.iterator]()

    console.log(iter.next()) // { value: 0, done: false }
    console.log(iter.next()) // { value: 1, done: false }
    console.log(iter.next()) // { value: 2, done: false }
  ```

- 자바스크립트는 well-formed iterable을 생성할 수 있는 제네레이터 함수를 제공함

> https://armadillo-dev.github.io/javascript/what-is-iterable-and-iterator/
