import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/user_icon.png'
import email_icon from '../Assets/email_icon.png'
import password_icon from '../Assets/password_icon.png'
import { Link } from 'react-router-dom'
const Login = () => {

const [action,setAction] = useState("Sign Up");


  return (

    <div className='container'>
        
        <div className="inputs">
            
            <div className="input">
                <img src={email_icon}alt=""/>
                <input type="email"placeholder="Email"/>
            </div>
            
            <div className="input">
                <img src={password_icon}alt=""/>
                <input type="password"placeholder="Password"/>
            </div>
           
        </div>
        <div className='submit-container2'>
        {action==="Login"?<div></div>: <div className="forgot-password">Forgot Password? 
        <Link to="/reset"> Click Here! </Link></div>}
        </div>
       
        <div className="submit-container">

            <div className={action==="Login"?"submit gray":"submit"}>
            <Link to="/signup"> Sign Up </Link></div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
            
        </div>
    </div>
  )
}

export default Login