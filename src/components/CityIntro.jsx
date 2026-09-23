function CityIntro({ cityData, image }) {
  if (!cityData) {
    return null;
  }

  return (
    <section className="city-intro" id="about">
      <div className="container city-intro-grid">
        <div className="city-intro-image">
          <img src={image} alt={`View of ${cityData.city}`} />
        </div>

        <div className="city-intro-content">
          <p className="section-eyebrow">ABOUT THE CITY</p>

          <h2>
            {cityData.city}, the heart of {cityData.country}
          </h2>

          <p>{cityData.description}</p>
        </div>
      </div>
    </section>
  );
}

export default CityIntro;
