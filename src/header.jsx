import React from "react"
import { NavLink, Link } from 'react-router-dom'
import './css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const openMenu = () => {
  document.getElementById('nav').style.visibility = 'visible';
  document.getElementById('nav').style.opacity = 1;
  document.getElementById('menu_open').style.display = 'none';
  document.getElementById('menu_close').style.display = 'block';
}

const closeMenu = () => {

  document.getElementById('nav').style.visibility = 'hidden';
  document.getElementById('nav').style.opacity = 0;
  document.getElementById('menu_open').style.display = 'block';
  document.getElementById('menu_close').style.display = 'none';
}

const Header = () => {
    
    return (
        <>
        <nav id="nav" className="active">
            <ul>
                <li><NavLink  to='/'>HOME</NavLink></li>
                <li><NavLink  activeStyle={{ fontWeight: "bold" }} to='/about'>ABOUT</NavLink></li>
                <li><NavLink  activeStyle={{ fontWeight: "bold" }} to='/projects'>PROJECTS</NavLink></li>

            </ul>
        </nav>
        <div>
            <div onClick={openMenu} id="menu_open" className="menu_open">
                <FontAwesomeIcon icon="bars" />
            </div>
            <div onClick={closeMenu} id="menu_close" className="menu_close">
                <FontAwesomeIcon icon="times" />
            </div>
        </div>
        <div>

        </div>
        </>
    )
}


export default Header