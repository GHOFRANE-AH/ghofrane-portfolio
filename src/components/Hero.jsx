function Hero() {
  return (
    <section style={{
      background: 'var(--accent-soft)',
      padding: '80px 20px',
      textAlign: 'center',
      fontFamily: 'var(--font)',
      color: 'var(--text)'
    }}>
       <h1 style={{
        fontSize: 'var(--h1)',
        marginTop: '30px',
        color: 'var(--accent)'
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
        fontSize: 'var(--h2)',
        marginBottom: '20px',
        color: 'var(--muted)'
      }}>
        Développeuse Fullstack
      </h2>
      <p style={{
        maxWidth: '600px',
        margin: '0 auto 30px',
        fontSize: 'var(--text-base)',
        lineHeight: '1.6',
        color: 'var(--muted)'
      }}>
        Disponible et actuellement ouverte aux missions freelance (courtes ou longues). Je conçois des applications web accessibles et sécurisées, avec une attention particulière à l’expérience utilisateur et à la qualité du code — en équipe ou en autonomie, selon vos besoins.
      </p>
      <div style={{ marginTop: '20px' }}>
        <a
          href="/cv-informatique.pdf"
         download

          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '12px 24px',
            backgroundColor: 'var(--accent)',
            color: '#fff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          📄 Mon CV
        </a>
        <a
          href="https://github.com/GHOFRANE-AH?tab=repositories"
          style={{
            display: 'inline-block',
            margin: '10px',
            padding: '12px 24px',
            backgroundColor: 'var(--surface)',
            color: 'var(--accent)',
            border: '2px solid var(--accent)',
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
