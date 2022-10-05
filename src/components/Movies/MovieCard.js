import React from 'react'
import { Link } from 'react-router-dom'


const MovieCard = ({poster_path, title, id}) => {

    const posterUrl = (posterpath) => {
        return(`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`)
        }


  return (
    <li>
    <div className='movie-card'>
        <Link to={`/${id}`}><img src={posterUrl(poster_path)} alt={title} /></Link>
      </div>
    </li>
  )
}

export default MovieCard