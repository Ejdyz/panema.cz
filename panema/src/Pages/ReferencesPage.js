import NavBar from '../Components/NavBar'
import Container from 'react-bootstrap/esm/Container'
import ReferenceComponent from '../Components/ReferenceComponent'
import MobileReferenceComponent from '../Components/MobileReferenceComponent'
import { Footer } from '../Components/Footer'
import { Hidden } from 'react-grid-system'

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

            <Hidden md sm xs xxs>
              <ReferenceComponent name="SčVK a.s." logo='/logos/logo_scvk.svg' hr={true} />
              <ReferenceComponent name="SVS a.s." logo='/logos/logo_svs.png' hr={true} />
              <ReferenceComponent name="Severočeská servisní a.s." logo='/logos/logo_severoceskaServisni.png' hr={true} />
              <ReferenceComponent name="Eurovia a.s." logo='/logos/logo_eurovia.svg' hr={true} />
              <ReferenceComponent name="Metrostav a.s." logo='/logos/logo_metrostav.svg' hr={true} />
              <ReferenceComponent name="Vodovody a kanalizace Náchod a.s." logo='/logos/logo_vakNachod.png' hr={true} />
              <ReferenceComponent name="Vodárny a kanalizace Karlovy Vary, a.s." logo='/logos/logo_vodakva.png' hr={true} />
              <ReferenceComponent name="Vodovody a kanalizace Týnec s.r.o." logo='/logos/logo_vakTynec.png' hr={true} />
              <ReferenceComponent name="EMSL LIBEREC s.r.o." logo='/logos/logo_emsl.png' hr={true} />
              <ReferenceComponent name="ERKA ŽATEC s.r.o." logo='/logos/logo_erka.png' hr={true} />
              <ReferenceComponent name="Laros s.r.o." logo='/logos/logo_laros.jpg' hr={true} />
              <ReferenceComponent name="Kollert Elektro s.r.o." logo='/logos/logo_kollert.webp' hr={false} />
            </Hidden>
            <Hidden lg xl xxl xxxl>
              <MobileReferenceComponent name="SčVK a.s." logo='/logos/logo_scvk.svg' hr={true} />
              <MobileReferenceComponent name="SVS a.s." logo='/logos/logo_svs.png' hr={true} />
              <MobileReferenceComponent name="Severočeská servisní a.s." logo='/logos/logo_severoceskaServisni.png' hr={true} />
              <MobileReferenceComponent name="Eurovia a.s." logo='/logos/logo_eurovia.svg' hr={true} />
              <MobileReferenceComponent name="Metrostav a.s." logo='/logos/logo_metrostav.svg' hr={true} />
              <MobileReferenceComponent name="Vodovody a kanalizace Náchod a.s." logo='/logos/logo_vakNachod.png' hr={true} />
              <MobileReferenceComponent name="Vodárny a kanalizace Karlovy Vary, a.s." logo='/logos/logo_vodakva.png' hr={true} />
              <MobileReferenceComponent name="Vodovody a kanalizace Týnec s.r.o." logo='/logos/logo_vakTynec.png' hr={true} />
              <MobileReferenceComponent name="EMSL LIBEREC s.r.o." logo='/logos/logo_emsl.png' hr={true} />
              <MobileReferenceComponent name="ERKA ŽATEC s.r.o." logo='/logos/logo_erka.png' hr={true} />
              <MobileReferenceComponent name="Laros s.r.o." logo='/logos/logo_laros.jpg' hr={true} />
              <MobileReferenceComponent name="Kollert Elektro s.r.o." logo='/logos/logo_kollert.webp' hr={false} />
            </Hidden>

          </div>
        </Container >
        <Footer />
      </div >
    </>
  )
}