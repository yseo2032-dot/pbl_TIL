import type { Lion } from "../types/lion.js";

interface DetailCardProps {
  lion: Lion;
}


function DetailCard({ lion }: DetailCardProps) {
  return (
    <div className="detail-card">

      <h3>{lion.name}</h3>

      <p className="part">
        {lion.part}
      </p>

      <div className="section">
        <strong>자기소개</strong>

        <p>{lion.detail}</p>
      </div>

      <div className="section">
        <strong>연락처</strong>

        <ul>
          <li>Email: {lion.email}</li>
          <li>Phone: {lion.phone}</li>
          <li>{lion.site}</li>
        </ul>
      </div>

      <div className="section">
        <strong>관심 기술</strong>

        <ul>
          {lion.skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <strong>한 마디</strong>

        <p>{lion.comment}</p>
      </div>

    </div>
  );
}

export default DetailCard;