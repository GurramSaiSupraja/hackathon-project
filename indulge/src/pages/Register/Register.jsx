import React from 'react'
import './Register.css'
import Header from '../Header/Header.jsx'
export default function Register() {
  return (
    <>
    <Header/>
    <div className="register-form">
        <div className='register-heading'>
             <h1>Register</h1>
        </div>
        <div className='form-register'>
            <form >
               <div className="form-group">
                   <label className="label-name" for="company-name">Company Name</label>
                   <input type="text" className="form-control" name="companyname" required placeholder='Enter Company name'/>
                </div>
                <div className="form-group">
                    <label className="label-name"for="email">Email</label>
                    <input type="email" className="form-control" name="username" required placeholder='Enter company email'/>
                </div>
                <div className="form-group">
                    <label className="label-name" for="password">Password</label>
                    <input type="password" className="form-control" name="password" required placeholder='password'/>
                </div>
                <div className="form-group">
                    <label className="label-name" for="confirmation">Confirm Password</label>
                    <input type="password" className="form-control" name="cnfm-password" required placeholder='comfirm password'/>
                </div>
                
                <button type="submit" className="btn btn-dark register-button">Register</button>
            </form>
          </div>
    </div>
    </>
  )
}

