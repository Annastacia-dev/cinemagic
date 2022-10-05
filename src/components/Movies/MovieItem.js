import React from 'react'
import { useParams } from 'react-router-dom'

const MovieItem = ({popular, toprated, upcoming}) => {

    const params = useParams()

    return (
        <div key={popular.id}>
      
      {popular.map(pop => (
        pop.id === parseInt(params.movieId) &&

        <div className='menuitem'>
          MovieItem
        </div>

        
      ))}
    </div>
            
        
      )
}

export default MovieItem