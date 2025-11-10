function Services() {
  const sectionStyle = {
    backgroundColor: "#fff0f5",
    color: "#000",
    textAlign: "center",
    padding: "60px 20px",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#d63384",
    marginBottom: "20px",
  };

  const subtitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "15px",
    color: "#d63384",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    fontSize: "1.2rem",
    lineHeight: "1.8",
  };

  return (
    <section id="services" style={sectionStyle}>
      <h2 style={titleStyle}>Services</h2>
      <ul style={listStyle}>
        <li>Développement web fullstack</li>
        <li>Design d’interface accessible</li>
        <li>Intégration backend sécurisée</li>
      </ul>

    
    </section>
  );
}

export default Services;

