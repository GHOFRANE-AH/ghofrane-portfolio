import SectionTemplate from './SectionTemplate'

function Availability() {
  return (
    <SectionTemplate title="Disponibilité">
      <div className="availability-banner">
        <span className="availability-badge">Disponible</span>
        <p>
          Ouverte aux missions freelance (courtes ou longues), seule ou en équipe.
          Passation incluse : mini-guide et explications pour votre autonomie après livraison.
        </p>
      </div>
    </SectionTemplate>
  )
}

export default Availability
