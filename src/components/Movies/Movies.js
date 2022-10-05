import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MoviesNavBar from './MoviesNavBar'
import Popular from './Popular'
import TopRated from './TopRated'
import Upcoming from './Upcoming'


const Movies = () => {
  return (
    
   <>

    <MoviesNavBar />
            
      <Routes>
        <Route path='/popular' element={<Popular />}></Route>
        <Route path='/toprated' element={<TopRated />}></Route>
        <Route path='/upcoming' element={<Upcoming />}></Route>
      </Routes>
            
    </>
  )
}

export default Movies