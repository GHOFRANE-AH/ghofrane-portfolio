import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa'
import { SiMongodb, SiTypescript, SiJavascript } from 'react-icons/si'

function Skills() {
  return (
    <section style={{ textAlign: 'center', padding: '40px' }}>
      <h2>Mes compétences</h2>
      <p>Mon stack pour des applications fiables et performantes :</p>
      <div style={{ fontSize: '2rem', marginTop: '20px' }}>
        <FaReact title="React" style={iconStyle} />
        <FaNodeJs title="Node.js" style={iconStyle} />
        <SiMongodb title="MongoDB" style={iconStyle} />
        <SiTypescript title="TypeScript" style={iconStyle} />
        <SiJavascript title="JavaScript" style={iconStyle} />
        <FaGitAlt title="Git" style={iconStyle} />
        <FaFigma title="Figma" style={iconStyle} />
      </div>
    </section>
  )
}

const iconStyle = {
  margin: '10px',
  color: '#d63384'
}

export default Skills
