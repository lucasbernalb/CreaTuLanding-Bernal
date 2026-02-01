import { useState } from "react";
import "./ItemCount.css";
import { FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";


const ItemCount = ({ stock, inicial, funcionAgregar }) => {

  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

return (
  <div className="itemCount">

    <div className="contador">
      <button onClick={decrementar} className="btnIcon">
        <FaMinus />
      </button>

      <span className="contadorNumero">{contador}</span>

      <button onClick={incrementar} className="btnIcon">
        <FaPlus />
      </button>
    </div>

    <button 
      className="btnAgregar"
      onClick={() => funcionAgregar(contador)}
    >
      <FaShoppingCart />
      Agregar al carrito
    </button>

  </div>
);
};

export default ItemCount;
