import NavBar from '../Components/NavBar';
import Container from 'react-bootstrap/Container';
import { Footer } from '../Components/Footer';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Hidden } from 'react-grid-system';
export function TechnologyPage() {
  return (
    <>
      <NavBar currentPage="technology" />
      <div style={{ backgroundColor: "#101214", height: "100%" }}> {/* Background */}
        <Container style={{ backgroundColor: "#191c1e", height: "100%" }}> {/* Content container */}
          <div style={{ paddingTop: "3vh", minHeight: "100vh" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative", flexWrap: "nowrap" }}>
              <h1 style={{ textAlign: "center", color: "white", fontSize: "3rem", borderBottom: "#e7b242 2px solid" }}>Naše Technologie</h1>
              <br />
            </div>



            <Hidden md sm xs xxs>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%", backgroundSize: "cover", }}>
                  <img src="/images/vrtacka.webp" alt="Image" style={{ width: "100%", borderRadius: "20px 0 0 0" }} />
                </div>
                <div style={{ width: "50%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", borderRadius: "0 20px 0 0" }}>
                  <h1 style={{ borderBottom: "#e7b242 2px solid" }}>Vrtání</h1>
                  <p>Horizontální řízené vrtání <p style={{ color: "#e0a535", display: "inline" }}>(HDD)</p> je moderní pracovní postup pro výstavbu inženýrských sítí, jako jsou vodovody, plynovody a potrubí pro kabeláž.</p>
                  <p>Tento postup začíná provedením řízeného pilotního vrtu, který je <p style={{ color: "#e0a535", display: "inline" }}>monitorován</p> pomocí detektoru ve vrtací hlavě.</p>
                  <p>Poté se pilotní vrt rozšiřuje do požadovaného průměru pomocí rozšiřovacích hlav a <p style={{ color: "#e0a535", display: "inline" }}>zatahuje</p> se požadované potrubí.</p>
                  <p>Výhody tohoto postupu zahrnují <p style={{ color: "#e0a535", display: "inline" }}>minimální zásahy do komunikací</p>, možnost<p style={{ color: "#e0a535", display: "inline" }}> pokládky pod vodními plochami</p>, <p style={{ color: "#e0a535", display: "inline" }}>vyšší rychlost</p> vrtání než u klasických výkopů, <p style={{ color: "#e0a535", display: "inline" }}>eliminaci dopravních uzávěrů a nákladů na dopravní značení.</p></p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "50%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px", borderRadius: "0 0  0 20px" }}>
                  <h2 style={{ borderBottom: "#e7b242 2px solid" }}>Co zvládneme</h2>
                  <br />
                  <p>Zvládneme vyvrtat potrubí do délky <p style={{ color: "#e0a535", display: "inline" }}>xxx </p>m.</p>
                  <p>S maximalní dimenzí trubky <p style={{ color: "#e0a535", display: "inline" }}>xxx </p>cm.</p>
                  <p>Dokument k rozměrům cílové a startovací díry naleznete na odkazu níže  .</p>
                  <Link to="/kestazeni"><Button variant="outline-warning" >Dokument k rozměrům zde</Button></Link>
                </div>
                <div style={{ width: "50%", backgroundSize: "cover", }}>
                  <img src="/images/vrtacka2.webp" alt="Image" style={{ width: "100%", borderRadius: "0 0 20px 0" }} />
                </div>
              </div>

              <br /><br />

              <div style={{ display: "flex" }}>
                <div style={{ width: "50%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", borderRadius: "20px 0 0 0" }}>
                  <h1 style={{ borderBottom: "#e7b242 2px solid" }}>Trhání</h1><br />
                  <p>Bezvýkopová oprava vodovodů pomocí metody <p style={{ color: "#e0a535", display: "inline" }}>"Pipe bursting"</p> spočívá v zatažení nového potrubí na místo stávajícího nevyhovujícího potrubí. </p>
                  <p>Při této metodě se stávající potrubí buď <p style={{ color: "#e0a535", display: "inline" }}>destruuje</p> nebo <p style={{ color: "#e0a535", display: "inline" }}>vytlačuje</p>. </p>
                  <p>Nové potrubí může mít <p style={{ color: "#e0a535", display: "inline" }}>stejný</p> profil nebo být o několik dimenzí <p style={{ color: "#e0a535", display: "inline" }}>větší</p> než stávající. </p>
                  <p>Při zatahování plastového potrubí se často používá potrubí s <p style={{ color: "#e0a535", display: "inline" }}>ochranou vrstvou</p>, aby nedocházelo k odření nebo poškození potrubí. Bezvýkopová oprava vodovodů metodou <p style={{ color: "#e0a535", display: "inline" }}>"Relining"</p> je podobná metodě Pipe bursting, ale do stávajícího potrubí se vtahuje nové potrubí <p style={{ color: "#e0a535", display: "inline" }}>menšího</p> průměru.</p>
                </div>
                <div style={{ width: "50%" }}>
                  <img src="/images/trhani2.webp" alt="Image" style={{ width: "100%", borderRadius: "0 20px 0 0" }} />
                </div>
              </div>

              <div style={{ display: "flex", marginBottom: "30px" }}>
                <div style={{ width: "50%", backgroundSize: "cover", }}>
                  <img src="/images/trhani1.webp" alt="Image" style={{ width: "100%", borderRadius: "0 0  0 20px" }} />
                </div>
                <div style={{ width: "50%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px", borderRadius: "0 0 20px 0" }}>
                  <h2 style={{ borderBottom: "#e7b242 2px solid" }}>Co zvládneme</h2>
                  <p>Zvládneme trhat potrubí do délky <p style={{ color: "#e0a535", display: "inline" }}>xxx </p>m.</p>
                  <p>S maximalní dimenzí trubky <p style={{ color: "#e0a535", display: "inline" }}>xxx </p>cm.</p>
                  <p>Dokument k rozměrům cílové a startovací díry naleznete na odkazu níže.</p>
                  <Link to="/kestazeni"><Button variant="outline-warning" >Dokument k rozměrům zde</Button></Link>
                </div>
              </div>



              <div style={{ width: "100%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", borderRadius: "20px" }}>
                <h2 style={{ borderBottom: "#e7b242 2px solid", width: "50%" }}>Závěr</h2>
                <p></p>
                <p>Obě metody bezvýkopového řešení mají výhody jako <p style={{ color: "#e0a535", display: "inline" }}>rychlost provádění</p>, <p style={{ color: "#e0a535", display: "inline" }}>minimální zásahy</p> do komunikací, omezení <p style={{ color: "#e0a535", display: "inline" }}>dopravního provozu</p> a <p style={{ color: "#e0a535", display: "inline" }}>ekonomickou</p> úsporu ve srovnání s klasickými výkopy.</p>
                <p>Ke <p style={{ color: "#e0a535", display: "inline" }}>kontaktování</p> klikněte zde.</p>
                <Link to="/kontakt"><Button variant="outline-warning" >Kontakt</Button></Link><br />
              </div>
            </Hidden>

            <Hidden lg xl xxl xxxl>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ width: "100%", backgroundSize: "cover", }}>
                  <img src="/images/vrtacka.webp" alt="Image" style={{ width: "100%", borderRadius: "20px 20px 0 0" }} />
                </div>
                <div style={{ width: "100%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px" }}>
                  <h1 style={{ borderBottom: "#e7b242 2px solid", width: "20%" }}>Vrtání</h1>
                  <p>Horizontální řízené vrtání <p style={{ color: "#e0a535", display: "inline" }}>(HDD)</p> je moderní pracovní postup pro výstavbu inženýrských sítí, jako jsou vodovody, plynovody a potrubí pro kabeláž.</p>
                  <p>Tento postup začíná provedením řízeného pilotního vrtu, který je <p style={{ color: "#e0a535", display: "inline" }}>monitorován</p> pomocí detektoru ve vrtací hlavě.</p>
                  <p>Poté se pilotní vrt rozšiřuje do požadovaného průměru pomocí rozšiřovacích hlav a <p style={{ color: "#e0a535", display: "inline" }}>zatahuje</p> se požadované potrubí.</p>
                  <p>Výhody tohoto postupu zahrnují <p style={{ color: "#e0a535", display: "inline" }}>minimální zásahy do komunikací</p>, možnost<p style={{ color: "#e0a535", display: "inline" }}> pokládky pod vodními plochami</p>, <p style={{ color: "#e0a535", display: "inline" }}>vyšší rychlost</p> vrtání než u klasických výkopů, <p style={{ color: "#e0a535", display: "inline" }}>eliminaci dopravních uzávěrů a nákladů na dopravní značení.</p></p>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid rgba(150,150,150,0.25)" }}>

                <div style={{ width: "100%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px" }}>
                  <h2 style={{ borderBottom: "#e7b242 2px solid", width: "50%" }}>Co zvládneme</h2>
                  <br />
                  <p>Zvládneme vyvrtat potrubí do délky <p style={{ color: "#e0a535", display: "inline" }}>xxx </p>m <p style={{ color: "#e0a535", display: "inline" }}>xxx</p> m.</p>
                  <p>Dokument k rozměrům cílové a startovací díry naleznete na odkazu níže  .</p>
                  <Link to="/kestazeni"><Button variant="outline-warning" >Dokument k rozměrům zde</Button></Link>

                </div>
                <div style={{ width: "100%", backgroundSize: "cover", }}>
                  <img src="/images/vrtacka2.webp" alt="Image" style={{ width: "100%", borderRadius: "0 0 20px 20px" }} />
                </div>
              </div>
              <br /><br />
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div style={{ width: "100%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", borderRadius: "20px 20px 0 0" }}>
                  <h1 style={{ borderBottom: "#e7b242 2px solid", width: "20%" }}>Trhání</h1><br />
                  <p>Bezvýkopová oprava vodovodů pomocí metody <p style={{ color: "#e0a535", display: "inline" }}>"Pipe bursting"</p> spočívá v zatažení nového potrubí na místo stávajícího nevyhovujícího potrubí. </p>
                  <p>Při této metodě se stávající potrubí buď <p style={{ color: "#e0a535", display: "inline" }}>destruuje</p> nebo <p style={{ color: "#e0a535", display: "inline" }}>vytlačuje</p>. </p>
                  <p>Nové potrubí může mít <p style={{ color: "#e0a535", display: "inline" }}>stejný</p> profil nebo být o několik dimenzí <p style={{ color: "#e0a535", display: "inline" }}>větší</p> než stávající. </p>
                  <p>Při zatahování plastového potrubí se často používá potrubí s <p style={{ color: "#e0a535", display: "inline" }}>ochranou vrstvou</p>, aby nedocházelo k odření nebo poškození potrubí. Bezvýkopová oprava vodovodů metodou <p style={{ color: "#e0a535", display: "inline" }}>"Relining"</p> je podobná metodě Pipe bursting, ale do stávajícího potrubí se vtahuje nové potrubí <p style={{ color: "#e0a535", display: "inline" }}>menšího</p> průměru.</p>
                </div>
                <div style={{ width: "100%" }}>
                  <img src="/images/trhani2.webp" alt="Image" style={{ width: "100%" }} />
                </div>
              </div>
              <div style={{ display: "flex", marginBottom: "30px", flexWrap: "wrap" }}>

                <div style={{ width: "100%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5px" }}>
                  <h2 style={{ borderBottom: "#e7b242 2px solid", width: "50%" }}>Co zvládneme</h2>
                  <p></p>
                  <p>Tento postup začíná provedením řízeného pilotního vrtu, který je monitorován pomocí detektoru ve vrtací hlavě.</p>
                  <p>Dokument k rozměrům cílové a startovací díry naleznete na odkazu níže  .</p>
                  <Link to="/kestazeni"><Button variant="outline-warning" >Dokument k rozměrům zde</Button></Link>
                  <br />
                </div>
                <div style={{ width: "100%", backgroundSize: "cover", }}>
                  <img src="/images/trhani1.webp" alt="Image" style={{ width: "100%", borderRadius: "0 0  0 20px" }} />
                </div>
              </div>
              <div style={{ width: "100%", backgroundColor: "#212529", color: "white", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", padding: "5px", borderRadius: "20px" }}>
                <h2 style={{ borderBottom: "#e7b242 2px solid", width: "50%" }}>Závěr</h2>
                <p></p>
                <p>Obě metody bezvýkopového řešení mají výhody jako <p style={{ color: "#e0a535", display: "inline" }}>rychlost provádění</p>, <p style={{ color: "#e0a535", display: "inline" }}>minimální zásahy</p> do komunikací, omezení <p style={{ color: "#e0a535", display: "inline" }}>dopravního provozu</p> a <p style={{ color: "#e0a535", display: "inline" }}>ekonomickou</p> úsporu ve srovnání s klasickými výkopy.</p>
                <p>Ke <p style={{ color: "#e0a535", display: "inline" }}>kontaktování</p> klikněte zde.</p>
                <Link to="/kontakt"><Button variant="outline-warning" >Kontakt</Button></Link><br />
              </div>
            </Hidden>
            <br />
          </div>
        </Container >
      </div >
      <Footer />
    </>
  )
}