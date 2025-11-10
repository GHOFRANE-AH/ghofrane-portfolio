function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#fff0f5",
        color: "#000",
        textAlign: "center",
        padding: "60px 20px",
      }}
    >
      <h2 style={{ fontSize: "2rem", color: "#d63384", marginBottom: "20px" }}>
        Me contacter
      </h2>
      <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
        Email :{" "}
        <a href="mailto:ghofraneah25@gmail.com" style={{ color: "#000" }}>
          ghofraneah25@gmail.com
        </a>
      </p>
      <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
        LinkedIn :{" "}
        <a
          href="https://www.linkedin.com/in/ghofrane-hedna/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000" }}
        >
          linkedin.com/in/ghofrane
        </a>
      </p>
    </section>
  );
}

export default Contact;

