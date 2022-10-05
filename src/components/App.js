import React from "react";
import { Routes, Route} from 'react-router-dom'
import MainNavBar from "./MainNavBar";
import Movies from "./Movies/Movies";



function App() {
  return (
    <div className="App">

      <MainNavBar />

      <Routes>
        <Route exact='true' path="/*" element={<Movies />} />  
      </Routes>
      
    </div>
  );
}

export default App;
