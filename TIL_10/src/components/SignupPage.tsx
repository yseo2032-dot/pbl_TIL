import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

interface SignupPageProps {
  onSignup: (email: string, password: string) => Promise<void>;
}

export default function SignupPage({ onSignup }: SignupPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    if (password !== confirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setLoading(true);
    try {
      await onSignup(email, password);
      void navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-header">
        <h1 className="auth-title">Lion Track</h1>
        <p className="auth-subtitle">아기사자 명단을 관리하려면 로그인하세요</p>
      </div>

      <div className="auth-box">
        <h2>회원가입</h2>
        <form onSubmit={(e) => { void handleSubmit(e); }}>
          <div className="form-group">
            <label>이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@gmail.com"
            />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="6자 이상"
              minLength={6}
            />
          </div>
          <div className="form-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              placeholder="비밀번호 재입력"
            />
          </div>
          {error && <p className="auth-error-banner">{error}</p>}
          <button type="submit" disabled={loading} className="auth-button">
            {loading ? "가입 중..." : "회원가입"}
          </button>
        </form>
        <p className="auth-link">
          이미 계정이 있으신가요? <Link to="/login">로그인</Link>
        </p>
      </div>
    </div>
  );
}
