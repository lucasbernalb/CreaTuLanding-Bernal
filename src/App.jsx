import React from "react";
import "./App.css";
import NavBar from "./componente/NavBar/NavBar";
import ItemListContainer from "./componente/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componente/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./componente/Cart/Cart";
import Checkout from "./componente/Checkout/Checkout";
import Footer from "./componente/Footer/Footer";
import Home from "./componente/Home/Home";
import Contacto from "./componente/Contacto/Contacto";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
