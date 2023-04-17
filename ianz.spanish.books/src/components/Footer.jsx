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
            <a href="#first_section">Información</a>
          </li>
          <li>
            <a href="#second_section">Ubicación</a>
          </li>
          <li>
            <a href="#third_section.">Registro</a>
          </li>
        </ul>
      </div>
      <div className="footer__social-links">
        <a href="https://www.facebook.com/FilantroInversion">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://ivananz.com">
          <i className="fa-solid fa-earth-americas"></i>
          {/* <i className="fa-brands fa-whatsapp"></i> */}
        </a>
        <a href="https://www.instagram.com/philanthroinvestorslatam/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ianz.spanish.book@gmail.com">
          {' '}
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
