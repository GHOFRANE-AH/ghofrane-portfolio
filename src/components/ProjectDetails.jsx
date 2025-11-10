function ProjectDetails() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffe4f1' }}>
      <h1 style={{ color: '#d63384' }}>Lense-Solidaire</h1>
      <img
        src="/lense-solidaire.jpg"
        alt="Lense-Solidaire"
        style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }}
      />
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4a4a4a' }}>
        Lense-Solidaire est une plateforme web intelligente dédiée aux associations et particuliers.
        Elle permet l’estimation solidaire d’objets d’occasion, avec une interface multilingue,
        un formulaire sécurisé, et une gestion admin complète.
      </p>
    </div>
  )
}

export default ProjectDetails
