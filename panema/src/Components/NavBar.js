import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { Hidden } from "react-grid-system";

export default function NavBar(props) {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
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
                maxHeight: "70px",
                width: "",
              }}
            />
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
                      maxHeight: "32px",
                      display: { md: "inherit", xs: "none" },
                    }}
                  />
                </Hidden>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Nav.Link
                    as={"span"}
                    style={
                      props.currentPage === "main"
                        ? { borderBottom: "2px solid rgb(255 197 88)" }
                        : {}
                    }
                    active={props.currentPage === "main"}
                  >
                    Úvod
                  </Nav.Link>
                </Link>
                <Link to="/technologie" style={{ textDecoration: "none" }}>
                  <Nav.Link
                    as={"span"}
                    style={
                      props.currentPage === "technology"
                        ? { borderBottom: "2px solid rgb(255 197 88)" }
                        : {}
                    }
                    active={props.currentPage === "technology"}
                  >
                    Technologie
                  </Nav.Link>
                </Link>
                <Link to="/fotografie" style={{ textDecoration: "none" }}>
                  <Nav.Link
                    as={"span"}
                    style={
                      props.currentPage === "fotography"
                        ? { borderBottom: "2px solid rgb(255 197 88)" }
                        : {}
                    }
                    active={props.currentPage === "fotography"}
                  >
                    Fotografie
                  </Nav.Link>
                </Link>
                <Link to="/reference" style={{ textDecoration: "none" }}>
                  <Nav.Link
                    as={"span"}
                    style={
                      props.currentPage === "reference"
                        ? { borderBottom: "2px solid rgb(255 197 88)" }
                        : {}
                    }
                    active={props.currentPage === "reference"}
                  >
                    Referece
                  </Nav.Link>
                </Link>
                <Link to="/kontakt" style={{ textDecoration: "none" }}>
                  <Nav.Link
                    as={"span"}
                    style={
                      props.currentPage === "contact"
                        ? { borderBottom: "2px solid rgb(255 197 88)" }
                        : {}
                    }
                    active={props.currentPage === "contact"}
                  >
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
                        ? { borderBottom: "2px solid rgb(255 197 88)" }
                        : {}
                    }
                    active={props.currentPage === "download"}
                  >
                    Ke Stažení
                  </Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </ThemeProvider>
    </>
  );
}
