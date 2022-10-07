import React,{ useState } from 'react'
import MovieCard from './MovieCard'

const Popular = ({ movieData }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = movieData.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

    

    return (
        <>
        <div>
            <div className='search'>
                <input 
                type="text" 
                placeholder='Search for a movie...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}/>
            </div>
           
            <div className='movie-container' >
                {filteredMovies.map(movie => (
                    <> 
                      <MovieCard key={movie.id} {...movie} />       
                    </>
                    
                ))}
                </div>
        </div>
        </>
    )
}

export default Popular