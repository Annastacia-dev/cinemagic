import React from 'react'
import { NavLink } from 'react-router-dom'



const MoviesNavBar = ({ setMovieType}) => {


  return (
    <div className='movies-navbar'>
      <nav>
        <ul>
            <li>
                <NavLink onClick={() => setMovieType("popular")} >popular</NavLink>
                <NavLink onClick={() => setMovieType("top_rated")} >top rated</NavLink>
                <NavLink onClick={() => setMovieType("upcoming")} >latest</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default MoviesNavBar