import React, { useState, useEffect, useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { CarritoContexto } from "../../context/CarritoContext";

const Item = ({ id, nombre, precio, img, stock, index }) => {
  const { agregarAlCarrito } = useContext(CarritoContexto);


  const [visible, setVisible] = useState(false);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, index * 120);

    return () => clearTimeout(timer);
  }, [index]);

  const handleAgregar = () => {
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, 1);

    setAgregado(true);

    setTimeout(() => {
      setAgregado(false);
    }, 1500);
  };

  return (
    <div className={`cardProducto ${visible ? "show" : ""}`}>
      <Link to={`/item/${id}`} className="card-img-container">
        <img src={img} alt={nombre} />
        <div className="img-overlay"></div>
      </Link>

      <div className="card-content">
        <h3>{nombre}</h3>
        <h4 className="card-precio">${precio}</h4>

        <p className={`card-stock ${stock <= 3 ? "low-stock" : ""}`}>
          Stock disponible: {stock}
        </p>
      </div>

    
      <div className="card-footer">
        <Link to={`/item/${id}`} className="btn-detalles">
          Detalles
        </Link>

        <button
          className={`buttonAgregarCarrito ${agregado ? "agregado" : ""}`}
          onClick={handleAgregar}
          disabled={agregado}
        >
          {agregado ? "✔ Agregado" : " Agregar"}
        </button>
      </div>
    </div>
  );
};

export default Item;
