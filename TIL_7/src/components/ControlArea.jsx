function ControlArea({
  totalCount,
  status,
  isLoading,
  hasError,
  onToggleForm,
  onDelete,
  onRandomOne,
  onRandomFive,
  onReset,
  onRetry,
}) {
  return (
    <>
      <section className="control-area">
        <button type="button" onClick={onToggleForm}>
          아기 사자 추가
        </button>

        <button type="button" onClick={onDelete}>
          마지막 아기 사자 삭제
        </button>

        <span>총 {totalCount}명</span>
      </section>

      <section className="control-area">
        <button type="button" onClick={onRandomOne} disabled={isLoading}>
          랜덤 1명 추가
        </button>

        <button type="button" onClick={onRandomFive} disabled={isLoading}>
          랜덤 5명 추가
        </button>

        <button type="button" onClick={onReset} disabled={isLoading}>
          전체 새로고침
        </button>

        <span>{status}</span>

        {hasError && (
          <button type="button" onClick={onRetry} disabled={isLoading}>
            재시도
          </button>
        )}
      </section>
    </>
  );
}

export default ControlArea;