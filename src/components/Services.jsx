import SectionTemplate from './SectionTemplate'

const SERVICES = [
  {
    title: 'Sites & landing pages',
    text: 'Vitrine, portfolio, pages d\'accueil — petits ou grands projets.',
  },
  {
    title: 'Applications sur mesure',
    text: 'Plateformes, outils internes, back-office et espaces admin.',
  },
  {
    title: 'E-commerce',
    text: 'Catalogue, commandes, emails transactionnels, suivi et statuts.',
  },
  {
    title: 'Backend & APIs',
    text: 'Node.js / Express, MongoDB, Firebase, déploiement et support.',
  },
  {
    title: 'Intégrations IA',
    text: 'Génération de contenu, Gemini, OpenAI, automatisations métier.',
  },
  {
    title: 'Maintenance & refonte',
    text: 'Bugs, nouvelles fonctionnalités, optimisation et passation claire.',
  },
]

function Services() {
  return (
    <SectionTemplate
      title="Services"
      subtitle="Des livrables clairs, un code propre, un accompagnement jusqu'à la mise en ligne"
    >
      <div className="services-grid">
        {SERVICES.map((s) => (
          <article key={s.title} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </SectionTemplate>
  )
}

export default Services
