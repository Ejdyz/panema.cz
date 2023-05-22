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
              <div>
                <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>Kontakt</h1>
                <hr style={{ width: "200px", color: "#e7b242", opacity: 1 }}></hr>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}