import React from 'react'
import './Header.css'
import logo from '../ism-logo.png'

export default function Header() {
  return (
    <div>
        <div className='container-fluid header'>
            <div className='row'>
                <div className='col-sm-12 col-md-2' >
                    <img src={logo} alt="ISM-LOGO"></img>
                </div>
                <div className='col-sm-12 col-md-10'>
                    <div className='main-heading'>
                        <h1  >Indian Institute Of Technology (Indian School Of Mines) Dhanbad</h1>
                        <p className='heading-tag'>-826 004 Jarkhand India Since 1926</p>
                    </div>
    
                </div>
            </div>
        </div>

    </div>
  )
}

