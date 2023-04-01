import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './styles/thirdSection.css'

const ThirSection = () => {
  const handleFormVirtual = () => {
    window.open('https://forms.gle/PzpLMr6hWqDDHBu8A')
  }

  const handleFormPresencial = () => {
    window.open('https://forms.gle/oNR7CqUdikApyBt66')
  }

  return (
    <section
      className="thirdSection w-full h-auto flex bg-gray"
      id="third_section"
    >
      <Card style={{ width: '20rem', heigth: '15rem' }}>
        <Card.Body>
          <Card.Title>Asiste al Evento Presencial</Card.Title>

          <Button onClick={handleFormPresencial} variant="primary">
            Formulario Presencial
          </Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem', heigth: '15rem' }}>
        <Card.Body>
          <Card.Title>Asiste de forma virtual</Card.Title>
          <Card.Text></Card.Text>

          <Button onClick={handleFormVirtual} variant="primary">
            Formulario Virtual
          </Button>
        </Card.Body>
      </Card>
    </section>
  )
}

export default ThirSection
