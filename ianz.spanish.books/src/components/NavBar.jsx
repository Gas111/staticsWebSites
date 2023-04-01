import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Offcanvas from 'react-bootstrap/Offcanvas'
import './styles/navbar.css'

function NavBar() {
  const expand = 'sm'
  return (
    <div className="navbar">
      <Navbar
        key={expand}
        bg="secondary"
        expand={expand}
        className=""
        variant="dark"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href="#main_section">
            Ivan Anz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#main_section">Inicio</Nav.Link>
                <Nav.Link href="#first_section">Informacion</Nav.Link>
                <Nav.Link href="#second_section">Ubicacion</Nav.Link>
                <Nav.Link href="#third_section">Inscribite</Nav.Link>
                <Nav.Link href="#footer_section">Social</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
