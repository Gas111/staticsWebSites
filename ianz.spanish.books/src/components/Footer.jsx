import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer_section">
      <div className="footer__box-menu">
        <ul>
          <li>
            <a href="#main_section">Inicio</a>
          </li>
          <li>
            <a href="#first_section">Informacion</a>{' '}
          </li>
          <li>
            <a href="#second_section">Ubicacion</a>
          </li>
          <li>
            <a href="#third_section.">Inscribite</a>
          </li>
        </ul>
      </div>
      <div className="footer__social-links">
        <a href="https://www.facebook.com/ivananzpage">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://walink.co/b52e51">
          {' '}
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/ivananzig/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="http://">
          {' '}
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
