<h3> 브라우저의 성능 프로파일러 알아보기 </h3>

    브라우저 devtools에 있는 퍼포먼스 탭 - 정보가 많아 무서워 보일 수 있지만 실은 러닝 커브가 가파르지는 않음!

    이 아티클은 어떻게 프로파일러가 작동하는지, 어떻게 사용하면 좋을지에 대해 알아봄.

- 데이터 모델

  - 기본적으로 파이어 폭스와 크롬의 프로파일러는 매 1ms마다 스냅샷을 찍도록 설정되어있음

    ```
        A A A
        | | |
        v v v
        B B B
        |
        v
        C
    ```

  - 0ms : A가 B함수를 호출, B는 실행중

    1ms : B가 C 호출, C는 실행중

    2ms : C 함수 완료, 함수 B로 돌아감

    3ms : 스택이 비어있음

- 해당 모델의 한계

  - 1ms가 기준이기 때문에, 함수 호출에 1ms보다 적게 걸린다면 스냅샷에 나타나지 않을 가능성이 있음

- self time vs total time

  - 포로파일러에 관해서 혼란스러운 점은 self와 total time임.
  - self는 해당 함수 자신이 소요하는 시간 <u>(함수 내부에서 호출하는 다른 함수의 시간은 포함하지 않음!)</u>
  - total은 함수와 그 함수가 호출하는 자식 함수에서 소요된 총 시간
    ```
    function main() {
      superExpensiveComputation(); // < takes 1000ms
      for (let i = 0; i < 1e6; i++) {
        // ^ takes 5ms
        console.log(i);
      }
    }
    ```
  - main의 self time은 5ms, total time은 1005ms

  - total time은 코드의 문제가 되는 부분을 파악할 수 있게 해줌, self time은 주목해야할 함수를 추적할 때 도움이 됨

- UI 알아보기

  - call tree(호출트리)
    <img src="./assets/profiler.avif"/>
    [1] 프로파일러는 브라우저의 모든 프로세스를 프로파일링하기 때문에, 우리가 작업하는 web app을 검사하고 있는것이 맞는지 확인 필요

    [2] 자바스크립트에 대해서만 스택들을 확인하도록 함

    [3]generateNumber 함수를 호출했을 때 대부분의 시간을 소요한다는 것을 확인 가능

    - call tree를 사용하면 상위 레벨의 함수들을 파악하기 좋음. 어디서부터 확인해야할 지 파악하는 overview로는 좋지만, 긴 self time을 가진 nested function을 빠르게 찾는데는 큰 도움이 안됨

  - inverting the call stack

    - 원래 call Tree : 많은 함수가 불린걸 볼 수 있지만, 함수들이 빈 self time을 가지고 있음. 이것은 해당 함수가 실제로 시간을 소요하는 곳이 아니고, 다른 함수가 완료되기를 기다릴 뿐이라는 것을 의미함.
    - invert call stack 클릭 시 : 명확하게 어디서 시간이 소요되는지 확인 가능. 해당 inversion은 함수를 높은 self time별로 줄세우고, 트리를 flatten시켜서 보여줌.

    - call tree
      ```
      topLevel     // self 0
      first      // self 0
      second     // self 0
      third    // self 10
      fourth   // self 7
      fifth  // self 8
      ```
    - inverted call stack
      ```
      third   //self 10
      second
        topLevel
      fifth   // self 8
        fourth
          second
            topLevel
      fourth  // self 7
        second
          topLevel
      ```

- 결론
  - 해당 기능들이 문제 해결을 위한 출발점을 제공함
  - Flame Graph나 Stack Chart이 무엇인지, 비동기 코드를 profile하는 법이나 markers 같은 어려운 테크닉은 해당 아티클에서 다루지 않았음

> 출처 : https://blog.atomrc.dev/p/js-performance-profiling/
