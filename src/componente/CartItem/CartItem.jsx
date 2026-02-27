import { useContext } from "react";
import { CarritoContexto } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContexto);
  console.log(item)
  return (
    <div className="cart-item">
      <img className="cart-item-img" src={item.img} alt={item.nombre} />

      <div className="cart-item-info">
        <h4>{item.nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio unitario: ${item.precio}</p>
        <p>Subtotal: ${item.precio * cantidad}</p>
      </div>

      <button
        className="btn-delete"
        onClick={() => eliminarProducto(item.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;