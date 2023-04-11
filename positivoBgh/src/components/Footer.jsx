import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer_section">
      <div className="footer__box-menu">
        <ul>
          <li>
            <a href="/search">Busqueda</a>
          </li>
          <li>
            <a href="/">Ingreso</a>{' '}
          </li>
          <li>
            <a href="/">Cambios</a>
          </li>
          <li>
            <a href="/">Registro</a>
          </li>
        </ul>
      </div>
      <div className="footer__social-links">
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>

        <a href="">
          <i className="fa-solid fa-earth-americas"></i>
          {/* <i className="fa-brands fa-whatsapp"></i> */}
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="">
          {' '}
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
