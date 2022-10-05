import React from 'react'
import { NavLink } from 'react-router-dom'


const MoviesNavBar = ({ setMovieType}) => {
  return (
    <div className='movies-navbar'>
      <nav>
        <ul>
            <li>
                <NavLink onClick={() => setMovieType("popular")} >Popular</NavLink>
                <NavLink onClick={() => setMovieType("top_rated")} >Top rated</NavLink>
                <NavLink onClick={() => setMovieType("upcoming")} >Upcoming</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default MoviesNavBar