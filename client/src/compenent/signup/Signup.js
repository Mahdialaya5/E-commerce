import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/action_user'
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const [newemail, setemail] = useState("")
    const [newname, setname] = useState("")
    const [newpassword, setpassword] = useState("")
    const [newrole, setrole] = useState("")
    const dispatch= useDispatch()
    const navigate=useNavigate()
const onSubmit=(e)=>{
        e.preventDefault();
    dispatch(addUser({email:newemail,name:newname,password:newpassword,role:newrole}, navigate))
      }
return (
   <div  id='backH' >
<form  id='frsig'  >
<h3>Login Here</h3> 
<label htmlFor="username">Email</label>
    <input type="Email" onChange={(e)=>setemail(e.target.value)}   placeholder="Email " id="username" />
    <label htmlFor="username">Username</label>
    <input type="text"  onChange={(e)=>setname(e.target.value)}  placeholder="username" id="username" />
    <label htmlFor="password">Password</label>
    <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" id="password" />
    <label >Who are you ?</label>
 <select  onChange={(e)=>setrole(e.target.value)} defaultValue={"user"} >
 <option>user</option>
 <option>company</option>
  </select>
  <button onClick={onSubmit} id='b'>register</button>
    <div className="social">
      <Link  to={"/login"} >Login</Link>
    </div>
</form>
   </div>
 )
}

export default Signup