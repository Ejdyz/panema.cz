import Container from 'react-bootstrap/Container';
import NavBar from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import { Hidden } from 'react-grid-system';
import { GeoAlt, Telephone, Envelope } from 'react-bootstrap-icons';
export function ContactPage() {
  return (
    <>
      <NavBar currentPage="contact" />
      <div style={{ backgroundColor: "#101214", height: "100%" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", minHeight: "100vh" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "2.5rem", borderBottom: "#e7b242 2px solid" }}>Kontakt</h1>
              <br />
            </div>
            <br />
            <Hidden sm xs xxs>
              <Container style={{ width: "100%", backgroundColor: "#212529", textAlign: "center", color: "white", display: "flex", alignItems: "center", justifyContent: 'space-evenly', flexDirection: "column", padding: "20px", borderRadius: "20px", minHeight: "150px" }}>
                <h1 style={{ fontSize: "2rem" }} >David Martínek</h1><br />
                <div style={{ width: "100%", display: 'flex', alignItems: "center" }}>
                  <div style={{ width: "50%", fontSize: "1.2rem" }}>
                    <GeoAlt style={{ color: "#e7b242", }} /><br />
                    PANEMA s.r.o. <br />
                    250 70 Odolena Voda <br />
                    Dolínek, Čenkovská 171<br />
                  </div>
                  <div style={{ width: "50%", fontSize: "1.2rem" }}>
                    <Telephone style={{ color: "#e7b242", }} />   602 270 410 <br />
                    <Envelope style={{ color: "#e7b242", }} /><a href="mailto:dm@panema.cz">  dm@panema.cz</a>
                  </div>
                </div>
                <br />
                <div style={{ width: "80%", display: "flex", justifyContent: "space-evenly" }} >
                  <div >
                    <p style={{ color: "#e7b242", display: "inline" }}>IČ:</p>	27137970
                  </div>
                  <div>
                    <p style={{ color: "#e7b242", display: "inline" }}>DIČ:</p>	CZ27137970
                  </div>
                </div>
              </Container>
            </Hidden>

            <Hidden md lg xl xxl xxxl>
              <Container style={{ width: "100%", backgroundColor: "#212529", textAlign: "center", color: "white", display: "flex", alignItems: "center", justifyContent: 'space-evenly', flexDirection: "column", padding: "20px", borderRadius: "20px", minHeight: "150px" }}>
                <h1 style={{ fontSize: "2rem" }} >David Martínek</h1><br />
                <div style={{ width: "100%" }}>
                  <div style={{ width: "100%" }}>
                    <GeoAlt style={{ color: "#e7b242", }} /><br />
                    PANEMA s.r.o. <br />
                    250 70 Odolena Voda <br />
                    Dolínek, Čenkovská 171<br />
                  </div>
                  <br />
                  <div style={{ width: "100%" }}>
                    <Telephone style={{ color: "#e7b242", }} />   602 270 410 <br />
                    <Envelope style={{ color: "#e7b242", }} /><a href="mailto:dm@panema.cz">  dm@panema.cz</a>
                  </div>
                </div>
                <br />
                <div style={{ width: "80%", display: "flex", justifyContent: "space-evenly" }} >
                  <div >
                    <p style={{ color: "#e7b242", display: "inline" }}>IČ:</p>	27137970
                  </div>
                  <div>
                    <p style={{ color: "#e7b242", display: "inline" }}>DIČ: </p>CZ27137970
                  </div>
                </div>
              </Container>
            </Hidden>
          </div>
        </Container >
        <Footer />
      </div >
    </>
  )
}