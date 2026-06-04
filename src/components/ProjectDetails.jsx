import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from './PageLayout'
import './ProjectDetails.css'

const images = [
  '/Capture1.PNG',
  '/Capture2.PNG',
  '/capture3.PNG',
  '/Capture4.PNG',
  '/capture5.PNG',
  '/Capture888.PNG',
]

function ProjectDetails() {
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

          <h1 className="project-title">Lense-Solidaire</h1>

          <div className="project-image-wrapper">
            <img
              src={images[current]}
              alt={`Capture ${current + 1} du projet Lense-Solidaire`}
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
            Plateforme intelligente qui assiste les associations dans l&apos;étiquetage
            équitable des objets d&apos;occasion grâce à l&apos;IA et une gestion centralisée
            des règles de prix.
          </p>

          <h2 className="project-subtitle">Objectif</h2>
          <p className="project-text">
            Aider salariés et bénévoles à étiqueter les articles reçus pour les revendre à un
            prix juste, en s&apos;appuyant sur des critères clairs et une base de règles
            partagée.
          </p>

          <h2 className="project-subtitle">Points clés</h2>
          <ul className="project-list">
            <li>Réduction des écarts de prix entre objets similaires</li>
            <li>Standardisation de l&apos;étiquetage</li>
            <li>Centralisation des règles de prix</li>
            <li>Transparence pour les associations et les donateurs</li>
          </ul>

          <h2 className="project-subtitle">Technologies</h2>
          <ul className="project-list">
            <li><strong>Frontend</strong> : React (Netlify)</li>
            <li><strong>Backend</strong> : Express.js + MongoDB Atlas (Render)</li>
            <li><strong>IA</strong> : MobileNet via TensorFlow.js</li>
            <li><strong>Admin</strong> : gestion sécurisée des règles</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export default ProjectDetails
