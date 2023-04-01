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
    <section className="thirdSection w-full h-auto" id="third_section">
      <Card
        style={{
          width: '20rem',
          heigth: '15rem',
          boxShadow: '1px 1px 5px 3px rgba(0,0,0,0.25)',
        }}
      >
        <Card.Body>
          <Card.Title>Asiste al Evento Presencial</Card.Title>
          <button onClick={handleFormPresencial} className="button-styles">
          Formulario Presencial
          </button>
          
        </Card.Body>
      </Card>
      <Card
        style={{
          width: '20rem',
          heigth: '15rem',
          boxShadow: '1px 1px 5px 3px rgba(0,0,0,0.25)',
        }}
      >
        <Card.Body>
          <Card.Title>Asiste de forma virtual</Card.Title>
         

          <button onClick={handleFormVirtual} className="button-styles">
            Formulario Virtual
          </button>



         
        </Card.Body>
      </Card>
    </section>
  )
}

export default ThirSection
