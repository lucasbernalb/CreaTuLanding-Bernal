import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Bienvenido/a a Reina Artura</h1>
          <p>
           Arte como forma de vivir
          </p>
          <div className="hero-buttons">
            <Link to="/categoria/tendencia" className="btn-primary">
              Descubrir Colección
            </Link>

            <Link to="/contacto" className="btn-secondary">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
