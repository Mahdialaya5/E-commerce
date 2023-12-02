import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


function Home() {
    const token=localStorage.getItem("token")

  return (
    <div  id='backH' >
        <nav  id='nav' > 
            <Link to={"products"} ><button className='n' >Products</button></Link>
         { !token ?  <Link  to={"register"}  ><button className='n' >sign up</button></Link>:null}
          {!token ?  <Link to={"/login"} ><button className='n' >login</button></Link>:null}
        </nav>
        <div id='flxh' >
        <h1 id='hh'>Computer And Laptop</h1>
            <div id='dsH'></div>
      
        </div>
    </div>
  )
}

export default Home