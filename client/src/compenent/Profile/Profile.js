import React, { useEffect } from 'react'
import  "./Profil.css";
import { Link} from 'react-router-dom';
import {  useSelector } from 'react-redux';
import ProductUser from '../ProductUser/ProductUser';


function Profile() {
  const user = useSelector(state => state.userReducer.User)





  return (
    <div>
       <div  className='containerPfrl'>
     <div className='flxPrf'  >
   
      <h2  className='NamePrf'>{user.name}</h2>
      </div>

 {user.img? <img src={user.img} alt='profile' style={{width:"150px",borderRadius:"20%",position:'relative',bottom:"60px",left:"7px"}}  />:null}
      <h3  className='desc'>profil of {user.role}</h3>
      </div>
   {user.role=="company" ?<ProductUser/>:null}
 <Link  to={'/profileSettings'} > <button   className='btnSttg'  >profile Settings</button></Link>
    </div>
  )
}

export default Profile