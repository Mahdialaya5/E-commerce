import React from 'react'
import { Link } from 'react-router-dom'

function EditProduct() {
  return (
    <div  id='backH' >
    <div id='login' >
   <div className="background">
     <div className="shape" />
     <div className="shape" />
   </div>
   <form  id='fr'  >
     <label     htmlFor="username">title</label>
     <input type="text"   placeholder="title" id="username" />
     <label htmlFor="password">price</label>
     <input type="text" placeholder="price" id="password" />
     <button id='b'  >ok</button>
     <div className="social">
       <Link  to={"/"} >return</Link>
     </div>
   </form>
 </div>
 </div>
  )
}

export default EditProduct