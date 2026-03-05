import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContexto } from "../../context/CarritoContext";

export const ItemDetail = ({
  id,
  nombre,
  precio,
  img,
  stock,
  imagenes,
  desc,
}) => {
  const { agregarAlCarrito } = useContext(CarritoContexto);

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const galeria = imagenes && imagenes.length > 0 ? imagenes : [img];

  const [imagenSeleccionada, setImagenSeleccionada] = useState(galeria[0]);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div
      className="detailBackground"
      style={{ backgroundImage: `url(${imagenSeleccionada})` }}
    >
      <div className="detailOverlay">
        <div className="contenedorProductosDetail">
          <div className="cardProductoDetail">
            <div className="detailImg">
              <div className="frame fadeImage">
                <img
                  key={imagenSeleccionada}
                  src={imagenSeleccionada}
                  alt={nombre}
                />
              </div>

              {galeria.length > 1 && (
                <div className="miniGallery">
                  {galeria.map((imagen, index) => (
                    <img
                      key={index}
                      src={imagen}
                      alt={`thumb-${index}`}
                      onClick={() => setImagenSeleccionada(imagen)}
                      className={
                        imagenSeleccionada === imagen ? "activeThumb" : ""
                      }
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="detailInfo">
              <h2>{nombre}</h2>
              <h4>Precio: ${precio}</h4>
              <p className="detailInfoDescripcion">
                {desc} <b>{nombre}</b>
              </p>
              <p className="detailInfoStock">STOCK: {stock}</p>

              {agregarCantidad > 0 ? (
                <Link to="/cart" className="linkTerminarCompra">
                  Terminar compra
                </Link>
              ) : (
                <ItemCount
                  inicial={1}
                  stock={stock}
                  funcionAgregar={manejadorCantidad}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
