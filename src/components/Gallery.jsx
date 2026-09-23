import { useState } from "react";

function Gallery({ photos, city }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  if (!photos || photos.length < 3) {
    return null;
  }

  const galleryPhotos = photos.slice(2, 8);

  return (
    <>
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="section-heading">
            <p className="section-eyebrow">GALLERY</p>

            <h2>Discover {city}</h2>

            <p className="section-description">
              A glimpse of the places, colours and details that make {city}{" "}
              unique.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <article
                className={`gallery-item gallery-item-${index + 1}`}
                key={photo.id}
              >
                <button
                  type="button"
                  className="gallery-button"
                  onClick={() => setSelectedPhoto(photo)}
                  aria-label={`View photo of ${city}`}
                >
                  <img
                    src={photo.src.large}
                    alt={photo.alt || `Photo of ${city}`}
                  />
                </button>

                <div className="gallery-overlay">
                  <a
                    href={photo.photographer_url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Photo by {photo.photographer}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo of ${city}`}
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedPhoto.src.large2x}
              alt={selectedPhoto.alt || `Photo of ${city}`}
            />

            <p>
              Photo by{" "}
              <a
                href={selectedPhoto.photographer_url}
                target="_blank"
                rel="noreferrer"
              >
                {selectedPhoto.photographer}
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
