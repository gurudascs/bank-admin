import React from 'react';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/main' Component={Main}></Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
