import React from 'react'
import { NavLink } from 'react-router-dom'

const MoviesNavBar = () => {
  return (
    <div className='movies-navbar'>
      <nav>
        <ul>
            <li>
                <NavLink to='/movies/popular'>Popular</NavLink>
                <NavLink to='/movies/toprated'>Top rated</NavLink>
                <NavLink to='/movies/upcoming'>Upcoming</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default MoviesNavBar