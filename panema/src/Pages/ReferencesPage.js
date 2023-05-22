import NavBar from '../Components/NavBar'
import Container from 'react-bootstrap/esm/Container'
import ReferenceComponent from '../Components/ReferenceComponent'
import { Footer } from '../Components/Footer'

export function ReferencesPage() {
  return (
    <>
      <NavBar currentPage="reference" />
      <div style={{ backgroundColor: "#101214", height: "100%" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", minHeight: "100vh" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", height: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem", borderBottom: "#e7b242 2px solid" }}>Reference</h1>
              <br />
            </div>

            <ReferenceComponent name="SčVK a.s. Ústí n/L" logo='/logos/logo_scvk.svg' hr={true} />
            <ReferenceComponent name="Eurovia a.s." logo='/logos/logo_eurovia.svg' hr={true} />
            <ReferenceComponent name="Vodovody a kanalizace Náchod a.s." logo='/logos/logo_vakNachod.png' hr={true} />
            <ReferenceComponent name="Vodárny a kanalizace Karlovy Vary, a.s." logo='/logos/logo_vodakva.png' hr={true} />
            <ReferenceComponent name="Vodovody a kanalizace Týnec s.r.o." logo='/logos/logo_vakTynec.png' hr={true} />
            <ReferenceComponent name="Jukr spol. s.r.o." logo='/logos/logo_jukr.png' hr={true} />
            <ReferenceComponent name="ELMOS LIBEREC s.r.o." logo='/logos/logo_elmos.png' hr={true} />
            <ReferenceComponent name="ERKA ŽATEC s.r.o." logo='/logos/logo_erka.png' hr={true} />
            <ReferenceComponent name="SčVK a.s. Ústí n/L" logo='/logos/logo_laros.jpg' />


          </div>
        </Container >
        <Footer />
      </div >
    </>
  )
}