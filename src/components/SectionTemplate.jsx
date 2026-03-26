function SectionTemplate({ title, children }) {
  return (
    <section
      style={{
        backgroundColor: "var(--surface)",
        color: "var(--text)",
        padding: "60px 20px",
        maxWidth: "800px",
        margin: "40px auto",
        borderRadius: "12px",
        boxShadow: "var(--shadow)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "var(--h2)",
          color: "var(--accent)",
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
