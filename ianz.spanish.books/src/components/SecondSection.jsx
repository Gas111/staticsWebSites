import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import place from '../images/larural.png'
import libro from '../images/libro.png'
import './styles/secondSection.css'

const SecondSection = () => {
  return (
    <section className="secondSection w-full h-auto" id="second_section">
      <Card style={{ width: '20rem', height: '25rem',boxShadow:"0px 1px 5px 3px rgba(0,0,0,0.25)" }}>
        <a href="https://www.google.com/maps/dir//-34.580533,-58.4217103/@-34.580513,-58.4917504,12z/data=!3m1!4b1">
          <Card.Img variant="top" src={place} />
        </a>
        <Card.Body>
          <Card.Title>UBICACION</Card.Title>
          <Card.Text style={{ fontSize: '0.9rem' }}>
         FERIA INTERNACIONAL DEL LIBRO DE BUENOS AIRES-LA RURAL(CABA)-Argentina-Sala Horacio Gonzalez-Pabellon Ocre-/Ingresos: Av. Santa Fe 4201/Av. Sarmiento 2704, y estacionamiento/Av. Cerviño 4474, y estacionamiento
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
