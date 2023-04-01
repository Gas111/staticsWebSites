import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer_section">
      <div className="footer__box-menu">
        <ul>
          <li>
            <a href="./about.html">Inicio</a>
          </li>
          <li>
            <a href="./index.html">Informacion</a>{' '}
          </li>
          <li>
            <a href="./products.html">Ubicacion</a>
          </li>
          <li>
            <a href="./contact.html">Inscribite</a>
          </li>
        </ul>
      </div>
      <div className="footer__social-links">
        <a href="https://www.facebook.com/profile.php?id=100081401764364">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="https://walink.co/b52e51">
          {' '}
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/invites/contact/?i=q58x44e9ajk9&utm_content=k5tkmxl">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="http://">
          {' '}
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
