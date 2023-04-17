import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import './styles/navbar.css'
import logoivan from '../images/ivanlogo.png'
import { useEffect, useState } from 'react'

function NavBarotro() {
  const expand = 'sm'
  const [expanded, setExpanded] = useState("false")
  const [toggled, setToggled] = useState(false)

useEffect(() => {
  setExpanded(false)

}, [])



  const handlerSelect = (e) => {
  setExpanded(false)

  }

  const handlerClick = () => {
    setExpanded(true)
  }

  // const handleCollapse = (e) => {
  //   console.log(e.target.text)
  //   console.log(e.target)
  //   console.log(e.target.attr)
  //   console.log('solo despues')
  // }

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
        // onToggle={handleToggle}
        // collapseOnSelect={handleCollapse}
        onSelect={handlerSelect}
      >
        <Container fluid>
          <Navbar.Brand href="#main_section">
            <a href="https://ivananz.com"> <img src={logoivan} alt="Firma Ivan" style={{ height: '5rem' }} /></a>
           
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            expanded={expanded}
            onClick={handleToggle}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            // onClick={handlerClick}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Conferencia Ivan Anz
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#main_section" className="link-menu">
                  Inicio
                </Nav.Link>
                <Nav.Link href="#first_section" className="link-menu">
                  Informacion
                </Nav.Link>
                <Nav.Link href="#second_section" className="link-menu">
                  Ubicacion
                </Nav.Link>
                <Nav.Link href="#third_section" className="link-menu">
                  Inscribite
                </Nav.Link>
                <Nav.Link href="#footer_section" className="link-menu">
                  Social
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBarotro
