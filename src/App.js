import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Nav';
import Signup from './Components/Sginup/signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
 
    </>
  );
}

export default App;
