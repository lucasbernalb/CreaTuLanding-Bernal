import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
      <Link to="/">
              <h1 className='header-logo'>Reina Artura</h1>
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
                <li>
                  <Link> Contacto </Link>
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar