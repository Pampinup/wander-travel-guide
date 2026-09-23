function InsightCard({ icon, title, description }) {
  return (
    <article className="insight-card">
      <div className="insight-card-icon" aria-hidden="true">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default InsightCard;
