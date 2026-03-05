import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/config";
import emailjs from "@emailjs/browser";
import "./Contacto.css";
import {
  FaPaintBrush,
  FaRulerCombined,
  FaPalette,
  FaBoxOpen,
} from "react-icons/fa";

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
        "9mAAAoWLcrqw0rIa-",
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
  console.error("Error completo:", error);
  console.log("Mensaje:", error.message);
  setError(true);
}

    setLoading(false);
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">
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
            <ul className="benefits-list">
              <li>
                <FaPaintBrush className="icon" />
                <span>Trabajo 100% artesanal</span>
              </li>

              <li>
                <FaRulerCombined className="icon" />
                <span>Tamaños personalizados</span>
              </li>

              <li>
                <FaPalette className="icon" />
                <span>Estilo realista o artístico</span>
              </li>

              <li>
                <FaBoxOpen className="icon" />
                <span>Envíos a coordinar</span>
              </li>
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

          <div className="col-md-7">
            <div className="contact-card p-4 p-md-4 position-relative">
              {enviado && (
                <div className="toast-alert success-toast">
                  ¡Tu solicitud fue enviada! Nos comunicaremos contigo pronto.
                </div>
              )}

              {error && (
                <div className="toast-alert error-toast">
                  Hubo un error al enviar. Intentá nuevamente.
                </div>
              )}

              <div className>
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
                      placeholder="Ej: +598 934 563 45"
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

