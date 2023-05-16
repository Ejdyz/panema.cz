import NavBar from '../Components/NavBar'
import Container from 'react-bootstrap/Container';

export function TechnologyPage() {
  return (
    <>
      <NavBar currentPage="technology" />
      <div style={{ backgroundColor: "#101214", height: "100vh" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", height: "100%" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>Technologie</h1>
              <hr style={{ width: "200px", color: "#e7b242", opacity: 1 }}></hr>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}