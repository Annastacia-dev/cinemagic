import React, { useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
        .then(resp => setMovies(resp.data.results))
        .catch(error => console.log(error))
        
    }, [])

    console.log(movies)


  return (
    <div className='movie-container'>
        {movies.map(movie => (

            <>
            <MovieCard key={movie.id} {...movie} />
            </>
            
        ))}
        </div>
  )
}

export default MovieList