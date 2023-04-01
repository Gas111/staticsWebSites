import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import place from '../images/ubicacionDunken.jpg'
import libro from '../images/libro.png'
import './styles/secondSection.css'

const SecondSection = () => {
  return (
    <section className="secondSection w-full h-auto" id="second_section">
      <Card style={{ width: '20rem', height: '25rem' }}>
        <a href="https://goo.gl/maps/GqfBC">
          <Card.Img variant="top" src={place} />
        </a>
        <Card.Body>
          <Card.Title>UBICACION</Card.Title>
          <Card.Text>
            EDITORIAL DUNKEN - Calle Ayacucho 357, esquina Av.Corrientes, CABA.
            Argentina
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem', height: '25rem' }}>
        {' '}
        <a href="http://">
          <Card.Img
            variant="top"
            src={libro}
            alt="foto libro"
            style={{ height: '23rem', margin: '0' }}
          />
          <Card.Body style={{ padding: '0', margin: '0' }}>
            <Card.Title>Compre el Libro</Card.Title>
          </Card.Body>{' '}
        </a>
      </Card>
    </section>
  )
}

export default SecondSection
