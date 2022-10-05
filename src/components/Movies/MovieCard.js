import React from 'react'

const MovieCard = ({poster_path, title, vote_average}) => {

    const posterUrl = (posterpath) => {
        return(`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`)
        }


  return (
    <li>
    <div className='movie-card'>
        <img src={posterUrl(poster_path)} alt={title} />
      </div>
    </li>
  )
}

export default MovieCard