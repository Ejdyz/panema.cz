
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(33 37 41)", padding: "1.5%" }} >
      <footer style={{ backgroundColor: "rgb(33 37 41)" }}>
        <ul class="nav justify-content-center pb-3 mb-3" style={{ borderBottom: "2px solid #e0a535", fontSize: "auto" }}>
          <Link to="/" style={{ textDecoration: "none" }}><li class="nav-item"><span class="nav-link px-2 text-muted">Úvod</span></li></Link>
          <Link to="/technologie" style={{ textDecoration: "none" }}><li class="nav-item"><span class="nav-link px-2 text-muted">Technologie</span></li></Link>
          <Link to="/fotografie" style={{ textDecoration: "none" }}><li class="nav-item"><span class="nav-link px-2 text-muted">Fotogalerie</span></li></Link>
          <Link to="/reference" style={{ textDecoration: "none" }}><li class="nav-item"><span class="nav-link px-2 text-muted">Reference</span></li></Link>
          <Link to="/kontakt" style={{ textDecoration: "none" }}><li class="nav-item"><span class="nav-link px-2 text-muted">Kontakt</span></li></Link>
          <Link to="/kestazeni" style={{ textDecoration: "none" }}><li class="nav-item"><span class="nav-link px-2 text-muted">Ke Stazeni</span></li></Link>
        </ul>
        <p class="text-center text-muted">© 2023 Panema s.r.o.</p>

      </footer>
    </div>
  )
}