import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <>
      <div className="contenedorProductos">
        {productos.map((item, index) => (
          <Item key={item.id} {...item} index={index} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
