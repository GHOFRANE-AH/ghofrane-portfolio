import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
          <p className="hero-subtitle">Ghofrane Hedna · Développeuse fullstack &amp; growth hacker</p>
          <h1>Je crée votre application web, puis je la fais croître</h1>
          <p className="hero-text">
            Développeuse fullstack &amp; growth hacker : React, Node.js, IA, acquisition de
            leads, SEO et campagnes Ads.
          </p>
          <div className="btn-group">
            <Link to="/#contact" className="btn btn-primary">
              Discutons de votre projet
            </Link>
            <a href="/cv-informatique.pdf" download className="btn btn-outline">
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
