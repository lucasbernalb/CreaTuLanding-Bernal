import React from 'react'
import Alert from 'react-bootstrap/Alert';
import "./ItemListContainer.css"
import { FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-icon" />
      <p className="error-code">Error 506</p>
    </div>
  );
};

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="itemlist-container">
      <Alert variant="success" className="itemlist-alert">
       <p>{mensaje}</p>
      <Error />
      </Alert>

    </div>
  );
};

export default ItemListContainer;
