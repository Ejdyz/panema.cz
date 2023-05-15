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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>
            <img
              src='\images\logo.png'
              alt='Logo'
              height='32px'
              style={{backgroundColor: "#7c7c7c",padding: "2px"}}
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: 'none' }}><Nav.Link as={"span"}  style={props.currentPage === "main" ? {borderBottom: "2px solid rgb(255 197 88)"}:{}} active={props.currentPage === "main"} >Úvod</Nav.Link></Link>
            <Link to="/kontakt" style={{ textDecoration: 'none' }}><Nav.Link as={"span"} style={props.currentPage === "contact" ? {borderBottom: "2px solid rgb(255 197 88)"}:{}} active={props.currentPage === "contact"} >Kontakt</Nav.Link></Link>
            <Link to="/technologie" style={{ textDecoration: 'none' }}><Nav.Link as={"span"} style={props.currentPage === "technology" ? {borderBottom: "2px solid rgb(255 197 88)"}:{}} active={props.currentPage === "technology"} >Technologie</Nav.Link></Link>
            <Link to="/reference" style={{ textDecoration: 'none' }}><Nav.Link as={"span"} style={props.currentPage === "reference" ? {borderBottom: "2px solid rgb(255 197 88)"}:{}} active={props.currentPage === "reference"} >Referece</Nav.Link></Link>
            <Link to="/fotografie" style={{ textDecoration: 'none' }}><Nav.Link as={"span"} style={props.currentPage === "fotography" ? {borderBottom: "2px solid rgb(255 197 88)"}:{}} active={props.currentPage === "fotography"}>Fotografie</Nav.Link></Link>
          </Nav>
          <Nav>
          <Link to="/kestazeni" style={{ textDecoration: 'none' }}><Nav.Link as={"span"} style={props.currentPage === "download" ? {borderBottom: "2px solid rgb(255 197 88)"}:{}} active={props.currentPage === "download"}>Ke Stažení</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}