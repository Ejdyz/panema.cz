import Container from 'react-bootstrap/Container';
import NavBar from '../Components/NavBar'

export function MainPage(){
  return(
    <>
      <NavBar currentPage="main" />
      <div style={{backgroundColor: "#101214", height: "100vh"}}> {/* Background */}
        <Container style={{backgroundColor: "#191c1e",height: "100%"}}> {/* Content container */}
          <div style={{paddingTop:"3vh", height: "100%"}}>

            <div style={{position:"relative" }}>
              <img src="/images/homePage.png" alt="Image"  style={{height:"auto", display:"block", width: "100%", borderRadius: "20px 20px 0px 0px", opacity:.6}}/>
                <span style={{position:"absolute",top:"35%",left:"50%",transform:" translate(-50%, -50%)", color:"white"}}>
                  <h1 style={{textAlign: "center"}}>Úvod</h1>
                  <hr style={{width: "200px", color: "white", opacity: 1}}></hr>
                </span>
            </div>
            <div style={{backgroundColor: "#191c1e", height: "20vh"}}>

            </div>

          </div>
        </Container>
      </div>
    </> 
  )
}