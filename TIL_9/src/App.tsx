import { useMemo, useState } from "react";
import {
  Routes,
  Route,
  useSearchParams,
  useParams,
  Link,
  Navigate,
} from "react-router-dom";

import useLions from "./hooks/useLions.js";
import useAuth from "./hooks/useAuth.js";
import type { Lion } from "./types/lion.js";

import ControlArea from "./components/ControlArea.js";
import FilterArea from "./components/FilterArea.js";
import LionForm from "./components/LionForm.js";
import LionCard from "./components/LionCard.js";
import DetailCard from "./components/DetailCard.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";

interface ListPageProps {
  lions: Lion[];
  status: string;
  isLoading: boolean;
  hasError: boolean;
  isLoggedIn: boolean;
  userEmail: string | undefined;
  addRandomLions: (count: number) => void;
  resetLions: () => void;
  retry: () => void;
  addLion: (lion: Lion) => void;
  deleteLastLion: () => void;
  fetchLions: (count: number) => Promise<Omit<Lion, "id" | "isMe">[]>;
  onLogout: () => void;
}

function ListPage({
  lions,
  status,
  isLoading,
  hasError,
  isLoggedIn,
  userEmail,
  addRandomLions,
  resetLions,
  retry,
  addLion,
  deleteLastLion,
  fetchLions,
  onLogout,
}: ListPageProps) {
  const [showForm, setShowForm] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const partFilter = searchParams.get("part") || "all";
  const sortFilter = searchParams.get("sort") || "latest";
  const searchText = searchParams.get("search") || "";

  const updateParams = (key: string, value: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (
      (key === "part" && value === "all") ||
      (key === "sort" && value === "latest") ||
      (key === "search" && value.trim() === "")
    ) {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }
    setSearchParams(nextParams);
  };

  const visibleLions = useMemo(() => {
    let result = [...lions];
    if (partFilter !== "all") {
      result = result.filter((lion) => lion.part === partFilter);
    }
    if (searchText.trim() !== "") {
      result = result.filter((lion) =>
        lion.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (sortFilter === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name, "ko-KR"));
    }
    return result;
  }, [lions, partFilter, sortFilter, searchText]);

  return (
    <main className="container">
      {!isLoggedIn && (
        <p className="auth-notice">
          명단을 수정하려면 <Link to="/login">로그인</Link>이 필요합니다.
        </p>
      )}

      <ControlArea
        totalCount={visibleLions.length}
        status={status}
        isLoading={isLoading}
        hasError={hasError}
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onToggleForm={() => setShowForm((prev) => !prev)}
        onDelete={deleteLastLion}
        onRandomOne={() => addRandomLions(1)}
        onRandomFive={() => addRandomLions(5)}
        onReset={resetLions}
        onRetry={retry}
        onLogout={onLogout}
      />

      <FilterArea
        partFilter={partFilter}
        sortFilter={sortFilter}
        searchText={searchText}
        onPartChange={(value) => updateParams("part", value)}
        onSortChange={(value) => updateParams("sort", value)}
        onSearchChange={(value) => updateParams("search", value)}
      />

      {showForm && isLoggedIn && (
        <LionForm
          onAddLion={addLion}
          onClose={() => setShowForm(false)}
          fetchLions={fetchLions}
          isLoading={isLoading}
        />
      )}

      {isLoading && lions.length === 0 && <p>데이터를 불러오는 중...</p>}

      <section className="card-area">
        <div className="card-grid">
          {visibleLions.map((lion, index) => (
            <LionCard
              key={lion.id ?? `${lion.name}-${index}`}
              lion={lion}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

interface DetailPageProps {
  lions: Lion[];
}

function DetailPage({ lions }: DetailPageProps) {
  const { id } = useParams();
  const lion = lions[Number(id)];

  if (!lion) {
    return (
      <main className="container">
        <p>해당 아기 사자를 찾을 수 없습니다.</p>
        <Link to="/" className="back-button">목록으로 돌아가기</Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/" className="back-button">← 목록으로</Link>
      <DetailCard lion={lion} />
    </main>
  );
}

function App() {
  const { user, authLoading, signIn, signUp, signOut } = useAuth();
  const {
    lions,
    status,
    isLoading,
    hasError,
    addRandomLions,
    resetLions,
    retry,
    addLion,
    deleteLastLion,
    fetchLions,
  } = useLions();

  if (authLoading) {
    return <main className="container"><p>로딩 중...</p></main>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ListPage
            lions={lions}
            status={status}
            isLoading={isLoading}
            hasError={hasError}
            isLoggedIn={!!user}
            userEmail={user?.email}
            addRandomLions={addRandomLions}
            resetLions={resetLions}
            retry={retry}
            addLion={addLion}
            deleteLastLion={deleteLastLion}
            fetchLions={fetchLions}
            onLogout={() => { void signOut(); }}
          />
        }
      />
      <Route path="/lions/:id" element={<DetailPage lions={lions} />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <LoginPage onLogin={signIn} />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" replace /> : <SignupPage onSignup={signUp} />}
      />
    </Routes>
  );
}

export default App;
