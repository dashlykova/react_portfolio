import React from "react"
import { NavLink, Link } from 'react-router-dom'


const Header = () => {
    return (
        <div style={topDiv} >
           <div style={nameDiv} className="text-white hover:text-grey no-underline">Daria Lykova</div> 
            <nav>
                <h1>
                    <Link className="text-white hover:text-grey no-underline" to='/'>HOME</Link>
                </h1>
                <ul className="list-reset flex">
                    <li><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About</NavLink></li>
                    <li><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>Projects</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

const topDiv = {
    height: '100vh',
    width: '270px',
    textAlign: 'left',
    paddingTop: '55px',
    background: '#E5E5E5',
    fontSize: '50px',
    //backgroundImage: `url(${light})`
}

const nameDiv = {
position: 'absolute',
width: '268px',
height: '127px',
fontFamily: 'Monserrat',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '72px',
lineHeight: '81.2%',
/* or 58px */
letterSpacing: '-0.14em',


}

export default Header