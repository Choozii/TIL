<h3>node_modules로부터 우리를 구원해 줄 Yarn Berry</h3>

- yarn berry

  - 새로운 패키지 관리 시스템

- npm

  - Node.js 설치 시에 기본적으로 제공되는 패키지 관리 시스템, 비효율적이거나 깨져있는 부분이 많음
  - 파일 시스템(node_modules)를 이용해 의존성 관리
  - npm은 패키지를 찾기 위해 계속 상위 디렉토리의 node_modules 폴더를 탐색
  - 패키지를 바로 찾지 못할수록 느린 I/O 호출 반복
  - 상위 디렉토리 환경에 따라 동작이 변할 수 있음
  - Yarn v1이나 npm은 기본적인 의존성 트리의 유효성까지만 검증, 각 패키지의 내용이 올바른지는 확인하지 않음

- 유령 의존성

  - 디스크 공간을 위해 의존성 트리 모양을 바꾼다 -> 원래 import 할 수 없는 라이브러리를 불러올 수 있게 되는 경우가 생김
  - 유령 의존성 현상이 있을 때 package.json에 명시되지 않은 라이브러리를 조용히 사용할 수 있게 되며, 다른 의존성을 제거했을때 소리없이 같이 사라지기도 함

- Plug'n'Play (PnP)
  - node_modules 디렉토리로 관리하는 것에 그치지 않고 보다 안전하게 의존성을 관리하고자 함
  - ```
    yarn set version berry
    ```
  - Yarn Berry는 기존 Node.js 의존성 관리 시스템과 많이 다르기 때문에 패키지 단위로만 도입할 수 있음
  - Yarn Berry는 node_modules를 생성하지 않음
  - .yarn/cache 폴더에 의존성 정보가 저장
  - .pnp.cjs 파일에 어떤 패키지가 어떤 라이브러리에 의존하는지, 각 라이브러리는 어디에 위치하는지.. 의존성 정보 저장
  - Zip Filesystem
    - 각 의존성은 Zip 아카이브로 관리
    - 압축되어 있기 때문에 스토리지 용량을 크게 아낄 수 있음
    - 의존성을 구성하는 파일의 수가 줄어서 변경 사항을 감지하거나 삭제하는 작업이 빠름
  - zero install
    - 의존성을 Git으로 관리하는 것
    - Git Clone으로 저장소를 복제하면 의존성들이 바로 사용 가능한 상태가 되어, 의존성을 설치할 필요가 없어짐

> https://toss.tech/article/node-modules-and-yarn-berry
