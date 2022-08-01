- DOM 노드 탐색
  - 취득한 노드를 기점으로 부모, 형제, 자식 노드에 접근할 수 있음
  - 자식 노드 탐색
    - childNodes
    - firstChild/lastChild
  - 부모 노드 탐색
    - parentNode
  - 형제 노드 탐색
    - previousSibling/nextSibling
- 노드의 텍스트 조작

  - nodeValue

    - 텍스트 노드의 값을 참조하고 할당할 수 있음
    - <u>텍스트 노드가 아닌 노드를 참조하는 경우 null을 반환</u>

    ```
    const $textNode = document.getElementById('foo').firstChild;
    //텍스트 노드는 요소 노드의 자식 노드이므로 firstChild 프로퍼티를 사용해 탐색
    $textNode.nodeValue = "world";
    console.log($textNode.nodeValue);
    ```

  - textContent
    - 해당 노드와 모든 자손 노드의 텍스트를 모두 가져올 수 있음
    - textContent 프로퍼티에 문자열을 할당하면 해당 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가.
    - <u>html 마크업이 있어도 텍스트로 취급됨.</u>

- DOM 조작

  - 새로운 노드를 생성해서 DOM 트리에 추가하는 과정. 리플로우, 리페인트 발생 -> 성능에 영향을 줌
  - innerHTML : (get) 해당 요소 내의 HTML 마크업을 문자열로 반환/(set) HTML 마크업이 파싱되어 자식노드로 DOM에 반영
  - HTML을 파싱해서 반영하기 때문에 XSS에 취약함
  - DOMPurify 같은걸 써서 잠재적 위험을 제거할 수 있음

- DOM에 노드 생성, 추가
  - createElement, createTextNode
  - appendChild, insertBefore
  - 노드를 생성하고 기존 DOM에 자식 노드로 추가
