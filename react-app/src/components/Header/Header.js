import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {

    return (
        <div className="navigation">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
    <div className="logo">
<div>
    <NavLink to='/feed'>
      The Gram
    </NavLink>
    </div>
  </div>
  <div className="navigation-search-container">
  <i className="fas fa-search"></i>
    <input className="search-field" type="text" placeholder="Search"/>
    <div className="search-container">
      <div className="search-container-box">
        <div className="search-results">
        </div>
      </div>
    </div>
  </div>
  <div className="navigation-icons">
      <NavLink to='/feed'>
  <i className="fas fa-home" id="home"></i>
    </NavLink>
    <NavLink to='/post/new/'>
    <i className="fas fa-upload" id="upload"></i>
    </NavLink>

      <NavLink to='/profile'>
      <i className="far fa-user-circle" id="profile"></i>
        </NavLink>
        <NavLink to='logout'>
      <i className="fas fa-sign-out-alt" id="logout"></i>
        </NavLink>
  </div>
</div>
    )
}

export default Header
