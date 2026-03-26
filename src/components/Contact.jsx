import SectionTemplate from "./SectionTemplate";

function Contact() {
  return (
    <div id="contact">
      <SectionTemplate title="Me contacter">
        <p style={{ margin: "10px 0", color: "var(--muted)" }}>
          Email :{" "}
          <a href="mailto:ghofranehed820@gmail.com" style={{ color: "var(--text)", fontWeight: 600 }}>
            ghofranehed820@gmail.com
          </a>
        </p>
        <p style={{ margin: "10px 0", color: "var(--muted)" }}>
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/ghofrane-hedna/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text)", fontWeight: 600 }}
          >
            linkedin.com/in/ghofrane
          </a>
        </p>
      </SectionTemplate>
    </div>
  );
}

export default Contact;

