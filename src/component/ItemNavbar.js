import React from 'react'
import { Link } from 'react-router-dom'

const ItemNavbar = ({tolink, name}) => {
    return <>
        <li>
            <Link to={tolink} >{name}</Link>
        </li>
    </>
}

export default ItemNavbar
