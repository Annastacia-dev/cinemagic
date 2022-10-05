import React from 'react'
import { NavLink } from 'react-router-dom'


const MainNavBar = () => {
  return (
    <div className='main-navbar'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
               
            </ul>
        </nav>
    </div>
  )
}

export default MainNavBar