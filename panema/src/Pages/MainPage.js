import Container from 'react-bootstrap/Container';
import NavBar from '../Components/NavBar'

export function MainPage(){
  return(
    <>
      <NavBar currentPage="main" />
      <div style={{backgroundColor: "#101214", height: "100%"}}> {/* Background */}
        <Container style={{backgroundColor: "#191c1e",height: "100%"}}> {/* Content container */}
          <div style={{paddingTop:"3vh", height: "100%"}}>

            <div style={{position:"relative" }}>
              <img src="/images/homePage.png" alt="Image"  style={{height:"auto", display:"block", width: "100%", borderRadius: "20px 20px 0px 0px", opacity:.6}}/>
                <span style={{position:"absolute",top:"35%",left:"50%",transform:" translate(-50%, -50%)", color:"white"}}>
                  <h1 style={{textAlign: "center", color: "white"}}>Úvod</h1>
                  <hr style={{width: "200px", color: "#e7b242", opacity: 1}}></hr>
                </span>
            </div>

            <div style={{backgroundColor: "#e0a535", display: "grid", placeItems: "center",}}>
              <div style={{backgroundColor: "#191c1e", height: "auto", width: "80%",borderRadius: "20px", textAlign:"center",padding: "30px",margin:"30px", color:'white'}}>
                <h4>Společnost <h4 style={{color: "#e0a535", display:"inline"}}>PANEMA </h4> s.r.o. byla založena v roce 2004 a zabývá se bezvýkopou výstavbou a rekonstrukcí inženýrských sítí.</h4>
                <br/>
                <h4><h4 style={{color: "#e0a535", display:"inline"}}>Rádi</h4> vám poradíme jakou technologii při stavebních pracech zvolit. </h4>
                <br/>
                <u><h4>Naším cílem je  <u style={{color:'#e0a535'}}><h4 style={{color: "#e0a535", display:"inline"}}>spokojený</h4> </u>zákazník!</h4></u>  
              </div>
            </div>

          </div>
        </Container>
      </div>
    </> 
  )
}