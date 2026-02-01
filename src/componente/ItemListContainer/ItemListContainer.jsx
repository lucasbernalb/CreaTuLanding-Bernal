import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./ItemListContainer.css";
import { FaExclamationTriangle } from "react-icons/fa";
import { getProductos, getProductosCategoria } from "../../asyncmock";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';




const Error = ({ mensajeError }) => {
  return (
    <div className="error-container">
      <FaExclamationTriangle className="error-icon" />
      <p className="error-code">Error 506</p>
      <p>{mensajeError}</p>
    </div>
  );
};

const ItemListContainer = ({ mensajeError }) => {

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const {idCategoria} = useParams()

  let titulo = "Bienvenidos a Reina Artura"

if (idCategoria === "tendencia") {
  titulo = "Cuadros en Tendencia"
}

if (idCategoria === "descuento") {
  titulo = "Cuadros en Descuento"
}


useEffect(() => {
  setLoading(true);
  setError(false);

  const fetchProductos = idCategoria
    ? getProductosCategoria(idCategoria)
    : getProductos();

  fetchProductos
    .then(respuesta => {
      if (respuesta.length === 0) {
        setError(true);
      } else {
        setProductos(respuesta);
      }
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });

}, [idCategoria]);


  return (
    <div className="itemlist-container">
      <Alert variant="success" className="itemlist-alert">

       {loading && (
        <Spinner animation="border" variant="primary" />
        )}

        {!loading && error && (
          <Error mensajeError={mensajeError} />
        )}

        {!loading && !error && (
          <>

          <h2>{titulo}</h2>
      
          <ItemList productos={productos} />
          
          </>
        )}

      </Alert>
    </div>
  );
};

export default ItemListContainer
