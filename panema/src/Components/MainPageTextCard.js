export function MainPageTextCard() {
  return (
    <div style={{ backgroundColor: "#e0a535", display: "grid", placeItems: "center", }}>
      <div style={{ backgroundColor: "#191c1e", height: "auto", width: "80%", textAlign: "center", margin: "30px", color: 'white', padding: "30px", borderRadius: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <h2>O nás</h2>
          <hr style={{ width: "50%", margin: "0px", borderColor: "#e0a535", opacity: .5 }} />
        </div>
        <br />
        <h4>Společnost <h4 style={{ color: "#e0a535", display: "inline" }}>PANEMA </h4> s.r.o. byla založena v roce 2004 a zabývá se bezvýkopou výstavbou a rekonstrukcí inženýrských sítí.</h4>

        <br />
        <u><h4>Naším cílem je  <u style={{ color: '#e0a535' }}><h4 style={{ color: "#e0a535", display: "inline" }}>spokojený</h4></u> zákazník!</h4></u>
      </div>
    </div >
  )
} 