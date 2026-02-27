import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <Link to="/">
        <h1 className="header-logo">Reina Artura</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="categoria/tendencia"> Tendencias </Link>
          </li>
          <li>
            <Link to="categoria/descuento"> Descuentos </Link>
          </li>
          <li>
            <Link> Biografia </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
