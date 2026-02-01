import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {
  return (
    <div className='cardProducto' >

    <img src={img} alt={nombre} />
    <h3>{nombre}</h3>
    <h4>Precio: {precio} </h4>
    <Link to={`/item/${id}`}>
        <button>Ver detalles</button>
    </Link>

    </div>
  )
}

export default Item