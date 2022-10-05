import React from 'react'
import TVShowsList from './TVShowsList'

const TvShows = () => {
  return (
    <div>
        {/* Genre Drop Down */}
        <div className="dropdown">
            <label htmlFor="name">Select a Genre:</label>
            <select name="genre">
                <option selected disabled hidden>None selected</option>
                <option value="selectall">Select All</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="animation">Animation</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>    
            </select>
            </div>

            <TVShowsList />
    </div>
  )
}

export default TvShows

