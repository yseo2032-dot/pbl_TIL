import { useMemo, useState } from "react";
import {
  Routes,
  Route,
  useSearchParams,
  useParams,
  Link,
} from "react-router-dom";

import useLions from "./hooks/useLions.js";
import type { Lion } from "./data/lions.js";

import ControlArea from "./components/ControlArea.js";
import FilterArea from "./components/FilterArea.js";
import LionForm from "./components/LionForm.js";
import LionCard from "./components/LionCard.js";
import DetailCard from "./components/DetailCard.js";

function App() {
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
            addRandomLions={addRandomLions}
            resetLions={resetLions}
            retry={retry}
            addLion={addLion}
            deleteLastLion={deleteLastLion}
            fetchLions={fetchLions}
          />
        }
      />

      <Route
        path="/lions/:id"
        element={<DetailPage lions={lions} />}
      />
    </Routes>
  );
}

interface ListPageProps {
  lions: Lion[];
  status: string;
  isLoading: boolean;
  hasError: boolean;
  addRandomLions: (count: number) => void;
  resetLions: () => void;
  retry: () => void;
  addLion: (lion: Lion) => void;
  deleteLastLion: () => void;
  fetchLions: (count: number) => Promise<Lion[]>;
}

function ListPage({
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
}:ListPageProps) {
  const [showForm, setShowForm] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const partFilter = searchParams.get("part") || "all";
  const sortFilter = searchParams.get("sort") || "latest";
  const searchText = searchParams.get("search") || "";

  const updateParams = (key: string, value:string) => {
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
        lion.name
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    if (sortFilter === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name, "ko-KR")
      );
    }

    return result;
  }, [lions, partFilter, sortFilter, searchText]);

  return (
    <main className="container">
      <ControlArea
        totalCount={visibleLions.length}
        status={status}
        isLoading={isLoading}
        hasError={hasError}
        onToggleForm={() => setShowForm((prev) => !prev)}
        onDelete={deleteLastLion}
        onRandomOne={() => addRandomLions(1)}
        onRandomFive={() => addRandomLions(5)}
        onReset={resetLions}
        onRetry={retry}
      />

      <FilterArea
        partFilter={partFilter}
        sortFilter={sortFilter}
        searchText={searchText}
        onPartChange={(value) =>
          updateParams("part", value)
        }
        onSortChange={(value) =>
          updateParams("sort", value)
        }
        onSearchChange={(value) =>
          updateParams("search", value)
        }
      />

      {showForm && (
        <LionForm
          onAddLion={addLion}
          onClose={() => setShowForm(false)}
          fetchLions={fetchLions}
          isLoading={isLoading}
        />
      )}

      <section className="card-area">
        <div className="card-grid">
          {visibleLions.map((lion, index) => (
            <LionCard
              key={`${lion.name}-${index}`}
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

        <Link to="/"
        className="back-button">
          목록으로 돌아가기
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
    <Link
      to="/"
      className="back-button"
    >
      ← 목록으로
    </Link>

    <DetailCard lion={lion} />
  </main>
  );
}

export default App;