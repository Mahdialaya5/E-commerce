import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div  id='backH' >
        <nav  id='nav' > 
            <Link to={"products"} ><button className='n' >Products</button></Link>
            <Link  to={"register"}  ><button className='n' >sign up</button></Link>
            <Link to={"/login"} ><button className='n' >login</button></Link>
        </nav>
        <div id='flxh' >
        <h1 id='hh'>Computer And Laptop</h1>
            <div id='dsH'></div>
      
        </div>
    </div>
  )
}

export default Home