import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiTypescript, SiJavascript, SiFlutter, SiFirebase } from 'react-icons/si'
import SectionTemplate from './SectionTemplate'

const SKILLS = [
  { Icon: FaReact, name: 'React' },
  { Icon: FaNodeJs, name: 'Node.js' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiJavascript, name: 'JavaScript' },
  { Icon: FaGitAlt, name: 'Git' },
  { Icon: FaGithub, name: 'GitHub' },
  { Icon: SiFirebase, name: 'Firebase' },
  { Icon: SiFlutter, name: 'Flutter' },
  { Icon: FaFigma, name: 'Figma' },
]

const GROWTH_TOOLS = [
  'Google Analytics',
  'Google Tag Manager',
  'Google Ads',
  'Meta Ads',
  'Zapier',
  'Search Console',
  'SEMrush',
]

function Skills() {
  return (
    <SectionTemplate
      title="Compétences"
      subtitle="Une stack technique complétée par des outils d’acquisition et de mesure"
    >
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="skill-item">
            <skill.Icon aria-hidden />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
      <div className="growth-tools">
        <h3>Growth &amp; acquisition</h3>
        <div className="growth-tool-list">
          {GROWTH_TOOLS.map((tool) => <span key={tool} className="tag">{tool}</span>)}
        </div>
      </div>
    </SectionTemplate>
  )
}

export default Skills
