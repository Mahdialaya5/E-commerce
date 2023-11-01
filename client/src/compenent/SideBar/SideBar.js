import React from 'react'
import "./SideBar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/action_user'


function SideBar() {
  const dispatch=useDispatch()
  const naviagte=useNavigate()
  const token=localStorage.getItem("token")

  console.log(window.location.pathname);
  return (
    <div className='SideBar-container' >
      <h2  className='TitSideBar' >E-commerce</h2>
    {window.location.pathname=="/products" ?  <h2  className='Srch' >search</h2>:null}
      {window.location.pathname=="/products" ?<input  className='InptSrch' />:null}
     {token ? <Link to={'/addproduct'} ><button  className='aprd' >Add product</button></Link>:null }
  {window.location.pathname!="/products"  ? <Link to={'/products'}  ><button  className='prd' >Products</button></Link> :null}
    {token && window.location.pathname!="/profile" ?  <Link to={'/profile'}  ><button  className='profile' >profile</button></Link>:null }
    {!token ?  <Link to={'/login'}  ><button  className='log' >Login</button></Link>:null }
    {!token ?  <Link to={'/register'}  ><button  className='sig' >Register</button></Link>:null }
   {token ? <button  onClick={() => dispatch(logout(),naviagte("/"))}  className='lgout' >logout</button>:null }
    </div>
  )
}

export default SideBar