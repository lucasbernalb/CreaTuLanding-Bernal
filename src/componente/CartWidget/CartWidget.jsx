import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CarritoContexto } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return <FaShoppingCart size={24} style={{ marginRight: "40px", width: "45px", color: "#7c3aed"}} />;
};

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContexto)

  return (
    <div>
      <Link to="/cart" >

      <CartIcon/>
      {
        cantidadTotal >= 0 && <strong> {cantidadTotal} </strong>
      }

      </Link>
    </div>
  );
};

export default CartWidget