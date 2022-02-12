import React from 'react';
import './App.css';
import Header from '../pages/Header/Header.jsx';
import Home from '../pages/Home/Home.jsx';
import Register from '../pages/Register/Register.jsx';
import {BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Login from '../pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <div className="App"> 
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}   />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login></Login>} />
          </Routes>
        </div> 
    </BrowserRouter>
   
  );
}

export default App;