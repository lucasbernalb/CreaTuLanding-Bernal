import Hero from "../Hero/Hero";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />

      {/* BENEFICIOS */}
      <section className="home-section benefits-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <h5>🎨 Obras únicas</h5>
              <p>Cada cuadro es una pieza original.</p>
            </div>
            <div className="col-md-4">
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

      {/* SOBRE LA ARTISTA */}
      <section className="home-section artist-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="/img-artista.jpg"
                alt="La artista"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2>Sobre la artista</h2>
              <p>
                Reina Artura es una artista apasionada por el retrato y la
                representación artística de músicos, personas y momentos únicos.
              </p>
              <p>
                Además de sus obras originales, realiza encargos personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBRAS DESTACADAS */}
      <section className="home-section">
        <div className="container">
          <h2 className="home-title">Obras Destacadas</h2>
        </div>

        {/* NO lo metemos dentro del container para no romper su layout */}
        <ItemListContainer
          mensajeError="No se pudieron cargar los productos"
          limite={4}
          ocultarTitulo={true}
        />
      </section>
      
      {/* CTA ENCARGO */}
      <section className="cta-section">
        <div className="container">
          <h2>¿Querés un retrato personalizado?</h2>
          <p>Enviá tu idea y convertí tu momento en una obra única.</p>

          <Link to="/contacto" className="mx-4 btn btn-light btn-lg">
            Encargar ahora
          </Link>
        </div>
      </section>

    
                    {/* PROCESO DE ENCARGO */}
            <section className="home-section bg-retrato">
            <div className="container">
                <h2 className="home-title">¿Cómo funciona el encargo?</h2>

                <div className="row text-center mt-5">
                <div className="col-md-3">
                    <h4>1️⃣</h4>
                    <p>Enviás tu idea o referencia.</p>
                </div>

                <div className="col-md-3">
                    <h4>2️⃣</h4>
                    <p>Definimos tamaño y detalles.</p>
                </div>

                <div className="col-md-3">
                    <h4>3️⃣</h4>
                    <p>Se realiza la obra con dedicación.</p>
                </div>

                <div className="col-md-3">
                    <h4>4️⃣</h4>
                    <p>Coordinamos la entrega.</p>
                </div>
                </div>
            </div>
            </section>

    </>

    

  );
};

export default Home;
