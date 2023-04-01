import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './styles/thirdSection.css'

const ThirSection = () => {
  return (
    <section
      className="thirdSection w-full h-auto flex bg-gray"
      id="second_section"
    >
      <Card style={{ width: '20rem', heigth: '15rem' }}>
        <Card.Body>
          <Card.Title>Asiste al Evento Presencial</Card.Title>
          <a href="http://forms.gle/wAdD4Mk5ctFWvr3x5">
            <Button variant="primary">Formulario Presencial</Button>
          </a>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', heigth: '15rem' }}>
        <Card.Body>
          <Card.Title>Asiste de forma virtual</Card.Title>
          <Card.Text></Card.Text>

          <a href="http://forms.gle/wAdD4Mk5ctFWvr3x5">
            <Button variant="primary">Formulario Virtual</Button>
          </a>
        </Card.Body>
      </Card>
    </section>
  )
}

export default ThirSection
