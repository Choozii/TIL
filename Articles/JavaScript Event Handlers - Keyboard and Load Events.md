<h3>자바스크립트 이벤트 핸들러 - 키보드와 load 이벤트</h3>

- Introduction

  - 앱이 실행될 때 다양한 액션(이벤트)가 발생
  - 이러한 이벤트들에 응답하기 위해 '이벤트 핸들러'를 할당
  - DOM 요소에 발생하는 이벤트는 DOM의 해당 이벤트와 관련된 property에 핸들러를 할당해 처리 가능
  - 해당 아티클에서는 input 요소에서의 onkeydown, onkeypress, DOM 요소의 onload에 대해서 알아봄
  - 오디오나 비디오같은 미디어 요소를 위한 onloadeddata도 알아봄

- onkeydown

  - input element의 onkeydown property에 keydown 이벤트를 다루는 함수를 설정할 수 있음
  - keydown 이벤트는 어떤 키가 눌렸을 때 발생함 ( 문자가 입력 되든 되지 않든 발생 )
  - keypress 이벤트는 어느 문자가 입력되었는지 제공하는 반면, keydown 이벤트는 어느 키가 눌렸는지 코드를 제공해줌
  - 예를 들어, 'a'를 입력하면 keydown 이벤트에서는 key code 65를 반환하고, keypress는 'a'의 아스키 코드인 97를 반환함
  - keypress는 더이상 사용하지 않는 문법이므로 production에서 사용하지 말아야 함

  - 파이어폭스 65 버전부터 중국어, 일본어, 한국어 사용자에 대해서 key down 이벤트는 IME 구성 중에도 발생됨
  - IME 구성 중에는 keydown 이벤트를 무시할 수 있음 -> keydown이 제공하는 event 객체의 isComposing property를 체크

    ```
    input.onkeydown =  event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    };
    ```

  - 한, 중, 일 언어를 입력할 때마다 isCoposing은 true, keyCode는 229임

- onkeyup

  - onkeyup은 keyup 이벤트의 property
  - keyup 이벤트는 눌려져있던 키를 뗄 때 발생함
  - keyip 이벤트는 눌려져있던 키의 code를 제공함
  - 예를들어, 'a'를 눌렀을 때 키코드인 65를 반환함
  - keyup 이벤트 또한 IME 구성 중에도 발생함

- onload

  - load 이벤트의 property
  - 어떤 element가 load 완료될 때 onload는 발생함
  - onload가 발생할 때, document 내부의 모든 객체들은 DOM 안에 존재해야함
  - DOMContentLoaded, DOMFrameContentLoaded : 페이지의 DOM들이 로드되고 나서 발생, 다른 리소스들이 로드될때까지 기다리진 않음

- onloadeddata

  - 미디어의 첫번째 프레임이 로딩을 완료하면 발생
  - onloadeddata 프로퍼티에 이벤트 핸들러를 할당

    > 출처 : https://levelup.gitconnected.com/javascript-events-handlers-keyboard-and-load-events-1b3e46a6b0c3
