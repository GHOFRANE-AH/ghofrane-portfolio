import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'

function Hero() {
  return (
    <header className="hero">
      <div className="hero-grid">
        <img
          src="/ghofrane-image.JPG"
          alt="Portrait de Ghofrane Hedna"
          className="hero-photo"
          width={200}
          height={200}
        />
        <div>
          <h1>Ghofrane Hedna</h1>
          <p className="hero-subtitle">Développeuse Fullstack</p>
          <p className="hero-text">
            Je conçois des applications web accessibles et robustes, avec une attention
            particulière à l&apos;expérience utilisateur et à la qualité du code — en équipe
            ou en autonomie.
          </p>
          <div className="btn-group">
            <a href="/cv-informatique.pdf" download className="btn btn-primary">
              <FaFileDownload aria-hidden /> Mon CV
            </a>
            <a
              href="https://github.com/GHOFRANE-AH?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaGithub aria-hidden /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ghofrane-hedna/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaLinkedin aria-hidden /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
