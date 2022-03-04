import React, {useEffect} from 'react'
import './CompanyDashboard.css'
import HomeIcon from '@mui/icons-material/Home';
import CompanyTable from './CompanyTable';
import { useParams } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function CompanyDashboard() {

      let {companyId} = useParams();
      return (
            <div className='company'>
                  <div className='row'>
                        {/* <div className='col-2 companysidebar'>
                    <h3>IIT ISM Dhanbad</h3>
                </div> */}
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
                                                <div className='card-session'>
                                                      <h1>header</h1>
                                                </div>
                                          </div>
                                          <div className='col-sm-12 col-md-4 card-company'>
                                                <div className=' card-courses'>
                                                      <h1>header</h1>
                                                </div>
                                          </div>
                                          <div className='col-sm-12 col-md-4 card-company'>
                                                <div className='card-job'>
                                                      <h1>header</h1>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='currenttable'>
                                          <div className='table-head'><h4>Submitted Forms</h4></div>
                                          <div className='dashboardtable'>
                                                <CompanyTable companyId={companyId}/>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}




