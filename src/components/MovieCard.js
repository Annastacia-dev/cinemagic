import React from 'react'

const MovieCard = ({poster_path, title}) => {

    const posterUrl = (posterpath) => {
        return(`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`)
        }


  return (
    <div>
        <img src={posterUrl(poster_path)} alt={title} />
        <div>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default MovieCard