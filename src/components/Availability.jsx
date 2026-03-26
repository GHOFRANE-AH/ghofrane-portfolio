import SectionTemplate from "./SectionTemplate";

function Availability() {
  return (
    <SectionTemplate title="Disponible">
      <p style={{ fontSize: "1.15rem", color: "#333", lineHeight: "1.8", margin: 0 }}>
        Actuellement ouverte aux missions freelance (courtes ou longues), seule ou en équipe — avec une passation
        claire (mini‑guide, explications) pour que vous soyez autonome après livraison.
      </p>
    </SectionTemplate>
  );
}

export default Availability;
