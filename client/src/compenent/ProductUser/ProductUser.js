import React from 'react'
import "./ProductUser.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions';

function ProductUser() {
  const user = useSelector(state => state.userReducer.User)
  const Products=useSelector(state=>state.productReducer.products)
  const productsbyuser=Products.filter((el)=>el.seller._id==user._id)
  const disptach=useDispatch()
  return (
    <div  className='ProductUser'  >
<h2>my products</h2>

    { productsbyuser.map((el)=><ul   key={el._id} >  <li className='flx_li'    > <p  className='productUser' >{el.name}</p>  <Link to={`/editproduct/${el._id}`}  ><i className="fa-regular fa-pen-to-square"></i></Link>    <button  onClick={()=>disptach(deleteProduct(el._id))}    className='btn-delete' >x</button> </li></ul>)}

    </div>
  )
}

export default ProductUser