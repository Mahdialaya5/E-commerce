import React from 'react'
import "./ProductUser.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function ProductUser() {
  const user = useSelector(state => state.userReducer.User)
  console.log(user._id);
  const Products=useSelector(state=>state.productReducer.products)
  
  const productsbyuser=Products.map((el)=>el.seller._id==user._id?el:null)
  ;
  return (
    <div  className='ProductUser'  >
<h2>my products</h2>

    { productsbyuser.map((el)=><ul>  <li className='flx_li'    > <p  className='productUser' >{el.name}</p>  <Link to={`/editproduct${productsbyuser._id}`}  ><i className="fa-regular fa-pen-to-square"></i></Link>    <button  className='btn-delete' >x</button> </li></ul>)}

    </div>
  )
}

export default ProductUser