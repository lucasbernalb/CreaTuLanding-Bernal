import { useContext } from "react";
import { CarritoContexto } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContexto);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito.</h2>
        <Link to="/" className="cart-empty-link">
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Tu Carrito</h2>

      <div className="cart-items">
        {carrito.map((producto) => (
          <CartItem key={producto.item.id} {...producto} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ${total}</h3>

        <div className="cart-buttons">
          <button className="btn-clear" onClick={() => vaciarCarrito()}>
            Vaciar Carrito
          </button>

          <Link to="/checkout" className="btn-checkout">
            Finalizar Compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
