function LionCard({ lion, isMe }) {
  return (
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
  );
}

export default LionCard;