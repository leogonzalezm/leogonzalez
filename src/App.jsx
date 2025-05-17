import { useState, useEffect } from 'react'
import perfilImg from './assets/foto-perfil.png'
import { FaSun, FaMoon, FaShareAlt, FaLinkedin, FaGithub, FaGlobe, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
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
          {darkMode ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>
        <img src={perfilImg} alt="Foto de perfil" className="profile-img" />
        <h1>Leonardo González</h1>
        <p className="description">
          MBA | Ingeniero Comercial mención Informática | Product Owner | Especialista en Marketing Digital | Desarrollador Web | WordPress Specialist | Docente universitario
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="link-icon" />
            <span className="link-text">LinkedIn</span>
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub className="link-icon" />
            <span className="link-text">GitHub</span>
          </a>
          <a href="https://tuportafolio.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="link-icon" />
            <span className="link-text">Portafolio</span>
          </a>
          <a href="https://wa.me/569XXXXXXXX" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="link-icon" />
            <span className="link-text">WhatsApp</span>
          </a>
          <a href="mailto:tuemail@dominio.com">
            <FaEnvelope className="link-icon" />
            <span className="link-text">Email</span>
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
