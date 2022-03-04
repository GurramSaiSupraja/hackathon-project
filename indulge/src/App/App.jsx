import React from 'react';
import './App.css';
// import Header from '../pages/Header/Header.jsx';
import Home from '../pages/Home/Home.jsx';
import Register from '../pages/Register/Register.jsx';
import {BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Login from '../pages/Login/Login';
import CompanyDashboard from '../pages/CompanyDashboard/CompanyDashboard.jsx';
import CurrentSession from '../pages/CompanyDashboard/CurrentSession';
import Inf from '../pages/inf/Inf'
import Jnf from '../pages/jnf/Jnf'

function App() {
  return (
    <BrowserRouter>
        <div className="App"> 
          {/* <Header/> */}
          <Routes>
            <Route exact path="/" element={<Home/>}   />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/:companyId" element={<CompanyDashboard></CompanyDashboard>}></Route>
            <Route path="/:companyId/curr-session" element={<CurrentSession></CurrentSession>}></Route>
            <Route path="/:companyId/addinf" element={<Inf></Inf>}></Route>
            <Route path="/:companyId/addjnf" element={<Jnf></Jnf>}></Route>
          </Routes>
        
        </div> 
    </BrowserRouter>
   
  );
}

export default App;
