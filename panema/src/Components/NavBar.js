import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Hidden } from "react-grid-system";
import { Person, House, Gear, Image, Download, Briefcase } from "react-bootstrap-icons";

export default function NavBar(props) {
  return (
    <>
      <Hidden md sm xs xxs>
        <div
          style={{
            backgroundColor: "#212529",
            display: "flex",
            width: "auto",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <img
            src="\images\logo.png"
            alt="Logo"
            style={{
              backgroundColor: "#7c7c7c",
              padding: "2px",
              height: "70px",
            }} />
          {/* <img
            src="\images\Futuristiclogo.png"
            alt="Logo"
            style={{
              backgroundColor: "rgb(255 197 88)",
              padding: "5px"
            }}
          /> */}
        </div>
      </Hidden>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>
              <Hidden lg xl xxl xxxl>
                <img
                  src="\images\logo.png"
                  alt="Logo"
                  style={{
                    backgroundColor: "#7c7c7c",
                    padding: "2px",
                    maxHeight: "40px",
                    display: { md: "inherit", xs: "none" },
                  }}
                />
              </Hidden>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav.Link
                  as={"span"}

                  style={
                    props.currentPage === "main"
                      ? { display: "flex", alignItems: "center", marginRight: "20px", borderBottom: "2px solid rgb(255 197 88)" }
                      : { display: "flex", alignItems: "center", marginRight: "20px" }

                  }
                  active={props.currentPage === "main"}
                >
                  <House style={{ marginRight: "5px" }} />
                  Úvod
                </Nav.Link>
              </Link>
              <Link to="/technologie" style={{ textDecoration: "none" }}>
                <Nav.Link
                  as={"span"}
                  style={
                    props.currentPage === "technology"
                      ? { display: "flex", alignItems: "center", marginRight: "20px", borderBottom: "2px solid rgb(255 197 88)" }
                      : { display: "flex", alignItems: "center", marginRight: "20px" }
                  }
                  active={props.currentPage === "technology"}
                >
                  <Gear style={{ marginRight: "5px" }} />
                  Technologie
                </Nav.Link>
              </Link>
              <Link to="/fotografie" style={{ textDecoration: "none" }}>
                <Nav.Link
                  as={"span"}
                  style={
                    props.currentPage === "fotography"
                      ? { display: "flex", alignItems: "center", marginRight: "20px", borderBottom: "2px solid rgb(255 197 88)" }
                      : { display: "flex", alignItems: "center", marginRight: "20px" }
                  }
                  active={props.currentPage === "fotography"}
                >
                  <Image style={{ marginRight: "5px" }} />
                  Fotogalerie
                </Nav.Link>
              </Link>
              <Link to="/reference" style={{ textDecoration: "none" }}>
                <Nav.Link
                  as={"span"}
                  style={
                    props.currentPage === "reference"
                      ? { display: "flex", alignItems: "center", marginRight: "20px", borderBottom: "2px solid rgb(255 197 88)" }
                      : { display: "flex", alignItems: "center", marginRight: "20px" }
                  }
                  active={props.currentPage === "reference"}
                >
                  <Briefcase style={{ marginRight: "5px" }} />
                  Reference
                </Nav.Link>
              </Link>
              <Link to="/kontakt" style={{ textDecoration: "none" }}>
                <Nav.Link
                  as={"span"}
                  style={
                    props.currentPage === "contact"
                      ? { display: "flex", alignItems: "center", marginRight: "20px", borderBottom: "2px solid rgb(255 197 88)" }
                      : { display: "flex", alignItems: "center", marginRight: "20px" }
                  }
                  active={props.currentPage === "contact"}
                >
                  <Person style={{ marginRight: "5px" }} />
                  Kontakt
                </Nav.Link>
              </Link>
            </Nav>
            <Nav>
              <Link to="/kestazeni" style={{ textDecoration: "none" }}>
                <Nav.Link
                  as={"span"}
                  style={
                    props.currentPage === "download"
                      ? { display: "flex", alignItems: "center", borderBottom: "2px solid rgb(255 197 88)" }
                      : { display: "flex", alignItems: "center" }
                  }
                  active={props.currentPage === "download"}
                >
                  <Download style={{ marginRight: "5px" }} />
                  Ke Stažení
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
}
