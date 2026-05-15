import { useMemo, useState } from "react";
import useLions from "./hooks/useLions";

import ControlArea from "./components/ControlArea";
import FilterArea from "./components/FilterArea";
import LionForm from "./components/LionForm";
import LionCard from "./components/LionCard";
import DetailCard from "./components/DetailCard";

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

  const [showForm, setShowForm] = useState(false);
  const [partFilter, setPartFilter] = useState("all");
  const [sortFilter, setSortFilter] = useState("latest");
  const [searchText, setSearchText] = useState("");

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
        onPartChange={setPartFilter}
        onSortChange={setSortFilter}
        onSearchChange={setSearchText}
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
            <LionCard key={`${lion.name}-${index}`} lion={lion} />
          ))}
        </div>
      </section>

      <section className="detail-area">
        {visibleLions.map((lion, index) => (
          <DetailCard key={`${lion.email}-${index}`} lion={lion} />
        ))}
      </section>
    </main>
  );
}

export default App;