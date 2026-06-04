interface ControlAreaProps {
  totalCount: number;
  status: string;
  isLoading: boolean;
  hasError: boolean;
  isLoggedIn: boolean;
  userEmail: string | undefined;
  onToggleForm: () => void;
  onDelete: () => void;
  onRandomOne: () => void;
  onRandomFive: () => void;
  onReset: () => void;
  onRetry: () => void;
  onLogout: () => void;
}

const TOOLTIP = "로그인이 필요합니다";

function ControlArea({
  totalCount,
  status,
  isLoading,
  hasError,
  isLoggedIn,
  userEmail,
  onToggleForm,
  onDelete,
  onRandomOne,
  onRandomFive,
  onReset,
  onRetry,
  onLogout,
}: ControlAreaProps) {
  return (
    <>
      {isLoggedIn && (
        <section className="control-area control-area--right">
          <span className="user-email">{userEmail}</span>
          <button type="button" onClick={onLogout} className="logout-btn">로그아웃</button>
        </section>
      )}

      <section className="control-area">
        <button
          type="button"
          onClick={onToggleForm}
          disabled={!isLoggedIn}
          title={!isLoggedIn ? TOOLTIP : undefined}
        >
          아기 사자 추가
        </button>

        <button
          type="button"
          onClick={onDelete}
          disabled={!isLoggedIn}
          title={!isLoggedIn ? TOOLTIP : undefined}
        >
          마지막 아기 사자 삭제
        </button>

        <span>총 {totalCount}명</span>
      </section>

      <section className="control-area">
        <button
          type="button"
          onClick={onRandomOne}
          disabled={isLoading || !isLoggedIn}
          title={!isLoggedIn ? TOOLTIP : undefined}
        >
          랜덤 1명 추가
        </button>

        <button
          type="button"
          onClick={onRandomFive}
          disabled={isLoading || !isLoggedIn}
          title={!isLoggedIn ? TOOLTIP : undefined}
        >
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
