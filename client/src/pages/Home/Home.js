import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import logo from './pct.png'

function Home() {
    const token=localStorage.getItem("token")

  return (
    <div  className='backH' >
        <nav  id='nav' > 
          {token ?  <Link to={"products"} ><button className='n' >Products</button></Link>:null}
         { !token ?  <Link  to={"register"}  ><button className='n' >Sign up</button></Link>:null}
          {!token ?  <Link to={"/login"} ><button className='n' >Login</button></Link>:null}
        </nav>
        <div id='flxh' >
        <h1 id='hh'>Computer And Laptop</h1>
            <img  className='logo_home' src={logo} alt='Photo_Home'  />
        </div>
    </div>
  )
}

export default Home