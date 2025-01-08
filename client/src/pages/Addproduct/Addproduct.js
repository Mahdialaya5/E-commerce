import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { addProduct } from '../../redux/Actions/actionsProduct';

function Addproduct() {
  const user = useSelector(state => state.userReducer.User)
  const [ Title, settitle] = useState("");
  const [Price, setprice] = useState("")
  const [image, setimage] = useState()
  const [Category, setCategory] = useState("pc")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick=(e)=>{
    e.preventDefault();

  const data = new FormData();
   data.append("name", Title)
   data.append("price", Price)
   data.append("file",image)
   data.append("seller",user._id)
   data.append("category",Category)
  dispatch(addProduct(data,navigate))
};


return (
    <div className='backH' >
    <div id='login' >
   <div className="background">
     <div className="shape" />
     <div className="shape" />
   </div>
   <form  id='fr'  style={{"height":'560px','paddingTop':'10px'}}  >
     <label htmlFor="username">Title</label>
     <input type="text"   placeholder="title" id="username"  onChange={(e)=>settitle(e.target.value)}  />
     <label htmlFor="password">Image</label>
     <input type="file" placeholder="file" id="password"   onChange={(e)=>setimage(e.target.files[0])} />
     <label htmlFor="password">Price</label>
     <input type="text" placeholder="price" id="password"   onChange={(e)=>setprice(e.target.value)}   />
     <label htmlFor="password">category</label>
      <select placeholder="price" id="password"     onChange={(e)=>setCategory(e.target.value)}   >
      <option  value={"pc"} >pc</option>
      <option  value={"smartphone"}  >Smartphone</option>
      <option  value={"tablette"}  >Tablette</option>
     </select>
   
     <button className='b' onClick={handleClick}  >save</button>
     <div className="social">
       <Link  to={"/products"} >return</Link>
     </div>
   </form>
 </div>
 </div>
  )
}

export default Addproduct