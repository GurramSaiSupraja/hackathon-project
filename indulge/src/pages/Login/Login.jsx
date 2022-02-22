import React from 'react'
import './Login.css'
import { Outlet, Link } from "react-router-dom";
import Header from '../Header/Header.jsx';
export default function Login() {
  return (
    <div>
        <Header/>
        <div className='login-heading'>
             <h1 >Login</h1>
        </div> 
        <div className='login-form'>
            <form>
                <div className="form-group">
                  <label className="label-name" for="email">Email</label>
                  <input type="email" className="form-control" name="username" />
                </div>
                <div className="form-group">
                  <label className="label-name" for="password">Password</label>
                  <input type="password" className="form-control" name="password" />
                </div>
                <Link to="/companydashboard"><button  type="submit" className="btn btn-dark login-button">Login</button></Link>
            </form>
        </div> 
        <Outlet/> 
    </div>
  )
}
