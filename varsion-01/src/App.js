import React from 'react';
import { Routes,  Route  } from 'react-router-dom';
import Home_sec from './Home_sec';
import About from './About';
import Footer from './Footer';
import Tutorial from './Tutorial';
import Contact from './Contact';
import Error from './Error';
   const App = () =>{

    return(
      <>
      <Routes>
      <Route path="/*" element={<Home_sec/>} /> 
      <Route path="/about" element={<About/>}/>
      <Route path="/tutorial" element={<Tutorial/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/error"   element={<Error/>}/>
      <Route path="/footer" element={<Footer/>}/>
  
      </Routes>

      </>
    )
   }

   export default App;