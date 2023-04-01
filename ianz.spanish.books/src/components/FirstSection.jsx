import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import imageCardOne from '../images/librocostado.png'
import imageCardTwo from '../images/diayhorario.png'
import './styles/firstSection.css'
import 'add-to-calendar-button'
const FirstSection = () => {
  return (
    <section className="firstsection w-full h-auto" id="first_section">
      <Card style={{ width: '22rem', height: '33rem' }}>
        <Card.Img variant="top" src={imageCardOne} alt="foto del libro" />
        <Card.Body>
          <Card.Title>FILANTROINVERSION INMOBILIARIA</Card.Title>
          <Card.Text>
            Se realizara la primer presentacion Internacional en español del
            libro. Sera muy grato compartir este lanzamiento con todos ustedes y
            se espera con ansias que sean participes. Tendremos sorpresas y
            novedades imperdibles de lanzamiento tanto en su asistencia
            presencial como virtual.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '22rem', height: '33rem' }}>
        <Card.Img variant="bot" src={imageCardTwo} alt="foto de los horarios" />
        <Card.Body>
          <Card.Title>Dias y Horarios</Card.Title>
          <Card.Text>
            El evento sera llevado a cabo en forma presencial y virtual el dia 11 de ABRIL 2023 de 18 a 20hs hora
            Argentina, Bs As.
          </Card.Text>
          <add-to-calendar-button
            name="Evento FilantroInversion Inmobiliaria"
            options="'Apple','Google','iCal','Outlook.com','Microsoft 365','Microsoft Teams','Yahoo'"
            location="World Wide Web"
            startDate="2023-04-11"
            endDate="2023-04-11"
            startTime="18:00"
            endTime="20:00"
            timeZone="America/Buenos_Aires"
          ></add-to-calendar-button>
        </Card.Body>
      </Card>
    </section>
  )
}

export default FirstSection
