import React from 'react'
import "./SideBar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/Actions/actionUser'
import { searchProduct } from '../../redux/Actions/actionsProduct'


function SideBar() {
  const dispatch=useDispatch()
  const naviagte=useNavigate()
  const token=localStorage.getItem("token")
  const user = useSelector(state => state.userReducer.User)

   const disptach=useDispatch()
  return (

    <div className='SideBar-container' >
      <h2  className='TitSideBar' >E-commerce</h2>
    {window.location.pathname==="/products" ?  <h2  className='Srch' >Search</h2>:null}
      {window.location.pathname==="/products" ?<input onChange={(e)=>disptach(searchProduct(e.target.value))}    className='InptSrch' />:null}
     {token &&  user.role==='company' ?  <Link to={'/addproduct'} ><button  className='aprd hv' >Add product</button></Link> :null }
     { token && user.role==='admin' && window.location.pathname!=="/admin" ? <Link to={'/admin'} ><button  className='aprd' >Userlist</button></Link>:null}
  {window.location.pathname!=="/products"  ? <Link to={'/products'}  ><button  className='prd  hv' >Products</button></Link> :null}
    {token && window.location.pathname!=="/profile" ?  <Link to={'/profile'}  ><button  className='profile  hv' >Profile</button></Link>:null }
    {!token ?  <Link to={'/login'}  ><button  className='log  hv' >Login</button></Link>:null }
    {!token ?  <Link to={'/register'}  ><button  className='sig  hv'  >Register</button></Link>:null }
   {token ? <button  onClick={() => dispatch(logout(),naviagte("/"))}  className='lgout  hv' >Logout</button>:null }
    </div>
  
  )
}

export default SideBar