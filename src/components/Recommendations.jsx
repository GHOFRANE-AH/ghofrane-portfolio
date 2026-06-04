import { useState, useEffect, useCallback } from 'react'
import SectionTemplate from './SectionTemplate'

const IMAGES = ['/recom1.jpg', '/recom2.jpg', '/recom3.jpg', '/recom4.jpg']

const QUOTES = [
  {
    text: 'Travail sérieux, autonome et de qualité. Ghofrane a su répondre aux attentes du projet avec rigueur.',
    author: 'Encadrant de stage',
  },
  {
    text: 'Bonne capacité d\'adaptation et communication claire tout au long de la mission.',
    author: 'Superviseur',
  },
]

const PDFS = [
  { label: 'Lettre de recommandation 1', href: '/1er lettre de recommandation .pdf' },
  { label: 'Lettre de recommandation 2', href: '/2ème lettre de recommandation .pdf' },
]

function Recommendations() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedPdf, setSelectedPdf] = useState(null)

  const closeAll = useCallback(() => {
    setSelectedImage(null)
    setSelectedPdf(null)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeAll()
    }
    if (selectedImage || selectedPdf) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedImage, selectedPdf, closeAll])

  return (
    <SectionTemplate
      title="Recommandations"
      subtitle="Retours d'encadrants et de superviseurs sur mon travail"
    >
      <div className="quotes-row">
        {QUOTES.map((q) => (
          <figure key={q.author} className="quote-card">
            <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
            <cite>— {q.author}</cite>
          </figure>
        ))}
      </div>

      <div className="recommendations-grid">
        {IMAGES.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelectedImage(src)}
            aria-label={`Agrandir la recommandation ${index + 1}`}
          >
            <img src={src} alt={`Recommandation ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      <div className="pdf-actions">
        {PDFS.map((pdf) => (
          <button
            key={pdf.href}
            type="button"
            className="btn btn-primary"
            onClick={() => setSelectedPdf(pdf.href)}
          >
            {pdf.label}
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeAll}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-toolbar">
              <button type="button" className="btn btn-primary" onClick={closeAll}>
                Fermer
              </button>
              <a href={selectedImage} download className="btn btn-outline">
                Télécharger
              </a>
            </div>
            <img src={selectedImage} alt="Recommandation agrandie" />
          </div>
        </div>
      )}

      {selectedPdf && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeAll}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-toolbar">
              <button type="button" className="btn btn-primary" onClick={closeAll}>
                Fermer
              </button>
              <a href={selectedPdf} download className="btn btn-outline">
                Télécharger le PDF
              </a>
            </div>
            <iframe src={selectedPdf} title="Lettre de recommandation" />
          </div>
        </div>
      )}
    </SectionTemplate>
  )
}

export default Recommendations
