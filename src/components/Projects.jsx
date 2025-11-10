import SectionTemplate from './SectionTemplate';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <SectionTemplate title="Projets récents">
      <p style={{ color: '#555', marginBottom: '40px', fontSize: '1.1rem' }}>
        Exemples concrets de sites et d’applications que j’ai conçus et développés en 2025
      </p>

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
    </SectionTemplate>
  );
}

export default Projects;
