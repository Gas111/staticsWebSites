import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import place from '../images/ubicacionDunken.jpg'
import editorial from '../images/logo-dunken.gif'
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
        <Card.Img variant="top" src={editorial} alt="foto editorial" />

        <Card.Body>
          <Card.Title>EDITORIAL DUNKEN</Card.Title>
          <Card.Text>
            Este evento sera realizado en la editorial Dunken{' '}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  )
}

export default SecondSection
