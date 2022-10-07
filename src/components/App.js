import React from "react";
import { Routes, Route} from 'react-router-dom'
import LandingPage from "./LandingPage";
import MainNavBar from "./MainNavBar";
import Movies from "./Movies/Movies";
import Error from "./Error";




function App() {
  return (
    <div>

      <MainNavBar />

      <Routes>
        <Route exact='true' path='/home' element={<LandingPage/>}></Route>
        <Route exact='true' path="/*" element={<Movies />} />  
        <Route  path="*" element={<Error />} />  
      </Routes>
      
    </div>
  );
}

export default App;
