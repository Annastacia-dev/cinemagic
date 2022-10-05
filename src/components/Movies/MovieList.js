import React, { useState, useEffect} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [popularMovies, setPopularMovies] = useState([])

    // Popular
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
        .then(resp => setPopularMovies(resp.data.results.slice(0,6)))
        .catch(error => console.log(error))
        
    }, [])

    // Top Rated

    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
      .then(resp => setTopRatedMovies(resp.data.results.slice(0,6)))
      .catch(error => console.log(error))
      
  }, [])

  // Upcoming Movies

  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
    .then(resp => setUpcomingMovies(resp.data.results.slice(-6)))
    .catch(error => console.log(error))
    
}, [])

  return (
    <>
    {/* popular */}
    <div>
      <h3 className='category-title'>popular on cinemagic</h3>
        <div className='movie-container'>
            {popularMovies.map(movie => (

                <>
                <MovieCard key={movie.id} {...movie} />
                </>
                
            ))}
            </div>
    </div>

    {/* top rated */}
    <div>
      <h3 className='category-title'>top rated on cinemagic</h3>
        <div className='movie-container'>
            {topRatedMovies.map(movie => (

                <>
                <MovieCard key={movie.id} {...movie} />
                </>
                
            ))}
            </div>
    </div>

    {/* upcoming */}
    <div>
      <h3 className='category-title'>upcoming on cinemagic</h3>
        <div className='movie-container'>
            {upcomingMovies.map(movie => (

                <>
                <MovieCard key={movie.id} {...movie} />
                </>
                
            ))}
            </div>
    </div>
    </>
  )
}

export default MovieList