import { useState } from 'react';

import { Link } from 'react-router-dom';

import './ProjectDetails.css';






function LyterDetails() {

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

        <Link to="/" className="back-btn">← Retour à l'accueil</Link>

      </div>



      <h1 className="project-title">🤖 Présentation de Lyter</h1>


{/* 🎥 VIDÉO À LA PLACE DU CARROUSEL */}
<div className="project-video-wrapper" style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '30px 0'
}}>
  <video 
    controls 
    autoPlay 
    muted 
    loop
    className="project-video"
    style={{
      width: '100%',
      maxWidth: '500px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'block'
    }}
  >
    <source src="/lyter-demo.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la vidéo.
  </video>
</div>

      <p className="project-text">

        Lyter est une plateforme intelligente qui combine la génération de photos par IA et la création de contenu pour un usage professionnel. 

        Elle offre plusieurs modes pour créer des photos professionnelles, des illustrations LinkedIn et des recommandations de contenu basées sur vos besoins.

      </p>



      <h2 className="project-subtitle">🎯 Objectif du projet</h2>

      <p className="project-text">

        L'objectif de Lyter est de fournir une solution complète pour les professionnels qui souhaitent créer du contenu visuel de qualité 

        pour leurs réseaux sociaux, notamment LinkedIn. La plateforme utilise l'intelligence artificielle pour générer des images personnalisées, 

        analyser le contenu textuel et recommander les meilleures visuels pour chaque publication.

      </p>



      <h2 className="project-subtitle">✨ Fonctionnalités principales</h2>

      <ul className="project-list">

        <li>🎨 <strong>Mode Select</strong> : Génération de photos basée sur le style avec 39 styles professionnels disponibles</li>

        <li>📝 <strong>Mode Post</strong> : Génération automatique de prompts optimisés par IA à partir de texte LinkedIn</li>

        <li>🔬 <strong>Mode Lab</strong> : Sélection intelligente et analyse d'images depuis les profils LinkedIn et sites web</li>

        <li>🎭 <strong>Mode Lyter</strong> : Générateur d'illustrations conceptuelles à partir de texte de publication</li>

        <li>🧠 <strong>Analyse contextuelle</strong> : Comprend l'intention des publications et recommande les visuels correspondants</li>

        <li>🎙️ <strong>Assistant vocal</strong> : dictée et aide à la création de contenu</li>

        <li>⚡ <strong>Création automatique de posts</strong> : génération de publications LinkedIn à partir d’un brief / mots‑clés</li>

        <li>🔎 <strong>Recherche de posts similaires</strong> : suggestions à partir d’un mot‑clé pour s’inspirer et structurer le contenu</li>

        <li>🔗 <strong>Intégration LinkedIn (API)</strong> : récupération et analyse de contenu / visuels via API LinkedIn (selon droits d’accès)</li>

        <li>🏷️ <strong>Système de tags</strong> : Tagging complet avec plus de 100 tags prédéfinis</li>

        <li>☁️ <strong>Stockage cloud</strong> : Intégration Firebase pour un stockage sécurisé des images</li>

      </ul>



      <h2 className="project-subtitle">🛠️ Technologies utilisées</h2>

      <ul className="project-list">

        <li>⚛️ <strong>Frontend</strong> : React (Create React App) avec CSS3 personnalisé</li>

        <li>🔙 <strong>Backend</strong> : Node.js + Express.js</li>

        <li>☁️ <strong>Base de données</strong> : Firebase Firestore + Storage</li>

        <li>🧠 <strong>IA Génération d'images</strong> : Google Gemini 2.5 Flash API</li>

        <li>🤖 <strong>IA Analyse de texte</strong> : OpenAI GPT-4o-mini</li>

        <li>🔐 <strong>Authentification</strong> : JWT avec bcryptjs pour le hachage des mots de passe</li>

        <li>🌐 <strong>APIs externes</strong> : API LinkedIn pour récupérer les visuels de profil</li>

      </ul>



      <h2 className="project-subtitle">🎨 Modes de génération détaillés</h2>

      <div style={{ marginBottom: '30px' }}>

        <h3 style={{ color: 'var(--accent)', marginTop: '20px', marginBottom: '10px' }}>Mode Select - Génération basée sur le style</h3>

        <ul className="project-list">

          <li>39 styles professionnels disponibles (portraits, selfies, espaces de travail, photos produits, etc.)</li>

          <li>Upload de 1 à 10 photos</li>

          <li>Génération de 1 à 4 images par session</li>

        </ul>



        <h3 style={{ color: 'var(--accent)', marginTop: '20px', marginBottom: '10px' }}>Mode Post - Génération automatique de prompts</h3>

        <ul className="project-list">

          <li>Upload de 1 à 2 selfies</li>

          <li>Saisie ou sélection d'un texte de publication LinkedIn prédéfini</li>

          <li>L'IA génère automatiquement des prompts optimisés</li>

          <li>Création de 2 images personnalisées</li>

        </ul>



        <h3 style={{ color: 'var(--accent)', marginTop: '20px', marginBottom: '10px' }}>Mode Lab - Sélection intelligente</h3>

        <ul className="project-list">

          <li>Récupération de visuels depuis les profils LinkedIn et sites web</li>

          <li>Analyse du texte de publication pour comprendre l'intention</li>

          <li>L'IA recommande les 4 images les plus pertinentes</li>

          <li>Matching avancé avec scoring et raisonnement</li>

        </ul>



        <h3 style={{ color: 'var(--accent)', marginTop: '20px', marginBottom: '10px' }}>Mode Lyter - Illustrations conceptuelles</h3>

        <ul className="project-list">

          <li>Génération d'illustrations professionnelles à partir de texte de publication</li>

          <li>Aucun visage humain - visuels purement conceptuels</li>

          <li>Plus de 10 styles d'illustration (infographies, métaphores, processus, etc.)</li>

          <li>Idéal pour le contenu LinkedIn</li>

        </ul>

      </div>



      <h2 className="project-subtitle">🔑 Capacités clés</h2>

      <ul className="project-list">

        <li>🎨 Génération d'images par IA avec Google Gemini 2.5 Flash</li>

        <li>🧠 Ingénierie de prompts intelligente avec OpenAI GPT-4</li>

        <li>🎙️ Expérience “hands‑free” : dictée / assistant vocal pour accélérer la rédaction</li>

        <li>📝 Génération de posts & reformulation (ton, structure, accroche)</li>

        <li>🔎 Recherche / matching de posts similaires par mot‑clé</li>

        <li>🔗 Intégrations LinkedIn via API (en fonction des permissions)</li>

        <li>📦 Compression automatique d'images pour un traitement plus rapide</li>

        <li>☁️ Stockage cloud sécurisé avec Firebase</li>

        <li>🏷️ Système de tags complet avec plus de 100 tags prédéfinis</li>

        <li>🔍 Analyse contextuelle qui comprend l'intention des publications</li>

      </ul>



      <h2 className="project-subtitle">👥 Utilisateurs concernés</h2>

      <ul className="project-list">

        <li>💼 Professionnels du marketing et de la communication</li>

        <li>📱 Créateurs de contenu LinkedIn</li>

        <li>🎨 Designers et graphistes</li>

        <li>🏢 Entreprises cherchant à automatiser la création de contenu visuel</li>

      </ul>



      <h2 className="project-subtitle">🔒 Sécurité</h2>

      <ul className="project-list">

        <li>🔐 Hachage de mots de passe avec bcrypt et salt rounds</li>

        <li>🎫 Authentification basée sur JWT</li>

        <li>🛡️ Protection CORS avec liste blanche des origines autorisées</li>

        <li>✅ Validation des entrées côté serveur</li>

        <li>🔥 Règles Firebase pour un accès sécurisé à la base de données</li>

      </ul>



      <h2 className="project-subtitle">📊 Flux de génération d'images</h2>

      <p className="project-text">

        L'utilisateur télécharge des photos → Sélectionne un mode (Select/Post/Lab/Lyter) → 

        Le système traite la demande → Génération via l'API Gemini → Stockage dans Firebase Storage → Affichage dans la galerie

      </p>



      <h2 className="project-subtitle">🌐 Déploiement</h2>

      <ul className="project-list">

        <li><strong>Backend</strong> : Déployé sur Render ou Heroku avec variables d'environnement configurées</li>

        <li><strong>Frontend</strong> : Déployé sur Vercel ou Netlify avec build de production</li>

        <li><strong>APIs</strong> : Clés API Google Gemini et OpenAI configurées de manière sécurisée</li>

      </ul>

    </div>

  );

}



export default LyterDetails;