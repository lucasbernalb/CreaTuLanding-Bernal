import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { useState, useEffect } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

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
      <NavLink to="/">
        <h1 className="header-logo">Reina Artura</h1>
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/categoria/tendencia"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tendencias
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categoria/descuento"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Descuentos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/biografia"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Biografía
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
