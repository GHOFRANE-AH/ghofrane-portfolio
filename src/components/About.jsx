import SectionTemplate from './SectionTemplate'

const CONTRIBUTIONS = [
  'Acquisition de leads et génération de trafic qualifié',
  'Automatisation des process marketing et commerciaux (no-code, workflows)',
  'Analyse de données et pilotage de la performance (KPI, tableaux de bord)',
  'Tests A/B et expérimentation pour optimiser les taux de conversion',
  'Esprit analytique et résolution de problèmes, hérités de ma formation en informatique et IA',
]

function About() {
  return (
    <SectionTemplate
      title="À propos"
      subtitle="Ma double compétence technique et acquisition me permet de concevoir un produit et d’amener ses premiers clients."
    >
      <div className="about-content">
        <div className="about-copy">
          <p>
            Diplômée d’un Master en Intelligence artificielle et informatique fondamentale
            en Algérie en 2022, je me suis installée en France la même année. Après une
            période consacrée à mon intégration et à la reconnaissance de mes diplômes,
            je mets aujourd’hui pleinement cette double compétence tech et marketing au
            service de la croissance des entreprises.
          </p>
          <p>
            Je suis actuellement en formation Growth Hacking chez Rocket School à Lyon et
            en alternance de 12 mois chez Nexhome, spécialiste des solutions de sécurité
            pour le logement : alarmes connectées et télésurveillance.
          </p>
          <p>Ce que j’apporte à une équipe :</p>
          <ul className="about-list">
            {CONTRIBUTIONS.map((contribution) => <li key={contribution}>{contribution}</li>)}
          </ul>
          <p className="about-closing">
            Curieuse, rigoureuse et orientée résultats, je suis prête à relever de nouveaux défis.
          </p>
        </div>
      </div>
    </SectionTemplate>
  )
}

export default About