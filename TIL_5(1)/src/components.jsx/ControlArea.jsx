function ControlArea() {
  return (
    <>
      <section className="control-area">
        <button id="addBtn">아기 사자 추가</button>

        <button id="deleteBtn">
          마지막 아기 사자 삭제
        </button>

        <span id="totalCount">총 9명</span>
      </section>

      <section className="control-area">

        <button id="randomOneBtn">
          랜덤 1명 추가
        </button>

        <button id="randomFiveBtn">
          랜덤 5명 추가
        </button>

        <button id="resetBtn">
          전체 새로고침
        </button>

        <span id="status">준비완료</span>

        <button
          id="retryBtn"
          className="hidden"
        >
          재시도
        </button>

      </section>
    </>
  );
}

export default ControlArea;