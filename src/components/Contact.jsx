import { FaLinkedin, FaGithub } from 'react-icons/fa'
import SectionTemplate from './SectionTemplate'

function Contact() {
  return (
    <SectionTemplate
      title="Me contacter"
      subtitle="Utilisez l'assistant en bas à droite pour les questions courantes, ou contactez-moi directement ci-dessous."
    >
      <div className="contact-block">
        <div className="contact-grid">
          <a
            href="https://www.linkedin.com/in/ghofrane-hedna/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin size={28} aria-hidden />
            <strong>LinkedIn</strong>
            <span>ghofrane-hedna</span>
          </a>

          <a
            href="https://github.com/GHOFRANE-AH"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub size={28} aria-hidden />
            <strong>GitHub</strong>
            <span>GHOFRANE-AH</span>
          </a>
        </div>
      </div>
    </SectionTemplate>
  )
}

export default Contact
