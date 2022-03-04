import React from 'react'
import './CompanyDashboard.css'
import HomeIcon from '@mui/icons-material/Home';
import CompanyTable from './CompanyTable.jsx';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { Outlet, Link } from "react-router-dom";
// import { useState } from 'react';



export default function CompanyDashboard() {
      return (
            <div className='company'>
                  <div className='row'>
                        
                        <div className='col-12 companymainbar'>
                              <nav class="head navbar navbar-expand-lg" >
                                    <div class=" container-fluid">

                                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                          </button>
                                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <div className='me-auto'>
                                                      <AccountCircleIcon className='icon' fontSize="large" />
                                                </div>
                                                <div className='nav-bar-items'>
                                                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                            <li class="nav-item">
                                                                  <a class="nav-link active" aria-current="page" href="#"><HomeIcon className='icon' /></a>
                                                            </li>
                                                            <li class="nav-item">
                                                                  <a class="nav-link" href="#"><ExitToAppIcon className='icon' /></a>
                                                            </li>

                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </nav>
                              <div className='mainbar'>
                                    <div className='row company-main'>
                                         <div className='col-sm-12 col-md-4 card-company'>
                                         <Link to="curr-session"> <div className='card-session '>
                                                    <h3 className='curr-session-head'>Current session:</h3>
                                                    <h3>2023-24</h3>
                                                            
                                              </div></Link>
                                          </div>
                                          <div className='col-sm-12 col-md-4 card-company'>
                                             <Link to="addinf"><div className=' card-courses'>
                                                      <h3>Add INF</h3>
                                                      <AddIcon className='ad-icon'/>
                                                </div></Link>
                                          </div>
                                          <div className='col-sm-12 col-md-4 card-company '>
                                              <Link to="addjnf"> <div className='card-job '>
                                                      <h3>Add JNF</h3>
                                                      <AddIcon className='ad-icon'/>
                                                </div></Link>
                                                
                                          </div>
                                          
                                    </div>
                                    
                                    <div className='currenttable'>
                                          <div className='table-head'><h4>submitted INFs&JNFs</h4></div>
                                          <div className='dashboardtable'>
                                                <CompanyTable />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        
                  </div>
                  
                  <Outlet/>
            </div>
      );
}




