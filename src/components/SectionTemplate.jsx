function SectionTemplate({ title, subtitle, children, centered = true }) {
  return (
    <div className="section-inner">
      <header className={`section-header ${centered ? '' : ''}`}>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </header>
      {children}
    </div>
  )
}

export default SectionTemplate
