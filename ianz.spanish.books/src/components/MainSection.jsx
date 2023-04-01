import React from 'react'
import fotoivan from '../images/ivaninconference.webp'
// import '../App.css'
import './styles/mainSection.css'

const MainSection = () => {
  return (
    <header className="w-[100%] h-screen object-cover" id="main_section">
      <img
        src={fotoivan}
        alt="Foto de Ivan Anz en Conferencia"
        className="object-cover w-[100%] h-full z-0"
      />
      <div className="title">
        <div className="title-box">
          <h1 className="">
            Evento unico en BsAs
          </h1>
        </div>
        <div className="title-box-attention">
          <p className="">Reserva tu lugar Gratis</p>
        </div>
      </div>
    </header>
  )
}

export default MainSection
