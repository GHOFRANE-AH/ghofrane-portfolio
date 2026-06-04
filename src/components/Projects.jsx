import { Link } from 'react-router-dom'
import SectionTemplate from './SectionTemplate'

const PROJECTS = [
  {
    to: '/lyter',
    image: '/lyter1.jpg',
    alt: 'Lyter',
    title: 'Lyter',
    description:
      'Plateforme IA : génération de photos professionnelles, création de contenu LinkedIn, intégration API.',
    tags: ['React', 'Node.js', 'Firebase', 'Gemini'],
    year: '2026',
  },
  {
    to: '/ecommerce',
    image: '/ecomerce1.PNG',
    alt: 'Projet E-commerce',
    title: 'Plateforme E-commerce',
    description:
      'Catalogue produits, commandes, emails transactionnels, bordereaux d\'expédition et suivi des statuts.',
    tags: ['React', 'Express', 'MongoDB', 'SendGrid'],
    year: '2025',
  },
  {
    to: '/lense-solidaire',
    image: '/Capture1.PNG',
    alt: 'Lense-Solidaire',
    title: 'Lense-Solidaire',
    description:
      'Estimation solidaire d\'objets d\'occasion pour associations, avec IA et règles de prix centralisées.',
    tags: ['React', 'Express', 'TensorFlow.js'],
    year: '2025',
  },
]

function Projects() {
  return (
    <SectionTemplate
      title="Projets récents"
      subtitle="Sites et applications conçus et développés en 2025–2026"
    >
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <Link key={project.to} to={project.to} className="project-card">
            <img src={project.image} alt={project.alt} loading="lazy" />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
                <span className="tag">{project.year}</span>
              </div>
              <span className="project-card-link">Voir le détail →</span>
            </div>
          </Link>
        ))}
      </div>
    </SectionTemplate>
  )
}

export default Projects
