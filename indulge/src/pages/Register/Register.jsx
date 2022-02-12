import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className="register-form">
        <h1>Register</h1>
        <form >
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="username" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="form-group">
              <label for="confirmation">Confirm Password</label>
              <input type="password" className="form-control" name="cnfm-password" />
            </div>
            <div className="form-group">
              <label for="company-name">CompanyName</label>
              <input type="text" className="form-control" name="companyname" />
            </div>
            <button type="submit" className="btn btn-dark">Register</button>
          </form>
    </div>
  )
}

