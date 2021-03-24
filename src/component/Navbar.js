import React from 'react'
import ItemNavbar from './ItemNavbar'

const Navbar = () => {
    return <>
        <nav>
            <ul>
               <ItemNavbar tolink="/" name="Home" /> 
            </ul>
        </nav>
    </>
}

export default Navbar
