import React from 'react'
import './Login.css'
import axios from 'axios';
import Dropdown from '../Dropdown/Dropdown.jsx';
import { company as companyName } from '../Dropdown/Dropdown.jsx';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Header from '../Header/Header.jsx';


var companyId;
export default function Login() {

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

  
  const [emailValue, setEmail] = React.useState("");
  const [passwordValue, setPassword] = React.useState("");
  const navigate = useNavigate();

  function validateLogin(e){
    const userDetails = {
        companyname: companyName ,
        username: emailValue,
        password:passwordValue
    }
    
    axios.post("http://localhost:5000/login", userDetails).then(
        res => {console.log("Data: " + JSON.stringify(res.data));
          const companyId = res.data;
          navigate("/" + companyId);
      }
      );

      
      e.preventDefault();

  }

  return (
    <div>
        <Header/>
        <div className='login-heading'>
             <h1 >Login</h1>
        </div> 
        <div className='login-form'>
            <form onSubmit={validateLogin}>
               <div className="form-group">
                   <label className="label-name" for="company-name">Company Name</label>
                   {/* <input type="text" className="form-control" name="companyname" required placeholder='Enter Company name'/> */}
                   <Dropdown  required className="form-control" companies={companyData} />
                </div>
                <div className="form-group">
                  <label className="label-name" for="email">Email</label>
                  <input type="email" className="form-control" name="username"  onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label className="label-name" for="password">Password</label>
                  <input type="password" className="form-control" name="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button  type="submit" className="btn btn-dark login-button">Login</button>
                <Link to="/" className="login-back-btn" >back</Link>
            </form>
        </div> 
        <Outlet/> 
    </div>
  )
}

export {companyId};

