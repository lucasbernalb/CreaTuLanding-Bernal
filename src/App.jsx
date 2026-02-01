import React from 'react'
import NavBar from './componente/NavBar/NavBar'
import ItemListContainer from './componente/ItemListContainer/ItemListContainer'
import AsyncAwait from './componente/AsyncAwait'
import ItemDetailContainer from './componente/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"


const App = () => {
  return (

    <>

    <BrowserRouter>
        <NavBar/>
   
    <Routes>

    <Route path="/" element={<ItemListContainer mensajeError="No se pudieron cargar los productos"/>} />
    <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
    <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
    </Routes>
  
        
    </BrowserRouter>

    </>

  )
}

export default App