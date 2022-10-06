import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineHeart} from 'react-icons/ai'

const MovieItem = ({ movieData }) => {

    const params = useParams()
    const [likes, setLikes] = useState([])
    const [user, setUser] = useState("")
    const [comment, setComment] = useState("")
    const [reviews, setReviews] = useState([])

// LIKES

    function handleLikes (){

      // 1. POST request to /api/movies/:id/likes
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/siGq1PtrcqnZLW01zbcb/likes/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: params.movieId,
        })

      })
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })

      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/siGq1PtrcqnZLW01zbcb/likes/')
    .then(response => response.json())
    .then(data => {
      data.map(like => 
        like.item_id === params.movieId ? setLikes(like.likes) : null
    )})
    }

    // 2. GET request to /api/movies/:id/likes

   useEffect(() => {

    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/siGq1PtrcqnZLW01zbcb/likes/')
    .then(response => response.json())
    .then(data => {
      data.map(like => 
        like.item_id === params.movieId ? setLikes(like.likes) : null
    )})

   },[likes])


  //  REVIEWS

  function handleReviews (e){

    e.preventDefault()

    // 1. POST request to /api/movies/:id/likes
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mDlOD03fnWx1CwgFHwgt/comments/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: params.movieId,
        username: user,
        comment: comment,
      })

    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    })

    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mDlOD03fnWx1CwgFHwgt/comments?item_id=${params.movieId}`)
    .then(response => response.json())
    .then(data => {
        setReviews(data)
     
    })
    setUser("")
    setComment("")
  }

   // 2. GET request to /api/movies/:id/likes

   useEffect(() => {

    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mDlOD03fnWx1CwgFHwgt/comments?item_id=${params.movieId}`)
    .then(response => response.json())
    .then(data => {
        setReviews(data)
     
    })

   
   },[])

   console.log(reviews)

    
    return (
      
        <div>
       
       {movieData.map(movie =>
       
       movie.id === parseInt(params.movieId) && (
        
        <>
        <div key={movie.id} className='movie-item'>
            <div className='movie-item-poster'>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
                </div>
            <div className='movie-item-info'>
                <h2>{movie.title}</h2>
                <div className='movie-description'>
                <p id='overview'>{movie.overview}</p>
                <div className='movie-extra-info'>
                  <p>Release Date: {movie.release_date}</p>
                  <p>Rating: {movie.vote_average}</p>
                </div>

                <div className='likes'>
                <button id='like-icon' onClick={handleLikes}><AiOutlineHeart/></button>
                  <p>{likes} likes</p>
                </div>
             
                  
                <div className='reviews' >
                  <div className='reviews-input'>
                  <input 
                    type='text' 
                    value={user} 
                    placeholder='name'
                    onChange={(e) => setUser(e.target.value)}
                    >
                  </input>
                  <br />

                  <input
                    id='review-input'
                    type='text' 
                    value={comment} 
                    placeholder='Add a review'
                    onChange={(e) => setComment(e.target.value)}  >   
                  </input>
                  <br />
                  <button
                  onClick={handleReviews}
                  >post</button>
                  </div>
                  <p id='reviews-category-title'>reviews</p>
                  <ul className='reviews-display'>
                    <li>
                      {reviews.length > 0 && reviews.map(review => (
                        <>
                        <div>
                        <p>Review by <b>@{review.username}</b></p>
                        <quote>"{review.comment}"</quote>
                        </div>
                        

                        
                        </>
                        
                      ))}
                    </li>
                  </ul>

                </div>
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