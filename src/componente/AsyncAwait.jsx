import React, { useState } from 'react'
import Item from './Item/Item'
import "./ItemListContainer/ItemListContainer.css"
import "../index.css"

const misProductosAsyn = [
    {nombre:"Cuadro Serpiente", precio:2000},
    {nombre:"Cuadro Serpiente", precio:3500},
    {nombre:"Cuadro Serpiente", precio:5000},
    {nombre:"Cuadro Serpiente", precio:2250},

]

const getProductosAsyn = () => {

    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(misProductosAsyn)
        }, 2000)

    })

}

const AsyncAwait = () => {

    const [productos, setProductos] = useState ([])

    const pedirDatos = async () => {
        const inventario = await getProductosAsyn()
        setProductos(inventario)
    }

    pedirDatos()

  return (
      
      <>     

        <h2 className='titulo'>
            Mis productos Async:
        </h2>
        
    <div className='container'>
        
       
        {
            productos.map((item, index)=>{

                return(
                    <div className="itemlist-container" key={index}>
                         <Item key={item.id} {...item} />
                    </div>

                )

            })
        }
    </div>
                    </>
  )
}

export default AsyncAwait