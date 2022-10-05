import React from 'react'

const TVShowsCard = ({ poster_path, name}) => {

    const posterUrl = (posterpath) => {
        return(`https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`)
        }

  return (
    <div className='movie-card'>
        <img src={posterUrl(poster_path)} alt={name} />
    </div>
  )
}

export default TVShowsCard