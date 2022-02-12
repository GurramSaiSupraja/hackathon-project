import React from 'react'
import './Home.css'
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="jumbotron heading-centered">
        <div className="container heading-container">
            <h1 className="display-4 welcome-heading">Welcome to XXXXXXX</h1>
            <p class="lead">Connect with ISM</p>
            <hr/>
            <Link to="/register" className="btn btn-lg btn-light home-btns" type="button" >Register</Link>
            <Link to="/login" className="btn btn-lg btn-primary home-btns" type="button">Login</Link>

        </div>
        <Outlet />
    </div>
  )
}
 

