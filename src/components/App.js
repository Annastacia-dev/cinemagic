import React from "react";
import { Routes, Route} from 'react-router-dom'
import LandingPage from "./LandingPage";
import MainNavBar from "./MainNavBar";
import Movies from "./Movies/Movies";



function App() {
  return (
    <div>

      <MainNavBar />

      <Routes>
        <Route exact='true' path='/home' element={<LandingPage/>}></Route>
        <Route exact='true' path="/*" element={<Movies />} />  
      </Routes>
      
    </div>
  );
}

export default App;
