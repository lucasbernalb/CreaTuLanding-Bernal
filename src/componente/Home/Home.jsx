import Hero from "../Hero/Hero";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaLightbulb, FaComments, FaPaintBrush, FaTruck } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Hero />

      <section className="home-section benefits-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3">
              <h5>🎨 Obras únicas</h5>
              <p>Cada cuadro es una pieza original.</p>
            </div>
            <div className="col-md-5">
              <h5>🖌️ Retratos personalizados</h5>
              <p>Encargá tu obra a medida.</p>
            </div>
            <div className="col-md-4">
              <h5>📩 Pedidos directos</h5>
              <p>Consultas simples y rápidas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section artist-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img/andrea/andrea.jpg"
                alt="La artista"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2>Andrea Bernasconi</h2>
              <p>
                Andrea Bernasconi es una artista uruguaya apasionada por el
                retrato y la representación artística de músicos, personas y
                momentos únicos y la figura femenina.
              </p>
              <p>
                Además de sus obras originales, realiza encargos personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="home-title obras-title">Obras Destacadas</h2>
        </div>

        <ItemListContainer
          mensajeError="No se pudieron cargar los productos"
          limite={3}
          ocultarTitulo={true}
        />
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Querés un retrato personalizado?</h2>
          <p>Enviá tu idea y convertí tu momento en una obra única.</p>

          <Link to="/contacto" className="mx-4 btn btn-light btn-lg">
            Encargar ahora
          </Link>
        </div>
      </section>

      <section className="home-section-encargo bg-retrato mt-5">
        <div className="container">
          <h2 className="home-title proceso-title">
            ¿Cómo funciona el encargo?
          </h2>

          <div className="row text-center mt-5 proceso-row">
            <div className="col-6 col-lg-3 proceso-col">
              <div className="proceso-item">
                <FaLightbulb className="proceso-icon" />
                <h4>Idea</h4>
                <p>Enviás tu idea o referencia.</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 proceso-col">
              <div className="proceso-item">
                <FaComments className="proceso-icon" />
                <h4>Definición</h4>
                <p>Definimos tamaño y detalles.</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 proceso-col">
              <div className="proceso-item">
                <FaPaintBrush className="proceso-icon" />
                <h4>Creación</h4>
                <p>Se realiza la obra con dedicación.</p>
              </div>
            </div>

            <div className="col-6 col-lg-3 proceso-col">
              <div className="proceso-item">
                <FaTruck className="proceso-icon" />
                <h4>Entrega</h4>
                <p>Coordinamos la entrega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
