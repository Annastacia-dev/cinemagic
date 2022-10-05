import React, { useState, useEffect} from 'react'
import axios from 'axios'
import TVShowsCard from './TVShowsCard'

const TVShowsList = () => {

    const [tvShows, setTVShows] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=1')
        .then(resp => setTVShows(resp.data.results))
        .catch(error => console.log(error))
        
    }, [])

    console.log(tvShows)


  return (
    <div className='movie-container'>
        {tvShows.map(show => (

            <>
            <TVShowsCard key={show.id} {...show} />
            </>
            
        ))}
        </div>
  )
}

export default TVShowsList