import SectionTemplate from './SectionTemplate';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <SectionTemplate title="Projets récents">
      <p style={{ color: '#555', marginBottom: '40px', fontSize: '1.1rem' }}>
        Exemples concrets de sites et d’applications que j’ai conçus et développés en 2025
      </p>

      {/* 🔹 Projet Lense-Solidaire */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '20px',
          flexWrap: 'wrap',
          marginBottom: '30px',
        }}
      >
        <Link to="/lense-solidaire" style={{ display: 'block' }}>
          <img
            src="/Capture1.PNG"
            alt="Lense-Solidaire"
            style={{
              width: '120px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
            }}
          />
        </Link>

        <div style={{ textAlign: 'left', maxWidth: '500px' }}>
          <Link
            to="/lense-solidaire"
            style={{
              fontSize: '1.2rem',
              color: '#d63384',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Lense-Solidaire
          </Link>
          <p style={{ marginTop: '8px', color: '#555', fontSize: '1rem' }}>
            Plateforme web intelligente pour associations et particuliers. Estimation solidaire d’objets d’occasion.
          </p>
        </div>
      </div>

      {/* 🔹 Projet E-commerce */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          padding: '20px',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/ecommerce" style={{ display: 'block' }}>
          <img
            src="/ecomerce1.PNG"
            alt="Projet E-commerce"
            style={{
              width: '120px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
            }}
          />
        </Link>

        <div style={{ textAlign: 'left', maxWidth: '500px' }}>
          <Link
            to="/ecommerce"
            style={{
              fontSize: '1.2rem',
              color: '#d63384',
              fontWeight: 'bold',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Projet E‑commerce
          </Link>
          <p style={{ marginTop: '8px', color: '#555', fontSize: '1rem' }}>
            Conception et développement d’une plateforme e‑commerce complète : ajout et gestion d’annonces produits, 
            confirmation partielle ou totale des commandes, annulation avec notification par email, génération de 
            bordereaux d’expédition et suivi des statuts.<br />
            <strong>Technologies :</strong> React, Node.js/Express, MongoDB, SendGrid.<br />
            <em>2025 – Plateforme web intelligente</em>
          </p>
        </div>
      </div>
        {/* 🔹 Projet Lyter */}

        <div

style={{

  display: 'flex',

  alignItems: 'center',

  justifyContent: 'center',

  gap: '30px',

  backgroundColor: '#fff',

  borderRadius: '12px',

  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',

  padding: '20px',

  flexWrap: 'wrap',

}}

>

<Link to="/lyter" style={{ display: 'block' }}>

  <img

    src="/lyter1.jpg"

    alt="Lyter"

    style={{

      width: '120px',

      height: 'auto',

      borderRadius: '8px',

      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',

      cursor: 'pointer',

    }}

  />

</Link>

<div style={{ textAlign: 'left', maxWidth: '500px' }}>

  <Link

    to="/lyter"

    style={{

      fontSize: '1.2rem',

      color: '#d63384',

      fontWeight: 'bold',

      textDecoration: 'none',

      cursor: 'pointer',

    }}

  >

    Lyter

  </Link>

  <p style={{ marginTop: '8px', color: '#555', fontSize: '1rem' }}>

    Plateforme intelligente combinant la génération de photos par IA et la création de contenu pour un usage professionnel. 

    Quatre modes de génération : photos stylisées, illustrations LinkedIn, recommandations de contenu et sélection intelligente d'images.<br />

    <strong>Technologies :</strong> React, Node.js/Express, Firebase, Google Gemini API, OpenAI GPT-4.<br />

    <em>2025 – Plateforme IA professionnelle</em>

  </p>

</div>

</div>
    </SectionTemplate>
  );
}

export default Projects;