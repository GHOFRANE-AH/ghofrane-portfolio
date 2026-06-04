import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout'
import './ProjectDetails.css'

const images = [
  '/ecomerce1.PNG',
  '/ecommerce2.PNG',
  '/annonce1.PNG',
  '/annonce2.PNG',
  '/commande1.PNG',
]

function ProjectEcommerceDetails() {
  const [current, setCurrent] = useState(0)

  return (
    <PageLayout>
      <div className="project-page">
        <div className="project-container">
          <div className="top-back">
            <Link to="/#projects" className="back-btn">
              ← Retour aux projets
            </Link>
          </div>

          <h1 className="project-title">Plateforme E-commerce</h1>

          <div className="project-image-wrapper">
            <img
              src={images[current]}
              alt={`Capture ${current + 1} du projet e-commerce`}
              className="project-image"
            />
            <button
              type="button"
              onClick={() => setCurrent((c) => c - 1)}
              className="nav-btn left"
              disabled={current === 0}
              aria-label="Image précédente"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setCurrent((c) => c + 1)}
              className="nav-btn right"
              disabled={current === images.length - 1}
              aria-label="Image suivante"
            >
              →
            </button>
            <div className="image-indicator">
              Image {current + 1} sur {images.length}
            </div>
          </div>

          <p className="project-text">
            Plateforme e-commerce complète : annonces produits, confirmation partielle ou
            totale des commandes, annulation avec notification email, bordereaux
            d&apos;expédition et suivi des statuts.
          </p>

          <h2 className="project-subtitle">Objectif</h2>
          <p className="project-text">
            Offrir une solution fiable pour la vente en ligne avec une gestion complète des
            commandes et une expérience utilisateur fluide.
          </p>

          <h2 className="project-subtitle">Technologies</h2>
          <ul className="project-list">
            <li><strong>Frontend</strong> : React</li>
            <li><strong>Backend</strong> : Node.js / Express</li>
            <li><strong>Base de données</strong> : MongoDB</li>
            <li><strong>Email</strong> : SendGrid</li>
          </ul>

          <h2 className="project-subtitle">Utilisateurs</h2>
          <ul className="project-list">
            <li>Clients acheteurs</li>
            <li>Administrateurs</li>
            <li>Gestionnaires logistiques</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export default ProjectEcommerceDetails
