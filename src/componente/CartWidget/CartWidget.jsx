import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CarritoContexto } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import "./CartWidget.css";

const CartIcon = () => {
  return <FaShoppingCart size={24} />;
};

const CartWidget = () => {
  const { cantidadTotal, animarCarrito } = useContext(CarritoContexto);

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <FaShoppingCart className={`cart-icon ${animarCarrito ? "bounce" : ""}`} />
        {cantidadTotal > 0 && (
          <span className="cart-badge">
            {cantidadTotal}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget