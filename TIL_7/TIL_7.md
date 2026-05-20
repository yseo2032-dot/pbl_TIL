# 📘 Today I Learned

### 1. 오늘 배운 내용
-React Router


### 2. 핵심 정리 (내 언어로)
-useSearchParams()를 사용하면 검색/정렬 상태를 URL에 저장 가능
⇒ 기존에는 그냥 useState처럼 생각했는데 URL이 같이 바뀌어서 처음엔 흐름 이해가 헷갈렸음

React 버전에 따라 ReactDOM 사용 방식이 다를 수 있음
⇒ React 18에서는 createRoot()를 사용해야 하는데 예전 방식인 ReactDOM.render()랑 헷갈려서 오류가 발생했음


### 3. 결과 이미지(스크린샷)
-<img width="788" height="333" alt="스크린샷 2026-05-21 오전 12 38 48" src="https://github.com/user-attachments/assets/ca9c55e9-d445-45ff-9754-c5e62fea0b6a" />
<img width="785" height="769" alt="스크린샷 2026-05-21 오전 12 38 37" src="https://github.com/user-attachments/assets/7943cc2e-f6be-481c-814a-165b56cd6004" />



### 4. 느낀 점
-리액트라우터의 동작원리를 하나하나 이해하고 저번에 써놓은 코드에다가 적용해보니까 수월했다
그치만 구현 과정에서 React 버전 문제나 Router 설정 오류 때문에 흰 화면이 뜨는 문제도 있었는데
오류 메시지를 확인하면서 하나씩 해결해보니 디버깅 경험에도 도움이 되었다.
