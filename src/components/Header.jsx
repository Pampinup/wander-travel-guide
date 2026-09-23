import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="container">
        <a href="/" className="logo" onClick={closeMenu}>
          Wander
        </a>

        <div className={`nav-links ${isMenuOpen ? "nav-links-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#restaurants" onClick={closeMenu}>
            Restaurants
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
