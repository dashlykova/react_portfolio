import React from "react"
import { NavLink, Link } from 'react-router-dom'


const Header = () => {
    return (
        <div style={pageDiv}>
            <div style={nameDiv} className="text-white hover:text-grey no-underline">DARIA LYKOVA</div>
            <nav>
                <div style={homeDiv}>
                    <h1>
                        <Link className="text-white hover:text-grey no-underline" to='/'>HOME</Link>
                    </h1>
                </div>
                <ul className="list-reset flex">
                    <li><NavLink className="text-white hover:text-grey no-underline" activeStyle={{ fontWeight: "bold" }} to='/about'>About</NavLink></li>
                    <li><NavLink className="text-white hover:text-grey no-underline" activeStyle={{ fontWeight: "bold" }} to='/projects'>Projects</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

const pageDiv = {
    height: '100vh',
    width: '150%',
    textAlign: 'left',
    paddingTop: '55px',
    background: '#E5E5E5',
    fontSize: '50px',
}

const nameDiv = {
    position: 'absolute',
    width: '268px',
    height: '127px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '72px',
    lineHeight: '81.2%',
    /* or 58px */
    letterSpacing: '-0.14em',
    fontWeight: '50px',

}

const homeDiv = {
    position: 'absolute',
    width: '111px',
    height: '39px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '81.2%',
    /* or 58px */
    letterSpacing: '-0.14em',
   

}

export default Header