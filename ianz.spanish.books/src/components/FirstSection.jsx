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
      <Card style={{ width: '20rem', height: '30rem' }}>
        <Card.Img variant="top" src={imageCardOne} alt="foto del libro" />
        <Card.Body>
          <Card.Title>FILANTROINVERSION INMOBILIARIA</Card.Title>
          <Card.Text>
            Charla explicativa de la mano de Ivan Anz sobre sus enunciados en el
            libro y como se aplican de forma muy simple en la vida cotidiana.
            Como debemos invertir nuestros pesos y dolares en base a su
            experiencia.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem', height: '30rem' }}>
        <Card.Img
          variant="bot"
          src={imageCardTwo}
          alt="foto de los horarios"
        />
        <Card.Body>
          <Card.Title>Dias y Horarios</Card.Title>
          <Card.Text>
            La exposicion sera llevada a cabo en forma presencial y virtual
            desde la EDITORIAL DUNKEN el dia 11 de ABRIL 2023 de 18 a 20hs hora
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
