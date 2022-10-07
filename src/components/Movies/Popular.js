import React from 'react'
import MovieCard from './MovieCard'
import { BiSearch } from 'react-icons/bi'


const Popular = ({ movieData }) => {

    return (
        <>
        <div >
            <div className='search'>
                <input type="text" placeholder='Search for a movie...'/>
                <button><BiSearch/></button>
            </div>
           
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