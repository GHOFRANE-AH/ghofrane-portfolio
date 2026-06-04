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

function Skills() {
  return (
    <SectionTemplate
      title="Compétences"
      subtitle="Stack technique pour des applications fiables et performantes"
    >
      <div className="skills-grid">
        {SKILLS.map(({ Icon, name }) => (
          <div key={name} className="skill-item">
            <Icon aria-hidden />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </SectionTemplate>
  )
}

export default Skills
