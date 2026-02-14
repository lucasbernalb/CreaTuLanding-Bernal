import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CarritoContexto } from "../../context/CarritoContext"
import { useContext } from "react"


export const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  const[agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContexto)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados:" + cantidad)

    const item = {id, nombre, precio}
    agregarAlCarrito(item, cantidad)
  }


  return (
    <div key={id} className='contenedorProductosDetail' >
        <div className="cardProductoDetail">

    <div className="detailImg">
        <img src={img} alt={nombre} />
    </div>

    <div className="detailInfo">
        <h3>{nombre}</h3>
        <h4>Precio: {precio}</h4>
        <p>Lorem ipsum dolor sit amet consecteur dipisicing elit.</p>  
        <p>STOCK: {stock}</p>
        {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
       }
    </div>

      </div>
    </div>
  )
}
