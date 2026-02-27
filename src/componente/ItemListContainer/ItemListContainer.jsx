import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { FaExclamationTriangle } from "react-icons/fa";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";

const Error = ({ mensajeError }) => {
  return ( 
    <div className="error-container">
      <FaExclamationTriangle className="error-icon" />
      <p className="error-code">Error 506</p>
      <p>{mensajeError}</p>
    </div>
  );
};
 
const ItemListContainer = ({
  mensajeError,
  limite,
  ocultarTitulo,
}) => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  let titulo = "Bienvenidos a Reina Artura";

  if (idCategoria === "tendencia") {
    titulo = "Cuadros en Tendencia";
  }

  if (idCategoria === "descuento") {
    titulo = "Cuadros en Descuento";
  }

  useEffect(() => {
    setLoading(true);
    setError(false);

    const misProductos = idCategoria
      ? query(collection(db, "cuadros"), where("idCat", "==", idCategoria))
      : collection(db, "cuadros");

    getDocs(misProductos)
      .then((res) => {
        const nuevoProductos = res.docs.map((doc) => {
          const data = doc.data();

          return { id: doc.id, ...data };
        });
        setProductos(limite ? nuevoProductos.slice(0, limite) : nuevoProductos);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategoria]);

  return (
    <div className={`itemlist-container ${idCategoria || ""}`}>
      <div className="itemlist-card">
        {loading && <Loader texto="Cargando cuadros..." />}
        {!loading && error && <Error mensajeError={mensajeError} />}

        {!loading && !error && (
          <>
            {!ocultarTitulo && <h2>{titulo}</h2>}
            <ItemList productos={productos} />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
