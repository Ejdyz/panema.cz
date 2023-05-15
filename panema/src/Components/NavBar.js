import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function NavBar(props){

  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>
          <img
            src='\logo.png'
            alt='Logo'
            height='32px'
            style={{backgroundColor: "gray",padding: "2px"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link active={props.currentPage === "uvod"} href="/">Úvod</Nav.Link>
            <Nav.Link active={props.currentPage === "kontakt"} href="/kontakt">Kontakt</Nav.Link>
            <Nav.Link active={props.currentPage === "technologie"} href="/technologie">Technologie</Nav.Link>
            <Nav.Link active={props.currentPage === "reference"} href="/reference">Referece</Nav.Link>
            <Nav.Link active={props.currentPage === "fotografie"} href="/fotografie">Fotografie</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link active={props.currentPage === "kestazeni"} href='/kestazeni'>Ke Stažení</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}