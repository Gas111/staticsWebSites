import React from 'react'
import fotoivan from '../images/ivanmainsection.webp'
import fingerImage from '../images/finger.png'
// import '../App.css'
import './styles/mainSection.css'

const MainSection = () => {
  return (
    <header
      className="header-section w-[100%] h-screen object-cover"
      id="main_section"
    >
      <img
        src={fotoivan}
        alt="Foto de Ivan Anz en Conferencia"
        className="object-cover w-[100%] h-full z-0"
      />
      <div className="title animate-pulse">
        <div className="title-box">
          <a href="#first_section">
            <h1 className="">Evento único Internacional</h1>{' '}
          </a>
        </div>

        <div className="title-box-attention animate-pulse">
          <a href="#third_section">
            <p className="">Reserva tu lugar Gratis</p>
          </a>
        </div>
        <img src={fingerImage} alt="Foto de dedo" className="finger" />
      </div>
    </header>
  )
}

export default MainSection
