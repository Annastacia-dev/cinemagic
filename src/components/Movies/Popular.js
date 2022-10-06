import React from 'react'
import MovieCard from './MovieCard'


const Popular = ({ movieData }) => {

    return (
        <>
        <div >
            <div className='movie-container' >
                {movieData.map(movie => (
                    <> 
                      <MovieCard key={movie.id} {...movie} />       
                    </>
                    
                ))}
                </div>
        </div>
        </>
    )
}

export default Popular