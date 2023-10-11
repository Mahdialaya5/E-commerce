import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'


function SideBar() {
  return (
    <div className='SideBar-container' >
      <h2  className='TitSideBar' >E-commerce</h2>
      <h2  className='Srch' >search</h2>
      <input  className='InptSrch' />
      <Link to={'/addproduct'}  ><button  className='aprd' >Add product</button></Link> 
     <Link to={'/products'}  ><button  className='prd' >Products</button></Link> 
     <Link to={'/profile'}  ><button  className='profile' >profile</button></Link> 
     <Link to={'/login'}  ><button  className='log' >Login</button></Link> 
     <Link to={'/register'}  ><button  className='sig' >Register</button></Link> 
           <button  className='lgout' >logout</button>
    </div>
  )
}

export default SideBar