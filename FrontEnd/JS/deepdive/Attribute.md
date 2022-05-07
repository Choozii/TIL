<h3>Attribute</h3>

- html 어트리뷰트 vs DOM 프로퍼티
  - HTML 어트리뷰트는 html text 내부에 있는 속성값들/정적임 (초기값을 유지)
  - DOM 프로퍼티는 DOM 트리 내부에 있는 속성값들/동적임 (상태가 반영됨)
  - 상태 변화와 관계있는 DOM 프로퍼티만 최신 상태값을 관리. 상태와 관계없는 프로퍼티는 항상 동일한 값

---

- 클래스 조작

  - 클래스 get(className, classList)

    ```
    const box = document.querySelector('.box');
    console.log(box.className) // "box red"
    console.log(box.classList); // DOMTokenList[length : 2, value:"box red", 0:"box", 1:"red"]
    ```

  - DOMTokenList(classList 반환값)의 메소드

    - add(className), remove(className), item(index)

    ```
    box.classList.add('foo'); // class = "box red foo"
    box.classList.remove('foo'); // class = "box red"

    ```
