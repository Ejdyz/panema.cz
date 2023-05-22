import Container from 'react-bootstrap/Container';
import NavBar from '../Components/NavBar'
import { MainPageTextCard } from '../Components/MainPageTextCard';
import { Footer } from '../Components/Footer';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <>
      <NavBar currentPage="main" />
      <div style={{ backgroundColor: "#101214" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", height: "100%" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", minHeight: "100vh" }}>

            <div style={{ position: "relative" }}>
              <img src="/images/homePage.webp" alt="Image" style={{ height: "auto", display: "block", width: "100%", borderRadius: "20px 20px 0px 0px", opacity: .6, filter: "grayscale(1)" }} />
              <span style={{ position: "absolute", top: "40%", left: "50%", transform: " translate(-50%, -50%)", color: "white" }}>
                <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem" }}>Úvod</h1>
                <hr style={{ width: "200px", color: "#e7b242", opacity: 1 }}></hr>
              </span>
              <span style={{ position: "absolute", top: "100%", left: "50%", transform: " translate(-50%, -50%)", background: "linear-gradient(180deg, rgba(25,28,30,0) 10%, rgba(224,165,53,1) 100%)", height: "20px", width: "100%" }}></span>
            </div>

            <MainPageTextCard />

            <div style={{ background: "linear-gradient(0deg, rgb(16, 18, 20) 20%, rgba(224,165,53,1) 100%)", height: "40px" }}></div>

            <div style={{ backgroundColor: "rgb(16, 18, 20)", display: "grid", placeItems: "center", }}>
              <div style={{ backgroundColor: "#191c1e", height: "auto", width: "80%", borderRadius: " 20px ", textAlign: "center", padding: "30px", margin: "30px", color: 'white' }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                  <h2 >Naše specializace</h2>
                  <hr style={{ width: "50%", margin: "0px", borderColor: "#e0a535", opacity: .5 }} />
                </div>
                <br />
                <h4>Naše firma se specializuje na Horizontálně řízené vrtání <h4 style={{ color: "#e0a535", display: "inline" }}>(HDD) </h4> s prováděním výplachu.</h4>
                <br />
                <h4> Jsme schopni provádět práce v horninách o kvalitě<h4 style={{ color: "#e0a535", display: "inline" }}> x-y</h4>, s délkou vrtu až<h4 style={{ color: "#e0a535", display: "inline" }}> zzz metrů</h4> a s průměrem vrtu až <h4 style={{ color: "#e0a535", display: "inline" }}>xxxx mm</h4> .  </h4>
                <br />
                <Link to="/technologie"><Button variant="outline-warning" >Více zde</Button></Link>
              </div>
            </div>
          </div>

        </Container >

      </div >
      <Footer />
    </>
  )
}