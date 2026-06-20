import { Link } from "react-router-dom";
import type { Lion } from "../types/lion.js";

interface LionCardProps {
  lion: Lion;
  isMe?: boolean;
  index: number;
}

function LionCard({ lion, isMe, index }: LionCardProps) {
  return (
    <Link
      to={`/lions/${index}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="card"
        style={
          isMe
            ? {
                border: "2px solid #3b82f6",
              }
            : {}
        }
      >
        <div className="image-box">
          <img
            src={lion.image}
            alt={lion.name}
          />

          <span className="badge">
            {lion.skills[0]}
          </span>
        </div>

        <h3>{lion.name}</h3>

        <p className="part">
          {lion.part}
        </p>

        <p>{lion.summary}</p>
      </div>
    </Link>
  );
}

export default LionCard;