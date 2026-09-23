function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              Wander
            </a>

            <p>
              Travel with curiosity. Discover places, stories and local
              experiences.
            </p>
          </div>

          <div className="footer-navigation">
            <p className="footer-title">EXPLORE</p>

            <nav aria-label="Footer navigation">
              <a href="#about">About</a>
              <a href="#restaurants">Restaurants</a>
              <a href="#gallery">Gallery</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Wander</p>

          <p>Built with React</p>

          <p className="footer-credit">
            Developed by{" "}
            <a
              href="https://portfolio-pam-ortega.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Joice Pamela Ortega
            </a>
            {" · "}
            <a
              href="https://github.com/Pampinup/wander-travel-guide"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
