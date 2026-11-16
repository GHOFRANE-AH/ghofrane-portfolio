import SectionTemplate from './SectionTemplate'

const SERVICES = [
  {
    title: 'Développement web',
    text: 'Sites, applications sur mesure, APIs et outils métier, du prototype à la mise en ligne.',
  },
  {
    title: 'E-commerce',
    text: 'Boutiques en ligne, gestion des commandes, emails transactionnels et expérience d’achat.',
  },
  {
    title: 'Intégrations IA',
    text: 'Fonctionnalités intelligentes, génération de contenu et automatisations métier.',
  },
  {
    title: 'Growth & acquisition',
    text: 'Marketing digital, acquisition et prospection de leads, landing pages, campagnes Ads, SEO, tests A/B, optimisation des conversions et suivi CRM.',
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
