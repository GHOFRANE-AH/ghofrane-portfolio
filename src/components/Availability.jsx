function Availability() {
  const sectionStyle = {
    backgroundColor: '#fff0f5', // rose clair
    padding: '2rem 1rem',
    textAlign: 'center',
  };

  const titleStyle = {
    color: '#c2185b', // rose foncé
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const textStyle = {
    color: '#000000', // noir
    fontSize: '1.2rem',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Disponible</h2>
      <p style={textStyle}>
        Actuellement en recherche d’alternance !
      </p>
    </section>
  );
}

export default Availability;
