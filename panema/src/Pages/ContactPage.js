import Container from 'react-bootstrap/Container';
import NavBar from '../Components/NavBar'
export function ContactPage() {
  return (
    <>
      <NavBar currentPage="contact" />
      <div style={{ backgroundColor: "#101214", height: "100vh" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", minHeight: "100vh" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem", borderBottom: "#e7b242 2px solid" }}>Kontakt</h1>
              <br />
            </div>
          </div>
        </Container >
      </div >
    </>
  )
}