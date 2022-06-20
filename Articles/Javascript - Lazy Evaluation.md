<h3> 지연평가(Lazy evalutaion)를 이용한 성능 개선 </h3>

- 지연 평가

  - 필요할 때까지 계산을 늦추면서 불필요한 계산을 줄일 수 있음

- ex. 0~5로 이루어진 배열에서 10을 더한 뒤, 홀수 2개만 추출하는 로직

  - 엄격한 평가의 경우

    - 홀수 2개 이외에 필요없는 결과도 계산함

  - 지연 평가
    - 이미 원하는 결과가 나온 경우 필요없는 것에 대해서는 계산을 하지 않음
    - 대상이 크면 클수록 효과를 발휘

- Lodash

  - _.chain, _.value를 이용해 지연 평가 지원

  > https://armadillo-dev.github.io/javascript/whit-is-lazy-evaluation/
