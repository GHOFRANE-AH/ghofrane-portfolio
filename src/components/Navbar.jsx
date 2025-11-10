import { useEffect, useState } from 'react';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    backgroundColor: '#d63384',
    padding: isMobile ? '20px' : '15px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isMobile ? '10px' : '1rem',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: isMobile ? '1rem' : '1.1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#28a745',
    borderRadius: '50%',
  };

  return (
    <nav style={navStyle}>
      <a href="#hero" style={linkStyle}>Accueil</a>
      <a href="#skills" style={linkStyle}>Compétences</a>
      <a href="#projects" style={linkStyle}>Projets</a>
      <a href="#services" style={linkStyle}>Services</a>
      <a href="#availability" style={linkStyle}>
        <span style={dotStyle}></span>
        Disponible
      </a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
  );
}

export default Navbar;
