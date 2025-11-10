import SectionTemplate from './SectionTemplate';

function Services() {
  return (
    <SectionTemplate title="Services">
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem", lineHeight: "1.8" }}>
        <li>Développement web fullstack</li>
        <li>Design d’interface accessible</li>
        <li>Intégration backend sécurisée</li>
      </ul>
    </SectionTemplate>
  );
}

export default Services;
