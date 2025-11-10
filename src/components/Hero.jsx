function Hero() {
  return (
    <section style={{
      background: '#ffe4f1',
      padding: '80px 20px',
      textAlign: 'center',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      color: '#4a4a4a'
    }}>
       <h1 style={{
        fontSize: '3rem',
        marginTop: '30px',
        color: '#d63384'
      }}>
        Ghofrane Hedna
      </h1>
      <img
        src="/ghofrane-image.JPG"
        alt="Ghofrane"
        style={{
          width: '250px',
          borderRadius: '50%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      />
    
      <h2 style={{
        fontSize: '1.8rem',
        marginBottom: '20px',
        color: '#6c757d'
      }}>
        Développeuse Fullstack
      </h2>
      <p style={{
        maxWidth: '600px',
        margin: '0 auto 30px',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        color: '#555'
      }}>
        En recherche d’alternance ! Je conçois des applications web accessibles et sécurisées, avec une attention particulière à l’expérience utilisateur et à la qualité du code. Je suis prête à contribuer à des projets concrets au sein d’une équipe dynamique.
      </p>
      <div style={{ marginTop: '20px' }}>
        <a
          href="/cv-informatique.pdf"
         download

          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '12px 24px',
            backgroundColor: '#d63384',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          📄 Mon CV
        </a>
        <a
          href="https://github.com/GHOFRANE-hedna"
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '12px 24px',
            backgroundColor: '#f8f9fa',
            color: '#d63384',
            border: '2px solid #d63384',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          🐙 Mon GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero
