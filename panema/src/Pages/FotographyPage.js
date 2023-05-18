import { Footer } from '../Components/Footer'
import { FotoCarousel } from '../Components/FotoCarousel'
import NavBar from '../Components/NavBar'
import Container from 'react-bootstrap/esm/Container'
export function FotographyPage() {
  return (
    <>
      <NavBar currentPage="fotography" />
      <div style={{ backgroundColor: "#101214", height: "100%" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", height: "100%" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>Fotogalerie</h1>
              <hr style={{ width: "200px", color: "#e7b242", opacity: 1 }}></hr>
            </div>
            <FotoCarousel />
            <br></br>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}