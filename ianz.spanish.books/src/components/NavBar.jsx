import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './styles/navbar.css'
import logoivan from '../images/ivanlogo.png'
import { useEffect, useState } from 'react'

function NavBar() {
  const expand = 'sm'
  const [expanded, setExpanded] = useState(false)

 
  return (
    <nav className="navbar">
      <Navbar
        key={expand}
        bg="dark"
        expanded={expanded}
        expand={expand}
        className=""
        variant="dark"
        sticky="top"
        // onSelect={handleBar}
        onClick={() => {setExpanded(expanded ? false : 'expanded') 
      }}
      >
        <Container fluid>
          <Navbar.Brand href="#main_section">
            <img src={logoivan} alt="Firma Ivan" style={{ height: '5rem' }} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            // onClick={() => {setExpanded(expanded ? false : 'expanded')
         
          
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Conferencia Ivan Anz
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" variant="dark">
                <Nav.Link href="#main_section" className="link-menu" >Inicio</Nav.Link>
                <Nav.Link href="#first_section" className="link-menu">Informacion</Nav.Link>
                <Nav.Link href="#second_section" className="link-menu">Ubicacion</Nav.Link>
                <Nav.Link href="#third_section" className="link-menu">Inscribite</Nav.Link>
                <Nav.Link href="#footer_section" className="link-menu">Social</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBar
