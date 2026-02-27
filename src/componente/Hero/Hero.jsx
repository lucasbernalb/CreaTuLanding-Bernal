import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Título Principal</h1>
          <p>
            Este es un texto descriptivo del hero. Luego podés editarlo con tu
            mensaje comercial o promocional.
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
