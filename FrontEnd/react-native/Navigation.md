<h3>내비게이션</h3>

- 리액트 네이티브에서는 내비게이션 기능 지원하지 않음
- 리액트 내비게이션 라이브러리 사용

- 리액트 내비게이션

  - 지원 내비게이션의 종류 : 스택, 내비게이션, 탭 내비게이션, 드로어 내비게이션 (3종류)
  - NavigationContainer, Navigator, Screen 컴포넌트로 구성
  - 리액트 내비게이션은 기능별로 모듈이 분리되어 있어 사용할 종류에 따라 따로 설치해야함
    ```
    npm install @react-navigation/stack
    ```

- stack navigation

  - 현재 화면 위에 다른 화면을 쌓으면서 화면 이동 -> pop하면 이전 화면으로 되돌아갈 수 있음

    ```
    //navigators/index.js

    const Stack = createStackNavigation();

    const StackNavigation = () =>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}>
        <Stack.Screen name="List" component={List}>
    </Stack.Navigator>
    ```

    ```
    //App.js

    <NavigationContainer>
    <StackNavigation />
    </NavigationContainer>
    ```

  - navigation.navigate(화면이름) : 해당 화면으로 이동
  - stack navigation의 header에 대한 option을 설정할 수 있음(back 버튼 스타일, 타이틀 등..)
