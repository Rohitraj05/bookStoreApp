import React from 'react'
import Home from './Home/Home.jsx'
// import Course from './Components/Course.jsx'
 import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import Course from './Components/Course.jsx';
import Courses from './Couses/Courses.jsx';
import Signup from './Components/Signup.jsx';
import Contact from './Components/Contact.jsx';
//import About from './Components/About.jsx';
import Abouts from './Abouts/Abouts.jsx';
 
 
 
//  import  './app.css';
 
 const App = () => {
   return (
      <>
  {/* <Home/> */}

  {/* <Course/> */}
 <div className='dark:bg-slate-900 dark:text-white'>

 <BrowserRouter>

<Routes>

  <Route path='/' element={<Home/> }/>
  <Route path='/course' element={<Courses/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/About_us' element={<Abouts/>}/>


</Routes>
</BrowserRouter>

 </div>
   
         </>
   )
 }
 
 export default App;
 