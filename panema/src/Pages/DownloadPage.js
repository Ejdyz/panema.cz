import NavBar from '../Components/NavBar';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { Hidden } from 'react-grid-system';
import { Footer } from '../Components/Footer';
export function DownloadPage() {
  return (
    <>
      <NavBar currentPage="download" />
      <div style={{ backgroundColor: "#101214", height: "100%" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", minHeight: "100vh" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem", borderBottom: "#e7b242 2px solid" }}>Ke Stažení</h1>
              <br />
            </div>

            <Hidden md sm xs xxs>
              <Container style={{ width: "100%", backgroundColor: "#212529", textAlign: "center", color: "white", padding: "20px", borderRadius: "20px" }}>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-evenly', borderBottom: "#e7b242 2px solid", padding: "20px" }}>
                  <div >
                    Vrtání - Podklad pro vytvoření startovací a cílové jámy
                  </div>
                  <div>
                    <i>
                      Vrtani.pdf
                    </i>
                  </div>
                  <div >
                    <Button download href='/files/Vrtani.pdf' variant='outline-success' style={{ marginRight: "20px" }}>Stáhnout</Button>
                    <Button href='/files/Vrtani.pdf' variant="outline-warning" >Otevřít</Button>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'space-evenly', padding: "20px" }}>
                  <div>
                    Trhání - Podklad pro vytvoření startovací a cílové jámy
                  </div>
                  <div>
                    <i>
                      Trhani.pdf
                    </i>
                  </div>
                  <div >
                    <Button download href='/files/Trhani.pdf' variant='outline-success' style={{ marginRight: "20px" }}>Stáhnout</Button>
                    <Button href='/files/Trhani.pdf' variant="outline-warning" >Otevřít</Button>
                  </div>
                </div>
              </Container>
              <br />
            </Hidden>

            <Hidden lg xl xxl xxxl>
              <Container style={{ width: "100%", backgroundColor: "#212529", textAlign: "center", color: "white", padding: "20px", borderRadius: "20px" }}>
                <div style={{ borderBottom: "#e7b242 2px solid", padding: "20px" }}>
                  <div style={{ width: "100%", padding: "10px" }}>
                    Vrtání - Podklad pro vytvoření startovací a cílové jámy
                  </div>
                  <div style={{ width: "100%", padding: "10px" }}>
                    <i>
                      Vrtani.pdf
                    </i>
                  </div>
                  <div style={{ width: "100%", padding: "10px" }}>
                    <Button download href='/files/Vrtani.pdf' variant='outline-success' style={{ marginRight: "20px" }}>Stáhnout</Button>
                    <Button href='/files/Vrtani.pdf' variant="outline-warning" >Otevřít</Button>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <div style={{ width: "100%", padding: "10px" }}>
                    Trhání - Podklad pro vytvoření startovací a cílové jámy
                  </div>
                  <div style={{ width: "100%", padding: "10px" }}>
                    <i>
                      Trhani.pdf
                    </i>
                  </div>
                  <div style={{ width: "100%", padding: "10px" }}>
                    <Button download href='/files/Trhani.pdf' variant='outline-success' style={{ marginRight: "20px" }}>Stáhnout</Button>
                    <Button href='/files/Trhani.pdf' variant="outline-warning" >Otevřít</Button>
                  </div>
                </div>
              </Container>
              <br />
            </Hidden>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}