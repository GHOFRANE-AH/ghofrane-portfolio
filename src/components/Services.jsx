import SectionTemplate from './SectionTemplate';

function Services() {
  return (
    <SectionTemplate title="Services">
      <p style={{ fontSize: "var(--text-base)", color: "var(--muted)", marginBottom: "22px" }}>
        Des livrables clairs, un code propre, et un accompagnement jusqu’à la mise en ligne (et après).
      </p>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "var(--text-base)", lineHeight: "1.9", color: "var(--text)" }}>
        <li>Sites web (vitrine, portfolio, landing page) — petits ou grands</li>
        <li>Applications web sur mesure (plateformes, outils internes, back‑office/admin)</li>
        <li>E‑commerce : catalogue, commandes, emails transactionnels, suivi et statuts</li>
        <li>APIs & backend (Node.js/Express), base de données (MongoDB / Firebase)</li>
        <li>Fonctionnalités IA (ex : génération de contenu, intégrations Gemini/OpenAI)</li>
        <li>Refonte, ajout de fonctionnalités, correction de bugs, optimisation</li>
        <li>Déploiement & mise en production (ex : Netlify, Render) + support</li>
        <li>Prise en main : mini‑guide, explications, et passation propre</li>
      </ul>
    </SectionTemplate>
  );
}

export default Services;
