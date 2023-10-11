import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/action_user'


function Login() {
 
  const [Email, setEmail] = useState("")
 const [Password, setPassword] = useState("")
 const dispatch= useDispatch()
 const navigate=useNavigate()

 const onSubmit=(e)=>{
    e.preventDefault();

    dispatch(loginUser({email:Email,password:Password}, navigate))
  }
 
 return (
   <div  id='backH' >
   <div id='login' >
  <div className="background">
    <div className="shape" />
    <div className="shape" />
  </div>
  <form  id='fr' onSubmit={onSubmit} >
 
    <label htmlFor="username">email</label>
    <input type="text"  onChange={(e)=>setEmail(e.target.value)}   placeholder="Username" id="username" />
    <label htmlFor="password">Password</label>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}   placeholder="Password" id="password" />
    <button id='b' onClick={onSubmit} >Log In</button>
    <div className="social">
      <Link  to={"/register"} >Sign up</Link>
    </div>
  </form>
</div>
</div>
  )
}

export default Login