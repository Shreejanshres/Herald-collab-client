import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import Data from './routes/Data';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Register from './routes/Register';
import Forgotpw from './routes/Forgotpw';
import Dashboard from './routes/Dashboard';



const App=()=>{

  return(
    <div className='App'>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/data" element={<Data/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgotpw" element={<Forgotpw/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
       
    </div>
  );
}
export default App;
