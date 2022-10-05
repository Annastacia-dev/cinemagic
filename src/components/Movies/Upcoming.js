import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const Upcoming = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
      .then(resp => setUpcomingMovies(resp.data.results))
      .catch(error => console.log(error))
      
  }, [])

  return (
    <div>
      <h3 className='category-title'>upcoming on cinemagic</h3>
        <div className='movie-container' key={Math.floor(Math.random() * 10000)}>
            {upcomingMovies.map(movie => (

                <>
                <MovieCard key={movie.id} {...movie} />
                </>
                
            ))}
            </div>
    </div>
  )
}

export default Upcoming