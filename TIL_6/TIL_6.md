# 📘 Today I Learned

### 1. 오늘 배운 내용
-상태와 Effect


### 2. 핵심 정리 (내 언어로)
-React에서는 props를 통해 부모 컴포넌트의 데이터를 자식 컴포넌트로 전달할 수 있음 
⇒ 같은 데이터를 여러 컴포넌트에서 일관되게 사용할 수 있었음
-filter(), sort(), includes() 등을 활용해서 검색/정렬/필터 기능을 구현할 수 있었음 
⇒ 상태값에 따라 화면 결과가 실시간으로 바뀌는 걸 확인할 수 있었음

### 3. 결과 이미지(스크린샷)
<img width="773" height="498" alt="스크린샷 2026-05-16 오전 2 52 16" src="https://github.com/user-attachments/assets/4a78d787-a6c6-4f04-a6ef-635f996b8d66" />
<img width="791" height="758" alt="스크린샷 2026-05-16 오전 2 51 51" src="https://github.com/user-attachments/assets/83b085dd-ff23-4d03-8efb-9c2dd5c67a52" />
<img width="802" height="758" alt="스크린샷 2026-05-16 오전 2 51 45" src="https://github.com/user-attachments/assets/ca519efa-47b1-4df8-9190-f3b0420bfab6" />



### 4. 느낀 점
-이번 과제에서는 import 경로나 props 이름이 조금만 잘못돼도 화면이 아예 안 뜨거나 버튼이 동작하지 않는 문제가 자주 발생해서 디버깅하는 과정이 가장 힘들었다. 
실제로 FilterArea에서 sortFilter 관련 오류가 발생했을 때 화면이 전부 사라져서 당황했는데, 
콘솔 에러를 하나씩 읽어보면서 어떤 부분이 문제인지 찾는 과정이 React 개발에서 중요하다는 걸 느낄 수 있었다.
