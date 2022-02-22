import React, { useEffect } from 'react'
import './Register.css'
import axios from 'axios';
import { Outlet, Link, useNavigate} from "react-router-dom";
import CreatableDropdown, { company } from '../Dropdown/CreatableDropdown.jsx';
import { company as companyName } from '../Dropdown/CreatableDropdown.jsx';
import Header from '../Header/Header.jsx';
import { ConnectedTvOutlined, WindowRounded } from '@mui/icons-material';
import { ThemeContext } from '@emotion/react';



export default function Register() {

  const [companyData, setData] = React.useState([]);

  React.useEffect(()=> {
    axios.get("http://localhost:5000/register").then(
      response => {console.log(response);
        const tempArray=[];
        response.data.forEach(company => {
          tempArray.push({
            label: company,
            value: company
          })
        })
        console.log(tempArray);
        setData(tempArray);
      }).catch((error)=>{
        console.log(error)
      });
  },[]);
   
 
  const [companyValue, setCompanyValue] = React.useState("");
  const [emailValue, setEmail] = React.useState("");
  const [passwordValue, setPassword] = React.useState("");
  const [cpasswordValue, setCPassword] = React.useState("");
  
  const navigate = useNavigate();

  function onSubmit(e){
      console.log(
        companyName.value, emailValue, passwordValue, cpasswordValue
      );
      const inValidRegex = /^[a-zA-Z0-9.]+@(gmail.com)$/; 
      const email = emailValue.trim();
      if(email.toLowerCase().match(inValidRegex)){
        console.log("Invalid email");
        setEmail("");
      }
      const companyname =  companyName.label;
      const companyDetails = {
          companyname: companyname,
          username: emailValue,
          password: passwordValue 
      };

      
      axios.post("http://localhost:5000/register", companyDetails).then(
        res => {console.log("Data: " + res.data)
          navigate("/login");
      }
      );

      e.preventDefault();

  }


  return (
    <>
    <Header/>
    <div className="register-form">
        <div className='register-heading'>
             <h1>Register</h1>
        </div>
        <div className='form-register'>
            <form onSubmit={(e) => onSubmit(e)} >
               <div className="form-group">
                   <label className="label-name" for="company-name">Company Name</label>
                   {/* <input type="text" className="form-control" name="companyname" required placeholder='Enter Company name'/> */}
                   <CreatableDropdown  required className="form-control" companies={companyData}/>
                </div>
                <div className="form-group">
                    <label className="label-name"for="email">Email</label>
                    <input type="email" className="form-control" name="username" required placeholder='Enter company email'  onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="label-name" for="password">Password</label>
                    <input type="password" className="form-control" name="password" required placeholder='password'  onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="label-name" for="confirmation">Confirm Password</label>
                    <input type="password" className="form-control" name="cnfm-password" required placeholder='comfirm password' onChange={e => setCPassword(e.target.value)}/>
                </div>
                
                <button  type="submit" className="btn btn-dark register-button">Register</button>
                <Link to="/" className="back-btn" >back</Link>
            </form>
          </div>
    </div>
    <Outlet />
    </>
  )
}

