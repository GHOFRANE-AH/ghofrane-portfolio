import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./ProjectDetails.css";

const images = [
  '/Capture1.PNG',
  '/Capture2.PNG',
  '/capture3.PNG',
  '/Capture4.PNG',
  '/capture5.PNG',
  '/Capture888.PNG'
]

function ProjectDetails() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % (images.length + 1))
  const prev = () => setCurrent((current - 1 + images.length + 1) % (images.length + 1))

  return (
    <div className="project-container">
      <h1 className="project-title">🌍 Présentation de Lense-Solidaire</h1>

      <div className="project-image-wrapper">
        {current < images.length ? (
          <>
            <img
              src={images[current]}
              alt={`Capture ${current + 1}`}
              className="project-image"
            />
            <button onClick={prev} className="nav-btn left">←</button>
            <button onClick={next} className="nav-btn right">→</button>
            <div className="image-indicator">Image {current + 1} sur {images.length}</div>
          </>
        ) : (
          <div className="project-end">
            <p>🎉 Toutes les images ont été affichées !</p>
          </div>
        )}
      </div>

      <p className="project-text">
        Lense-Solidaire est une plateforme intelligente qui assiste les associations dans l’étiquetage équitable des objets d’occasion grâce à l’intelligence artificielle et une gestion centralisée des règles de prix.
      </p>

      <h2 className="project-subtitle">🎯 Objectif du projet</h2>
      <p className="project-text">
        L’objectif est d’aider les salariés et bénévoles des associations à étiqueter les articles qu’ils reçoivent afin de les revendre plus tard à un prix juste...
      </p>

      <h2 className="project-subtitle">🧠 Pourquoi c’est important</h2>
      <ul className="project-list">
        <li>🔍 Éviter les écarts de prix injustifiés entre objets similaires</li>
        <li>🏷️ Standardiser l’étiquetage selon des critères clairs</li>
        <li>📊 Centraliser les règles de prix dans une base gérée</li>
        <li>🤝 Renforcer la transparence et la confiance</li>
      </ul>

      <h2 className="project-subtitle">🛠️ Technologies utilisées</h2>
      <ul className="project-list">
        <li>⚛️ <strong>Frontend</strong> : React hébergé sur Netlify</li>
        <li>🔙 <strong>Backend</strong> : Express.js + MongoDB Atlas sur Render</li>
        <li>🧠 <strong>IA</strong> : MobileNet via TensorFlow.js</li>
        <li>🔐 <strong>Espace admin</strong> : gestion sécurisée des règles</li>
      </ul>

      <h2 className="project-subtitle">👥 Utilisateurs concernés</h2>
      <ul className="project-list">
        <li>👷 Salariés et bénévoles</li>
        <li>🧑‍🔧 Encadrants techniques</li>
        <li>👩‍💼 Admins</li>
      </ul>

      <Link to="/" className="back-btn">← Retour à l’accueil</Link>
    </div>
  )
}

export default ProjectDetails
