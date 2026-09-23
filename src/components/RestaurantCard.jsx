function RestaurantCard({ name, description, address }) {
  const mapsQuery = encodeURIComponent(`${name}, ${address}`);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <article className="restaurant-card">
      <div className="restaurant-card-content">
        <p className="restaurant-card-label">LOCAL RECOMMENDATION</p>

        <h3>{name}</h3>

        <p className="restaurant-description">{description}</p>

        <p className="restaurant-address">📍 {address}</p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="restaurant-link"
        >
          View on Google Maps →
        </a>
      </div>
    </article>
  );
}

export default RestaurantCard;
