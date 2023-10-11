import React, { useEffect } from 'react'
import  "./Profil.css";
import { Link} from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../../redux/action_user';

function Profile() {
  const dispatch= useDispatch()
  const user = useSelector(state => state.userReducer.User)


useEffect(() => {
  dispatch(getCurrent())
}, [])
console.log(window.location.pathname);
console.log(user);
  return (
    <div>
       <div  className='containerPfrl'>
     <div className='flxPrf'  >
   
      <h2  className='NamePrf'>{user.name}</h2>
      </div>

 {user.img? <img src={user.img} alt='profile' style={{width:"150px",borderRadius:"20%",position:'relative',bottom:"60px",left:"7px"}}  />:null}
      <p  className='desc'>{user.role}</p>
      </div>
 <Link  to={'/profileSettings'} > <button   className='btnSttg'  >profile Settings</button></Link>
    </div>
  )
}

export default Profile