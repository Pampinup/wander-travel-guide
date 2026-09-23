function CityMap({ city, country }) {
  const location = `${city}, ${country}`;
  const mapQuery = encodeURIComponent(location);

  return (
    <section className="city-map">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">EXPLORE</p>

          <h2>Explore {city}</h2>

          <p className="section-description">
            Take a look around the city and discover the places waiting to be
            explored.
          </p>
        </div>

        <div className="map-container">
          <iframe
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            title={`Map of ${city}, ${country}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CityMap;
