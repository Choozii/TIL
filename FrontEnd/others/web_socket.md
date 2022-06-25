<h3>web socket</h3>

- http

  - request, response로 이루어져 있음
  - 브라우저가 request하면 서버가 response
  - real-time으로 이루어지진 않음
  - stateless : 요청에 대한 response 후에 서버가 유저를 기억하지 못함

- web socket

  - http와는 다른 프로토콜
  - 브라우저가 서버로 request를 보내면 서버가 accept/deny 함
  - connect 되어있는 동안 서버가 유저에 대해서 기억하고 있음
  - browser와 sever가 web socket을 통해 통신을 하게 되면 connection은 open -> 해당 통신은 원하는 순간까지 계속 열려있을 것
  - web socket은 bidirectional. 서버와 브라우저가 자유롭게 메시지를 주고 받을 수 있음.
  - 채팅 어플을 예로 들면, 유저들은 각각 직접적으로 연결된 것이 아니라 다 같은 웹소켓 서버에 입장해있는 것
  - 웹소켓 서버는 A가 보낸 메시지를 받음
  - 받은 메시지를 B와 C에게 보내줌
  - 해당 구조는 웹 소켓 서버에 부하가 많이 감
  - web socket은 realtime 채팅, 알림 등에 사용됨

- webRTC는 브라우저 간 연결이 가능하도록 해줌

- implementation
  - browser가 websocket implementation을 위한 object를 가지고 있음
    ```
    const socket = new WebSocket(adress);
    socket.addEventListener("open", handleOnOpen);
    ```
