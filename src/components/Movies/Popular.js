import React, { useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Popular = () => {

    const [popularMovies, setPopularMovies] = useState([])

    // Popular
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
        .then(resp => setPopularMovies(resp.data.results))
        .catch(error => console.log(error))
        
    }, [])

    return (
        <>
        {/* popular */}
        <div>
          <h3 className='category-title'>popular on cinemagic</h3>
            <div className='movie-container' key={Math.floor(Math.random() * 10000)}>
                {popularMovies.map(movie => (
    
                    <>
                    
                      {<MovieCard key={movie.id} {...movie} />} 
                    
                    
                    </>
                    
                ))}
                </div>
        </div>
        </>
    )
}

export default Popular