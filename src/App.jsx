import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Services from './components/Services'
import Availability from './components/Availability'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails.jsx'
import "./components/ProjectDetails.css";
import ProjectEcommerceDetails from './components/ProjectEcommerceDetails';
import LyterDetails from './components/LyterDetails';


function Home() {
  return (
    <>
      <Navbar />
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)'
      }}>
        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="recommendations"><Recommendations /></section>
        <section id="services"><Services /></section>
        <section id="availability"><Availability /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lense-solidaire" element={<ProjectDetails />} />
              <Route path="/ecommerce" element={<ProjectEcommerceDetails />} />
                      <Route path="/lyter" element={<LyterDetails />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
