import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Services from './components/Services'
import Growth from './components/Growth'
import About from './components/About'
import Availability from './components/Availability'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails.jsx'
import ProjectEcommerceDetails from './components/ProjectEcommerceDetails'
import LyterDetails from './components/LyterDetails'
import ChatWidget from './components/ChatWidget'
import { trackPageView } from './utils/analytics'

function GoogleAnalytics() {
  const location = useLocation()
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const path = location.pathname + location.search + location.hash
    trackPageView(path)
  }, [location.pathname, location.search, location.hash])
  return null
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else if (pathname === '/') {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function Home() {
  return (
    <PageLayout withFooter>
      <section id="hero"><Hero /></section>
      <section id="about" className="page-section"><About /></section>
      <section id="skills" className="page-section page-section--alt"><Skills /></section>
      <section id="services" className="page-section"><Services /></section>
      <section id="growth" className="page-section page-section--alt"><Growth /></section>
      <section id="projects" className="page-section"><Projects /></section>
      <section id="recommendations" className="page-section page-section--alt"><Recommendations /></section>
      <section id="availability" className="page-section page-section--alt">
        <Availability />
      </section>
      <section id="contact" className="page-section"><Contact /></section>
    </PageLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lense-solidaire" element={<ProjectDetails />} />
        <Route path="/ecommerce" element={<ProjectEcommerceDetails />} />
        <Route path="/lyter" element={<LyterDetails />} />
      </Routes>
      <ChatWidget />
    </BrowserRouter>
  )
}

export default App
