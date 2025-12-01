import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css';

const images = [
  '/ecomerce1.PNG',
  '/ecommerce2.PNG',
  '/annonce1.PNG',
   '/annonce2.PNG',
      '/commande1.PNG'
];

function ProjectEcommerceDetails() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="project-container">
      {/* ✅ Bouton retour en haut */}
      <div className="top-back">
        <Link to="/" className="back-btn">← Retour à l’accueil</Link>
      </div>

      <h1 className="project-title">🛒 Présentation du Projet E‑commerce</h1>

      <div className="project-image-wrapper">
        <img
          src={images[current]}
          alt={`Capture ${current + 1}`}
          className="project-image"
        />
        <button onClick={prev} className="nav-btn left" disabled={current === 0}>←</button>
        <button onClick={next} className="nav-btn right" disabled={current === images.length - 1}>→</button>
        <div className="image-indicator">Image {current + 1} sur {images.length}</div>
      </div>

      <p className="project-text">
        Conception et développement d’une plateforme e‑commerce complète : ajout et gestion d’annonces produits, 
        confirmation partielle ou totale des commandes, annulation avec notification par email, génération de 
        bordereaux d’expédition et suivi des statuts.
      </p>

      <h2 className="project-subtitle">🎯 Objectif du projet</h2>
      <p className="project-text">
        Offrir une solution moderne et fiable pour la vente en ligne, avec une gestion complète des commandes et une expérience utilisateur fluide.
      </p>

      <h2 className="project-subtitle">🛠️ Technologies utilisées</h2>
      <ul className="project-list">
        <li>⚛️ <strong>Frontend</strong> : React</li>
        <li>🔙 <strong>Backend</strong> : Node.js / Express</li>
        <li>🗄️ <strong>Base de données</strong> : MongoDB</li>
        <li>📧 <strong>Email</strong> : SendGrid</li>
      </ul>

      <h2 className="project-subtitle">👥 Utilisateurs concernés</h2>
      <ul className="project-list">
        <li>🛍️ Clients</li>
        <li>👩‍💼 Administrateurs</li>
        <li>📦 Gestionnaires logistiques</li>
      </ul>
    </div>
  );
}

export default ProjectEcommerceDetails;
