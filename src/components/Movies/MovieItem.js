import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MovieItem = ({ movieData }) => {

    const params = useParams()
    const [likes, setLikes] = useState([])

    function handleLikes (){
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/siGq1PtrcqnZLW01zbcb/likes/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: params.movieId,
        })

      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
    }

    
    return (
      
        <div>
       
       {movieData.map(movie =>
       
       movie.id === parseInt(params.movieId) && (
        
        <>
        <div key={movie.id} className='movie-item'
        style={{
          'backgroundImage': `url(https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`,
          'backgroundPosition': 'topRight',
          'backgroundSize': '100%',
          'backgroundRepeat': 'no-repeat',
          }}>
        
            <div className='movie-item-poster'>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
                </div>
            <div className='movie-item-info'>
                <h2>{movie.title}</h2>
                <div className='movie-description'>
                <p id='overview'>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <span>
                  <button onClick={handleLikes}>Like</button>
                </span>
                <span>
                  <p>0 likes</p>
                </span>
                </div>
                

              </div>
          </div>
        </>
       )
        
        
        )}
    
    </div>
            
        
      )
}

export default MovieItem