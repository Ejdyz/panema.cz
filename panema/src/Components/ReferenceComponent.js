import Container from 'react-bootstrap/esm/Container'

export default function ReferenceComponent(props) {

  return (
    <>
      <Container style={{ width: "100%", backgroundColor: "#212529", textAlign: "center", color: "white", display: "flex", alignItems: "center", justifyContent: 'space-evenly', padding: "20px", borderRadius: "20px", minHeight: "150px" }}>
        <div style={{ width: "50%" }}>
          <h1 style={{ fontSize: "2rem" }} >{props.name}</h1>
        </div>
        <div style={{ width: "50%" }}>
          <img src={props.logo} alt={props.name} style={{ maxWidth: "200px", maxHeight: "100px", borderRadius: "10px" }} />
        </div>
      </Container>
      {props.hr ? <hr style={{ width: "80%", color: "rgb(255, 197, 88)", marginLeft: "10%" }} /> : <br />}
    </>
  )
}