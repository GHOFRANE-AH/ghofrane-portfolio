function Projects() {
  return (
    <section id="projects" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h2 style={{ fontSize: '2rem', color: '#d63384', marginBottom: '20px' }}>Projets récents</h2>
      <p style={{ color: '#555', marginBottom: '40px' }}>
        Exemples concrets de sites et d’applications que j’ai conçus et développés.
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '20px'
      }}>
        <a href="/lense-solidaire.html" style={{ display: 'block' }}>
          <img
            src="/projet1.jpg"
            alt="Lense-Solidaire"
            style={{
              width: '120px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer'
            }}
          />
        </a>

        <div style={{ textAlign: 'left' }}>
          <a href="/lense-solidaire.html" style={{
            fontSize: '1.2rem',
            color: '#d63384',
            fontWeight: 'bold',
            textDecoration: 'none',
            cursor: 'pointer'
          }}>
            Lense-Solidaire
          </a>
          <p style={{ marginTop: '8px', color: '#555' }}>
            Plateforme web intelligente pour associations et particuliers. Estimation solidaire d’objets d’occasion.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
