import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

const TopRated = () => {


    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
      .then(resp => setTopRatedMovies(resp.data.results))
      .catch(error => console.log(error))
      
  }, [])

  return (
    <div>
      <h3 className='category-title'>top rated on cinemagic</h3>
        <div className='movie-container' key={Math.floor(Math.random() * 10000)}>
            {topRatedMovies.map(movie => (

                <>
                <MovieCard key={movie.id} {...movie} />
                </>
                
            ))}
            </div>
    </div>
  )
}

export default TopRated