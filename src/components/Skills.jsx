import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiJavascript, SiFlutter, SiFirebase } from 'react-icons/si';

function Skills() {
  const sectionStyle = {
    backgroundColor: "var(--surface)",
    color: "var(--text)",
    textAlign: 'center',
    padding: '60px 20px',
  };

  const titleStyle = {
    fontSize: 'var(--h2)',
    color: 'var(--accent)',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: 'var(--text-base)',
    marginBottom: '30px',
    color: 'var(--muted)',
  };

  const iconContainerStyle = {
    fontSize: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const iconStyle = {
    margin: '10px',
    color: 'var(--accent)',
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={titleStyle}>Mes compétences</h2>
      <p style={paragraphStyle}>
        Mon stack pour des applications fiables et performantes :
      </p>
      <div style={iconContainerStyle}>
        <FaReact title="React" className="skill-icon is-animated" style={iconStyle} />
        <FaNodeJs title="Node.js" className="skill-icon is-animated" style={iconStyle} />
        <SiMongodb title="MongoDB" className="skill-icon is-animated" style={iconStyle} />
        <SiTypescript title="TypeScript" className="skill-icon is-animated" style={iconStyle} />
        <SiJavascript title="JavaScript" className="skill-icon is-animated" style={iconStyle} />
        <FaGitAlt title="Git" className="skill-icon is-animated" style={iconStyle} />
        <FaGithub title="GitHub" className="skill-icon is-animated" style={iconStyle} />
        <SiFirebase title="Firebase" className="skill-icon is-animated" style={iconStyle} />
        <SiFlutter title="Flutter" className="skill-icon is-animated" style={iconStyle} />
        <FaFigma title="Figma" className="skill-icon is-animated" style={iconStyle} />
      </div>
    </section>
  );
}

export default Skills;
