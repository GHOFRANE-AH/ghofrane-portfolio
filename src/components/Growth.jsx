import SectionTemplate from './SectionTemplate'

const GROWTH_AREAS = [
  {
    title: 'Acquisition de leads',
    items: ['Personae', 'Prospection LinkedIn', 'Emailing', 'Lead magnets'],
  },
  {
    title: 'Landing pages & conversion',
    items: ['UX/UI', 'Copywriting', 'Tests A/B'],
  },
  {
    title: 'Publicité & SEO',
    items: ['Google Ads', 'Facebook Ads', 'Audit SEO', 'Search Console'],
  },
  {
    title: 'Tracking & automatisation',
    items: ['Google Analytics', 'Tag Manager', 'Zapier', 'CRM'],
  },
]

function Growth() {
  return (
    <SectionTemplate
      title="Growth"
      subtitle="Des actions mesurables pour attirer les bons visiteurs et transformer leur intérêt en croissance."
    >
      <div className="growth-grid">
        {GROWTH_AREAS.map(({ title, items }) => (
          <article key={title} className="growth-card">
            <h3>{title}</h3>
            <ul>
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </SectionTemplate>
  )
}

export default Growth