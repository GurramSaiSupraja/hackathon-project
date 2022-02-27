import React, { useEffect } from 'react'
import './Register.css'
import axios from 'axios';
import { Outlet, Link, useNavigate} from "react-router-dom";
import CreatableDropdown, { company } from '../Dropdown/CreatableDropdown.jsx';
import { company as companyName } from '../Dropdown/CreatableDropdown.jsx';
import Header from '../Header/Header.jsx';
import { useForm } from "react-hook-form";
import { ConnectedTvOutlined, WindowRounded } from '@mui/icons-material';
import { ThemeContext } from '@emotion/react';



export default function Register() {
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

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
   
 
  
  
  const navigate = useNavigate();

  function onSubmit(data){
      console.log(data);  

      const companyname =  companyName.label;
      const companyDetails = {
          companyname: companyname,
          username: data.email,
          password: data.password 
      };

      console.log("Submitted details:" + companyDetails.companyname + " "+companyDetails.username);
      axios.post("http://localhost:5000/register", companyDetails).then(
        res => {console.log("Data: " + res.data)
          navigate("/login");
      }
      );

      // data.preventDefault();

  };


  return (
    <>
    <Header/>
    <div className="register-form">
        <div className='register-heading'>
             <h1>Register</h1>
        </div>
        <div className='form-register'>
            <form onSubmit={handleSubmit(onSubmit)} >
               <div className="form-group">
                   <label className="label-name" for="company-name">Company Name</label>
                   {/* <input type="text" className="form-control" name="companyname" required placeholder='Enter Company name'/> */}
                   <CreatableDropdown  required className="form-control" companies={companyData}/>
                </div>
                <div className="form-group">
                    <label className="label-name"for="email">Email</label>
                    <input type="email" className="form-control" name="username" required placeholder='Enter company email'
                        {...register("email", {
                          required: true,
                          maxLength: 320,
                          // pattern: /^([A-Za-z]+)([A-Za-z0-9]+)@([a-zA-z/.]+)$/i,
                        })} 
                    />
                    <div className='styleerrors'>
                            {errors?.email?.type === "required" && <p>*This field is required</p>}
                              {errors?.email?.type === "maxLength" && (
                                <p>*email cannot exceed 320 characters</p>
                              )}
                              {/* {errors?.email?.type === "pattern" && (
                                <p>*enter company mail only</p>
                              )} */}
                    </div>
                </div>
                <div className="form-group">
                    <label className="label-name" for="password">Password</label>
                    <input type="password" className="form-control" name="password" required placeholder='password'
                         {...register("password", {
                          required: true,
                          pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/i,
                         
                        })}  
                    />
                     <div className='styleerrors'>
                      
                      
                      {errors?.password?.type === "required" && <p>*This field is required</p>}
                      
                      {errors?.password?.type === "pattern" && (
                        <p>*password should contain atleast one uppercase,one lowercase,one symbol,one numerical and minimumlength 8</p>
                      )}
                </div>
                </div>
                <div className="form-group">
                    <label className="label-name" for="confirmation">Confirm Password</label>
                    <input type="password" className="form-control" name="cnfm-password" required placeholder='comfirm password'
                       {...register("cnfmpassword", {
                        required: true,
                       
                      })}  
                    />
                </div>
                <div className='styleerrors'>
                      
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

