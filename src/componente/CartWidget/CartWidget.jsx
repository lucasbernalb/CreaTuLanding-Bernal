import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  return <FaShoppingCart size={24} style={{ marginRight: "40px", width: "45px", color: "#7c3aed"}} />;
};

const CartWidget = () => {
  return (
    <div>
      <CartIcon/>
    </div>
  );
};

export default CartWidget