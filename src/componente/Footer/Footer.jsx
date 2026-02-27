import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Reina Artura</h2>
          <p>
            Arte místico y orgánico creado para transformar
            espacios en refugios de energía y naturaleza.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/categoria/tendencia">Tendencias</Link></li>
            <li><Link to="/categoria/descuento">Descuentos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: contacto@reinaartura.com</p>
          <p>Instagram: @reinaartura</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Reina Artura · Todos los derechos reservados
      </div>

    </footer>
  );
};

export default Footer;