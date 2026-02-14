import React from "react";
import "./App.css";
import NavBar from "./componente/NavBar/NavBar";
import ItemListContainer from "./componente/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componente/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componente/Cart/Cart";
import Checkout from "./componente/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/"element={<ItemListContainer mensajeError="No se pudieron cargar los productos" />}/>
            <Route path="/categoria/:idCategoria"element={<ItemListContainer />}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
