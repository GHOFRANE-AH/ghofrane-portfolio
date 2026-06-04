function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>© {year} Ghofrane Hedna — Tous droits réservés.</p>
      <div className="site-footer-links">
        <a href="https://github.com/GHOFRANE-AH" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ghofrane-hedna/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
