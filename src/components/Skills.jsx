import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiJavascript } from 'react-icons/si';

function Skills() {
  const sectionStyle = {
    backgroundColor: "#fff0f5", // ✅ fond rose clair
    color: '#000',              // ✅ texte noir
    textAlign: 'center',
    padding: '60px 20px',
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#d63384',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
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
    color: '#d63384',
  };

  return (
    <section id="skills" style={sectionStyle}>
      <h2 style={titleStyle}>Mes compétences</h2>
      <p style={paragraphStyle}>
        Mon stack pour des applications fiables et performantes :
      </p>
      <div style={iconContainerStyle}>
        <FaReact title="React" style={iconStyle} />
        <FaNodeJs title="Node.js" style={iconStyle} />
        <SiMongodb title="MongoDB" style={iconStyle} />
        <SiTypescript title="TypeScript" style={iconStyle} />
        <SiJavascript title="JavaScript" style={iconStyle} />
        <FaGitAlt title="Git" style={iconStyle} />
        <FaFigma title="Figma" style={iconStyle} />
      </div>
    </section>
  );
}

export default Skills;
