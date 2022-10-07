import React, { useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import MoviesNavBar from './MoviesNavBar'
import MovieItem from './MovieItem'
import Popular from './Popular'




const Movies = () => {

  const [movieType, setMovieType] = useState("popular");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.results)
      });
      
  }, [movieType]);

  return (
    
   <>

    <MoviesNavBar setMovieType={setMovieType}/>
            
      <Routes>
        <Route path='/*' element={<Popular movieData={movieData} />}></Route>
        <Route
            path="/:movieId"
            element={<MovieItem movieData={movieData} />}
          />
      </Routes>
            
    </>
  )
}

export default Movies