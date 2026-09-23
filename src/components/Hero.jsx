import SearchBar from "./SearchBar";

function Hero({ city, heroImage, onSearch, isLoading, loadingCity }) {
  const heroStyle = heroImage
    ? {
        backgroundImage: `
          linear-gradient(
            rgba(31, 27, 55, 0.48),
            rgba(31, 27, 55, 0.58)
          ),
          url("${heroImage}")
        `,
      }
    : undefined;

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content container">
        <p className="hero-eyebrow">.TRAVEL.</p>

        <h1>Welcome to {city}</h1>

        <p className="hero-subtitle">Discover your next destination</p>

        <SearchBar onSearch={onSearch} />
      </div>

      {isLoading && (
        <div className="hero-loading" role="status" aria-live="polite">
          <div className="loading-spinner"></div>

          <p>Discovering {loadingCity}...</p>
        </div>
      )}
    </section>
  );
}

export default Hero;
