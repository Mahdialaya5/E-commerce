import React, { useEffect } from 'react'
import  "./Profil.css";
import { Link} from 'react-router-dom';
import {  useSelector } from 'react-redux';
import ProductUser from '../ProductUser/ProductUser';
import img from "./blank-profile-picture-973460_640.webp"

function Profile() {
  const user = useSelector(state => state.userReducer.User)
  
  const Products=useSelector(state=>state.productReducer.products)
  
  const productsbyuser=Products.map((el)=>el.seller._id==user._id?el:null)




  return (
    <div>
       <div  className='containerPfrl'>
     <div className='flxPrf'  >
   
      <h2  className='NamePrf'>{user.name}</h2>
      </div>

 {user.img? <img src={user.img} alt='profile' style={{width:"150px",borderRadius:"20%",position:'relative',bottom:"60px",left:"7px"}}  />: <img  src={img} alt='profile' style={{width:"150px",borderRadius:"20%",position:'relative',bottom:"60px",left:"7px"}} />}
      <h3  className='desc'>profil of {user.role}</h3>
      </div>
   {user.role=="company" && productsbyuser[0]!=null ?  <ProductUser/>:null}
 <Link  to={'/profileSettings'} > <button   className='btnSttg'  >profile Settings</button></Link>
    </div>
  )
}

export default Profile