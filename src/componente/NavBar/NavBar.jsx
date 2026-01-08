import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"


const NavBar = () => {
  return (
    <header>

        <h1 className='header-logo'>Reina Artura</h1>

        <nav>
            <ul>
                <li>Cuadros</li>
                <li>Artesanias</li>
                <li>Biografia</li>
                <li>Contacto</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar