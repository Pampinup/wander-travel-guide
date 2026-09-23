function LocalMusic({ city }) {
  const searchQuery = encodeURIComponent(`${city} local music culture`);

  const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

  return (
    <section className="local-music">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">LOCAL CULTURE</p>

          <h2>Listen to {city}</h2>

          <p className="section-description">
            Discover the sounds, artists and musical traditions connected to{" "}
            {city}.
          </p>
        </div>

        <div className="music-card">
          <div className="music-card-content">
            <span className="music-icon" aria-hidden="true">
              ♪
            </span>

            <h3>Discover the music of {city}</h3>

            <p>
              Explore local artists, traditional music and playlists inspired by{" "}
              {city}.
            </p>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="music-button"
            >
              Explore on YouTube →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalMusic;
