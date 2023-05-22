import { Hidden } from 'react-grid-system'
import { Footer } from '../Components/Footer'
import { FotoCarousel } from '../Components/FotoCarousel'
import NavBar from '../Components/NavBar'
import Container from 'react-bootstrap/esm/Container'
export function FotographyPage() {
  return (
    <>
      <NavBar currentPage="fotography" />
      <div style={{ backgroundColor: "#101214" }}> {/* Background */}
        <Hidden lg xl xxl xxxl xs xxs>
          <Container style={{ backgroundColor: "#191c1e", height: "100%" }}> {/* Content container */}
            <div style={{ paddingTop: "3vh", minHeight: "100vh" }}>
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
                <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem", borderBottom: "#e7b242 2px solid" }}>Fotogalerie</h1>
                <br />
              </div>
              <div style={{ width: "100%", height: "auto" }}>
                <FotoCarousel />
              </div>
              <br></br>
            </div>
          </Container>
        </Hidden>
        <Hidden sm md >
          <Container style={{ backgroundColor: "#191c1e", height: "100%" }}> {/* Content container */}
            <div style={{ paddingTop: "3vh", minHeight: "100vh" }}>
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
                <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem", borderBottom: "#e7b242 2px solid" }}>Fotogalerie</h1>
                <br />
              </div>
              <FotoCarousel />
              <br></br>
            </div>
          </Container>
        </Hidden>
      </div>
      <Footer />
    </>
  )
}