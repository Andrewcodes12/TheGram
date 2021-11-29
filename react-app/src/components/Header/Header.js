import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

import LogoutButton from '../auth/LogoutButton'

const Header = () => {

    return (
    <div className="navBar">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
    <div className="logo">
    <div>
    <NavLink to='/feed'>
      The Gram
    </NavLink>
    </div>
  </div>
  {/* <div className="navSearch">
  <i className="fas fa-search"></i>
    <input className="search" type="text" placeholder="Search"/>
  </div> */}
  <div className="rightNav">
      <NavLink to='/feed'>
  <i className="fas fa-home" id="home"></i>
    </NavLink>
    <NavLink to='/post/new/'>
    <i className="fas fa-upload" id="upload"></i>
    </NavLink>
      {/* <NavLink to='/profile'>
      <i className="far fa-user-circle" id="profile"></i>
        </NavLink> */}
        <NavLink to='/logout'>
      <LogoutButton />
        </NavLink>
  </div>
</div>
    )
}

export default Header
