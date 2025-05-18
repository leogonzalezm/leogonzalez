import { useState, useEffect } from 'react'
import perfilImg from './assets/foto-perfil.png'
import { FaSun, FaMoon, FaShareAlt, FaLinkedin, FaGithub, FaInstagram, FaGlobe, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored ? stored === 'dark' : false
  })

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleThemeSwitch = () => setDarkMode((prev) => !prev)

  return (
    <div className={`container${darkMode ? ' dark' : ''}`}>
      <div className="profile-section">
        <button
          className={`theme-icon-switcher${darkMode ? ' dark' : ''}`}
          title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          onClick={handleThemeSwitch}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <img src={perfilImg} alt="Foto de perfil" className="profile-img" />
        <h1>Leonardo González</h1>
        <p className="description">
          MBA | Ingeniero Comercial mención Informática | Product Owner | Especialista en Marketing Digital | Desarrollador Web | WordPress Specialist | Docente universitario
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/leogonzalezm" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/leogonzalezm" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://instagram.com/soy_leogonzalez" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <div className="links" style={{borderTop: 'none', paddingTop: 0}}>
          <a href="https://sinergiza.cl" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="link-icon" />
            <span className="link-text">Visita Sinergiza.cl</span>
          </a>
          <a href="mailto:leonardo@sinergiza.cl">
            <FaEnvelope className="link-icon" />
            <span className="link-text">Escríbeme un email</span>
          </a>
          <a href="https://wa.me/56963065167" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="link-icon" />
            <span className="link-text">Contáctame en WhatsApp</span>
          </a>
          <a href="https://tuportafolio.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="link-icon" />
            <span className="link-text">Mira mi Portafolio</span>
          </a>
        </div>
        <FaShareAlt
          className="share-icon"
          title="Compartir URL"
          onClick={() => navigator.share ? navigator.share({ url: window.location.href }) : navigator.clipboard.writeText(window.location.href)}
        />
      </div>
    </div>
  )
}

export default App
