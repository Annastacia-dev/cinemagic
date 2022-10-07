import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/favicon.ico'

const MainNavBar = () => {
  return (
    <div className='main-navbar'>
        <nav>
            <ul>
                <li>
                 <div id='nav-logo'><NavLink id='logo' end to ='/home'> 
                 <img id='logo-img' alt='' src={logo}></img>
                    cinemagic </NavLink></div>
                    <NavLink end to="/">Movies</NavLink>
                </li>
               
            </ul>
        </nav>
    </div>
  )
}

export default MainNavBar