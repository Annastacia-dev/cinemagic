import React from "react";
import { Routes, Route} from 'react-router-dom'
import MainNavBar from "./MainNavBar";
import Movies from "./Movies/Movies";
import TvShows from "./TVShows/TvShows";


function App() {
  return (
    <div className="App">

      <MainNavBar />

      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />

      </Routes>
      
    </div>
  );
}

export default App;
