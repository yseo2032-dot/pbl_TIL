import "./styles/style.css";

import lions from "./data/lions";

import ControlArea from "./components/ControlArea";
import FilterArea from "./components/FilterArea";
import LionCard from "./components/LionCard";
import DetailCard from "./components/DetailCard";

function App() {
  return (
    <main className="container">

      <ControlArea />

      <FilterArea />

      <form className="form-area hidden"></form>

      <section className="card-area">
        <div className="card-grid">

          {lions.map((lion, index) => (
            <LionCard
              key={index}
              lion={lion}
              isMe={index === 0}
            />
          ))}

        </div>
      </section>

      <section className="detail-area">

        {lions.map((lion, index) => (
          <DetailCard
            key={index}
            lion={lion}
          />
        ))}

      </section>

    </main>
  );
}

export default App;