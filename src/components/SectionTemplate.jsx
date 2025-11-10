function SectionTemplate({ title, children }) {
  return (
    <section
      style={{
        backgroundColor: "#fff0f5",
        color: "#000",
        padding: "60px 20px",
        maxWidth: "800px",
        margin: "40px auto",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#d63384",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default SectionTemplate;
