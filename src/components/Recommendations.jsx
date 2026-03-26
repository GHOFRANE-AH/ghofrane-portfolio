import { useState } from "react";
import SectionTemplate from "./SectionTemplate";

function Recommendations() {
  const images = ["/recom1.jpg", "/recom2.jpg", "/recom3.jpg", "/recom4.jpg"];
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const pdfs = [
    { label: "1re lettre de recommandation (PDF)", href: "/1er lettre de recommandation .pdf", available: true },
    { label: "2e lettre de recommandation (PDF)", href: "/2ème lettre de recommandation .pdf", available: true },
  ];

  return (
    <SectionTemplate title="Retours d'encadrants et de superviseurs">
      <p style={{ color: "var(--muted)", marginBottom: "24px" }}>
        Quelques retours d'encadrants et de superviseurs sur mon travail.
      </p>
      <a
        href="#hero"
        style={{
          display: "inline-block",
          marginBottom: "18px",
          backgroundColor: "var(--accent)",
          color: "#fff",
          borderRadius: "8px",
          padding: "9px 14px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Retour à la page d'accueil
      </a>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          alignItems: "start",
        }}
      >
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedImage(src)}
            style={{
              display: "block",
              width: "100%",
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img
              src={src}
              alt={`Recommandation ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                border: "1px solid #eee",
              }}
            />
          </button>
        ))}
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        {pdfs.map((pdf) =>
          pdf.available ? (
            <button
              key={pdf.label}
              onClick={() => setSelectedPdf(pdf.href)}
              style={{
                backgroundColor: "var(--accent)",
                color: "#fff",
                borderRadius: "8px",
                padding: "10px 14px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {pdf.label}
            </button>
          ) : (
            <span
              key={pdf.label}
              style={{
                backgroundColor: "#e5e7eb",
                color: "#6b7280",
                borderRadius: "8px",
                padding: "10px 14px",
                fontWeight: 600,
              }}
            >
              {pdf.label} (à ajouter)
            </span>
          )
        )}
      </div>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3000,
            padding: "20px",
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "16px",
              maxWidth: "900px",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  cursor: "pointer",
                }}
              >
                Retour
              </button>
              <a
                href={selectedImage}
                download
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  textDecoration: "none",
                }}
              >
                Télécharger l'image
              </a>
            </div>

            <img
              src={selectedImage}
              alt="Recommandation agrandie"
              style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: "8px" }}
            />
          </div>
        </div>
      )}

      {selectedPdf && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3100,
            padding: "20px",
          }}
          onClick={() => setSelectedPdf(null)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              padding: "16px",
              maxWidth: "980px",
              width: "100%",
              maxHeight: "90vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
              <button
                onClick={() => setSelectedPdf(null)}
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  cursor: "pointer",
                }}
              >
                Retour
              </button>
              <a
                href={selectedPdf}
                download
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  textDecoration: "none",
                }}
              >
                Télécharger le PDF
              </a>
            </div>
            <iframe
              src={selectedPdf}
              title="Lettre de recommandation"
              style={{ width: "100%", height: "72vh", border: "none", borderRadius: "8px" }}
            />
          </div>
        </div>
      )}
    </SectionTemplate>
  );
}

export default Recommendations;
