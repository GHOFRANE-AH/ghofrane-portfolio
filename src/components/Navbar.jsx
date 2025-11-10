function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#d63384',
      padding: '20px',
      textAlign: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <a href="#hero" style={linkStyle}>Accueil</a>
      <a href="#skills" style={linkStyle}>Compétences</a>
      <a href="#projects" style={linkStyle}>Projets</a>
      <a href="#services" style={linkStyle}>Services</a>
      <a href="#availability" style={linkStyle}>
        <span style={{
          display: 'inline-block',
          width: '10px',
          height: '10px',
          backgroundColor: '#28a745',
          borderRadius: '50%',
          marginRight: '6px',
          verticalAlign: 'middle'
        }}></span>
        Disponible
      </a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
  )
}

const linkStyle = {
  margin: '0 15px',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold'
}

export default Navbar
