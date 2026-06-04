import { Link } from 'react-router-dom'
import PageLayout from './PageLayout'
import './ProjectDetails.css'

function LyterDetails() {
  return (
    <PageLayout>
      <div className="project-page">
        <div className="project-container">
          <div className="top-back">
            <Link to="/#projects" className="back-btn">
              ← Retour aux projets
            </Link>
          </div>

          <h1 className="project-title">Lyter</h1>

          <div className="project-video-wrapper">
            <video controls className="project-video" preload="metadata">
              <source src="/lyter-demo.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>

          <p className="project-text">
            Plateforme intelligente combinant génération de photos par IA et création de
            contenu professionnel : portraits, illustrations LinkedIn et recommandations
            visuelles adaptées à chaque publication.
          </p>

          <h2 className="project-subtitle">Objectif</h2>
          <p className="project-text">
            Permettre aux professionnels de produire du contenu visuel de qualité pour
            LinkedIn et les réseaux, avec analyse de texte et génération d&apos;images
            personnalisées.
          </p>

          <h2 className="project-subtitle">Fonctionnalités principales</h2>
          <ul className="project-list">
            <li><strong>Mode Select</strong> — 39 styles professionnels, upload multi-photos</li>
            <li><strong>Mode Post</strong> — prompts optimisés à partir de texte LinkedIn</li>
            <li><strong>Mode Lab</strong> — analyse et sélection depuis profils / sites web</li>
            <li><strong>Mode Lyter</strong> — illustrations conceptuelles sans visage</li>
            <li>Assistant vocal, création automatique de posts, recherche par mots-clés</li>
            <li>Intégration LinkedIn (API), tags, stockage Firebase</li>
          </ul>

          <h2 className="project-subtitle">Technologies</h2>
          <ul className="project-list">
            <li><strong>Frontend</strong> : React</li>
            <li><strong>Backend</strong> : Node.js + Express</li>
            <li><strong>Base de données</strong> : Firebase Firestore + Storage</li>
            <li><strong>IA images</strong> : Google Gemini 2.5 Flash</li>
            <li><strong>IA texte</strong> : OpenAI GPT-4o-mini</li>
            <li><strong>Auth</strong> : JWT + bcrypt</li>
          </ul>

          <h2 className="project-subtitle">Modes en détail</h2>

          <h3 className="project-h3">Mode Select</h3>
          <ul className="project-list">
            <li>39 styles (portraits, workspace, produits…)</li>
            <li>Upload de 1 à 10 photos, génération de 1 à 4 images</li>
          </ul>

          <h3 className="project-h3">Mode Post</h3>
          <ul className="project-list">
            <li>Texte LinkedIn → prompts IA → 2 images personnalisées</li>
          </ul>

          <h3 className="project-h3">Mode Lab</h3>
          <ul className="project-list">
            <li>Récupération visuels LinkedIn / web, recommandation des 4 meilleures images</li>
          </ul>

          <h3 className="project-h3">Mode Lyter</h3>
          <ul className="project-list">
            <li>Illustrations conceptuelles, plus de 10 styles, idéal LinkedIn</li>
          </ul>

          <h2 className="project-subtitle">Sécurité & déploiement</h2>
          <ul className="project-list">
            <li>JWT, bcrypt, CORS, validation serveur, règles Firebase</li>
            <li>Backend sur Render, frontend sur Vercel / Netlify</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}

export default LyterDetails
