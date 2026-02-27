import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/config";
import emailjs from "@emailjs/browser";
import "./Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    tipo: "",
    tamaño: "",
    descripcion: "",
  });

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  // 🔥 Auto cerrar toast
  useEffect(() => {
    if (enviado || error) {
      const timer = setTimeout(() => {
        setEnviado(false);
        setError(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [enviado, error]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "encargos"), {
        ...formData,
        fecha: serverTimestamp(),
      });

      await emailjs.send(
        "service_oto07hv",
        "template_8d9le0i",
        formData,
        "9mAAAoWLcrqw0rIa-"
      );

      setEnviado(true);
      setFormData({
        nombre: "",
        email: "",
        celular: "",
        tipo: "",
        tamaño: "",
        descripcion: "",
      });
    } catch (error) {
      console.error("Error al enviar:", error);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Columna Izquierda */}
          <div className="col-md-5 mb-5 mb-md-0 text-light">
            <h2 className="contact-title mb-3">
              Encargá tu obra personalizada
            </h2>

            <p className="contact-text">
              Cada cuadro es una pieza única creada con pasión y detalle.
              Retratos, músicos, paisajes o cualquier idea que quieras convertir
              en arte.
            </p>

            <div className="contact-divider my-4"></div>

            <ul className="list-unstyled">
              <li className="mb-2">🎨 Trabajo 100% artesanal</li>
              <li className="mb-2">📏 Tamaños personalizados</li>
              <li className="mb-2">🖌 Estilo realista o artístico</li>
              <li className="mb-2">📦 Envíos a coordinar</li>
            </ul>

            <div className="mt-4">
              <p className="fw-semibold mb-2">Seguinos en redes</p>
              <a href="#" className="contact-link me-3">
                Instagram
              </a>
              <a href="#" className="contact-link">
                Facebook
              </a>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="col-md-7">
            <div className="contact-card p-4 p-md-4 position-relative">

              <h2 className="text-center mb-4">
                Encargar un cuadro personalizado
              </h2>

              {/* 🔥 Toast flotante éxito */}
              {enviado && (
                <div className="toast-alert success-toast">
                  ¡Tu solicitud fue enviada! Nos comunicaremos contigo pronto.
                </div>
              )}

              {/* 🔥 Toast flotante error */}
              {error && (
                <div className="toast-alert error-toast">
                  Hubo un error al enviar. Intentá nuevamente.
                </div>
              )}

              <div className="container my-5">
                <form onSubmit={handleSubmit} className="col-md-6 mx-auto">

                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Número de celular</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="celular"
                      placeholder="Ej: 11 2345 6789"
                      value={formData.celular}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tipo de cuadro</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tipo"
                      placeholder="Retrato, músico, paisaje..."
                      value={formData.tipo}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Tamaño</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tamaño"
                      placeholder="Ej: 50x70"
                      value={formData.tamaño}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`btn w-100 contact-btn ${loading ? "loading" : ""}`}
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar solicitud"}
                  </button>

                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacto;