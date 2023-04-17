import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import place from '../images/ubicacionDunken.jpg'
import libro from '../images/libro.png'
import './styles/secondSection.css'

const SecondSection = () => {
  return (
    <section className="secondSection w-full h-auto" id="second_section">
      <Card style={{ width: '20rem', height: '25rem',boxShadow:"0px 1px 5px 3px rgba(0,0,0,0.25)" }}>
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

      <Card style={{ width: '20rem', height: '25rem',boxShadow:"1px 1px 5px 3px rgba(0,0,0,0.25)" }}>
        {' '}
        <a href="https://www.dunken.org/WEB2014/index.php?opt=2&id_titulo=19813" style={{ textDecoration: 'none', color: 'black' }}>
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
