function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      backgroundColor: "var(--surface)",
      color: "var(--text)",
      textAlign: 'center',
      padding: '20px'
    }}>
      <p style={{ margin: 0, fontSize: "var(--text-base)", color: "var(--muted)" }}>
        © {year} Ghofrane — fait avec soin. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
