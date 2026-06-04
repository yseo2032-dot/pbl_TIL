# 📘 Today I Learned

### 1. 오늘 배운 내용
-Supabase 연동


### 2. 핵심 정리 (내 언어로)
-Project URL을 잘못 넣으면 연결 자체가 안 됨
⇒ /rest/v1 까지 넣는 게 아니라 프로젝트 주소까지만 넣어야 함
-Supabase 데이터 타입과 TypeScript 타입을 맞춰야 함
⇒ DB는 nullable인데 TS는 string으로 선언하면 에러 발생


### 3. 결과 이미지(스크린샷)
-<img width="802" height="527" alt="스크린샷 2026-06-04 오후 5 06 22" src="https://github.com/user-attachments/assets/f886c96e-7fd7-4bb9-922a-829e6ac3ac4f" />
-<img width="449" height="404" alt="스크린샷 2026-06-04 오후 5 06 41" src="https://github.com/user-attachments/assets/e7a0ee6a-a938-4c3d-8461-4dc87887d406" />
-<img width="425" height="435" alt="스크린샷 2026-06-04 오후 5 07 31" src="https://github.com/user-attachments/assets/2a73e340-5da7-4b6f-b2a0-517535dda428" />
<img width="792" height="715" alt="스크린샷 2026-06-04 오후 5 07 03" src="https://github.com/user-attachments/assets/24d5024f-1644-475a-abfb-b9285052badc" />


### 4. 느낀 점
-처음에는 단순히 데이터를 저장하는 기능이라고 생각했는데, 직접 연동해 보니 인증이나 권한 설정 등 생각보다 고려해야 할 부분이 많다는 것을 알게 되었다.
특히 오류가 발생했을 때 원인을 찾고 해결하는 과정이 쉽지는 않았지만, 실제 웹 서비스가 어떻게 동작하는지 이해하는 데 도움이 되었다.
