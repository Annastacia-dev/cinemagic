import React from 'react'
import { useParams } from 'react-router-dom'

const MovieItem = ({ movieData }) => {

    const params = useParams()
  

    return (
        <div>
       
       {movieData.map(movie =>
       
       movie.id === parseInt(params.movieId) && (
        
        <>
        <div className='movie-item'>
            <div className='movie-item-poster'>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
                </div>
            <div className='movie-item-info'>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                
              </div>
          </div>
        </>
       )
        
        
        )}
    
    </div>
            
        
      )
}

export default MovieItem