import { useState, useContext } from "react";
import { CarritoContexto } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const navigate = useNavigate();
  const { carrito, vaciarCarrito, total } = useContext(CarritoContexto);

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
        img: producto.item.img,
      })),
      total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "cuadros", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      }),
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            setMostrarModal(true);

            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setEmailConfirmacion("");

            vaciarCarrito();
          })
          .catch(() => {
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch(() => {
        setError("No se puede actualizar el stock");
      });
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Finalizar Compra</h2>

      <form className="checkout-form" onSubmit={manejadorFormulario}>
        <div className="checkout-grid">
          <div className="checkout-resumen">
            {carrito.map((producto) => (
              <div key={producto.item.id} className="checkout-item">
                <img
                  src={producto.item.img}
                  alt={producto.item.nombre}
                  className="checkout-img"
                />
                <div className="checkout-item-info">
                  <p className="item-name">
                    {producto.item.nombre} x {producto.cantidad}
                  </p>
                  <p className="item-price">${producto.item.precio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-datos">
            <div className="checkout-inputs">
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Apellido</label>
                <input
                  type="text"
                  value={apellido}
                  onChange={(e) => setApellido(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Teléfono</label>
                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Confirmar Email</label>
                <input
                  type="email"
                  value={emailConfirmacion}
                  onChange={(e) => setEmailConfirmacion(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {error && <p className="checkout-error">{error}</p>}

        <div className="checkout-footer">
          <h3 className="checkout-total-bottom">Total: ${total}</h3>
          <button className="btn-confirm" type="submit">
            Confirmar Compra
          </button>
        </div>
      </form>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¡ Gracias por tu compra ! 🎨</h2>
            <p>Tu número de orden es:</p>
            <h3>{ordenId}</h3>
            <button className="btn-modal" onClick={() => navigate("/")}>
              Ir al inicio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
