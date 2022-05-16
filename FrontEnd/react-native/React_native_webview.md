<h1> 리액트 네이티브 웹뷰 가이드 </h1>

<h3>- Webview를 사용하는 방법</h3>

- 인라인 HTML

  WebView를 사용하는 가장 간단한 방법 - 렌더링하고 싶은 HTML 소스를 source에 보내기
  originWhiteList 프로퍼티를 ['*']으로 설정해두어야 함
  새로운 static html을 전달하면 WebView는 리렌더링 됨

        ```
        <WebView
            originWhitelist={['*']}
            source={{ html: '<h1>This is a static HTML source!</h1>' }}
        />
        ```

- 기본 URL 소스

  제일 흔하게 사용되는 방식

  ```
  <WebView source={{ uri: 'https://reactnative.dev/' }} />;
  ```

<h3>- 네비게이션 상태 변화 컨트롤</h3>

- 웹뷰에서 유저의 조작을 가로채서 다른 걸 하고 싶을 때 : onNavigationStateChange function을 사용할 수 있음
- 웹뷰 로딩이 시작되거나 끝나면 호출되는 함수
- navState로 url을 참조할 수 있고, 변경을 감지할 수 있음

<h3>- 파일 업로드</h3>

- ios

  - Info.plist에 permission 명시

- Android

  - AndroidManifext.xml에 permission 추가

<h3>- JS와 Native 간의 통신</h3>

웹뷰와 웹에서 데이터를 주고 받기 위해 RN webview는 세가지 옵션 제공

1.  RN -> Web : injectedJavaScript prop
2.  RN -> Web : injectJavascript method
3.  Web -> RN : postMessage, onMessage prop

---

1. InjectedJavascript prop

   자바스크립트 코드를 웹뷰로 inject해야할 때 요구됨
   해당 스크립트는 웹 페이지가 처음으로 로딩됐을 때 즉각 실행됨.

   \*페이지가 재로딩 되더라도 오직 한번만 실행됨.

2. injectJavascript

   injectedJavascript prop은 오직 한번만 실행되지만, injectJavascript는 재실행 됨

3. window.ReactNativeWebView.postMessage 메소드 and onMessage prop

   웹에서 리액트 네이티브쪽으로 통신을 하고 싶을 때 사용
   postMessage는 스트링으로 된 하나의 인자만 받음
   RN 코드에서 onMessage를 설정해야하고, 아니면 window.ReactNativeWebView.postMessage가 웹페이지에 삽입되지 않음

> 출처 : https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#communicating-between-js-and-native
