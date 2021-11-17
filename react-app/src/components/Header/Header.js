import React from 'react'
import LOGO from '../public/LOGO.png'
import NavLink from 'react-router-dom/NavLink'


import './header.css'

const Header = () => {
    return (
        <div>
            <div className="mainContainer">
            <div>
                <NavLink to="/feed">
                <img src={LOGO} alt="logo" className="logo"/>
                </NavLink>
         </div>
         <div className="searchBar">
            <input type="text" placeholder="Search" className="search"/>
         </div>
         </div>
        </div>
    )
}

export default Header
