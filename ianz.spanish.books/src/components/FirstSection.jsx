import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import imageCardOne from '../images/librocostado.png'
import imageCardTwo from '../images/diayhorario0205.webp'
import './styles/firstSection.css'
import 'add-to-calendar-button'
const FirstSection = () => {
  return (
    <section className="firstsection w-full h-auto" id="first_section">
      <Card
        style={{
          width: '22rem',
          height: '33rem',
          boxShadow: '1px 1px 5px 3px rgba(0,0,0,0.25)',
        }}
      >
        <Card.Img variant="top" src={imageCardOne} alt="foto del libro" />
        <Card.Body>
          <Card.Title>FILANTROINVERSION INMOBILIARIA</Card.Title>
          <Card.Text>
            Se realizará la primer presentación Internacional en español del
            libro. Sera muy grato compartir este lanzamiento con todos ustedes y
            se espera con ansias que sean participes. Tendremos{' '}
            <span className="text-bold">sorpresas y novedades imperdibles</span>{' '}
            de lanzamiento tanto en su asistencia presencial como virtual.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        style={{
          width: '22rem',
          height: '33rem',
          boxShadow: '1px 1px 5px 3px rgba(0,0,0,0.25)',
        }}
      >
        <Card.Img variant="bot" src={imageCardTwo} alt="foto de los horarios" />
        <Card.Body>
          <Card.Title>Días y Horarios</Card.Title>
          <Card.Text>
            El evento será llevado a cabo en forma{' '}
            <span className="text-bold">presencial y virtual</span> el día 2 de
            MAYO del 2023 de 19 a 20hs hora Argentina, Bs As.
          </Card.Text>
          <add-to-calendar-button
            name="Evento FilantroInversion Inmobiliaria"
            options="'Apple','Google','iCal','Outlook.com','Microsoft 365','Microsoft Teams','Yahoo'"
            location="World Wide Web"
            startDate="2023-04-11"
            endDate="2023-04-11"
            startTime="19:00"
            endTime="20:00"
            timeZone="America/Buenos_Aires"
          ></add-to-calendar-button>
        </Card.Body>
      </Card>
    </section>
  )
}

export default FirstSection
