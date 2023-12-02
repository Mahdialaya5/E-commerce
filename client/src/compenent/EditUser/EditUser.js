import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Edituser.css'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../redux/action_user'

function EditUser() {
 
  const dispatch= useDispatch()
  const naviagte=useNavigate()

  const [update, setupdate] = useState()
  const [currentpassword, setcurrentpassword] = useState('')
  const [newPassword, setnewpassword] = useState('')
  const [image, setimage] = useState()


  const user = useSelector(state => state.userReducer.User)
  const err = useSelector(state => state.userReducer.errors)

  console.log(user)

 const [error, seterror] = useState("")
  

useEffect(() => {
  setupdate(user)
}, [])
console.log(newPassword.length>=6);

  const handleclick=()=>{
   if (currentpassword && newPassword.length>=6)
   { const data = new FormData();
       data.append('email',update.email)
       data.append('name',update.name)
       data.append('password',currentpassword)
       data.append('newpassword',newPassword)
       data.append('file',image)
       console.log(data);
   dispatch(editUser(user._id,data,naviagte))
  }
   if (newPassword && currentpassword=="" ){
      seterror("current password require")
    }
    if (newPassword.length<=6 && currentpassword){
      console.log('ok');
      seterror("length password should be 6 caractares")
    }
   if (currentpassword && newPassword=="" ){
     seterror("new password is empty")
    }
   if( newPassword=="" && currentpassword==""  ){
  
       const data = new FormData();
               data.append('name',update.name)
               data.append('file',image)
               
        dispatch(editUser(user._id,data,naviagte)) 
      }
 }

  return (

       <div  className='EditUser'   >
          
     <div className='edituser'id='formedit' >
      <div className="form-floating ">
      <label  style={{color:"#ebe71c"}}  for="floatingInput">NEW USER NAME</label>
     <input    type="text" className="form-control inpt " id="floatingInput" placeholder='New name'  onChange={(e)=>setupdate({...update,name:e.target.value})}   />
    
     <br/>
   </div>
 
   <div className="form-floating">
   <label style={{color:"#ebe71c"}}   for="floatingInput">Change photo </label>
     <input    type="file"     className="form-control inpt" id="floatingInput"    onChange={(e)=>setimage(e.target.files[0])} />
  
     <br/>
     <div id='save' >
     <button type="button"  className="btn btn-primary btnEdituser"  onClick={handleclick}  >save change</button>
     <Link to={"/profile"} > <button type="button" className="btn btn-success  btnEdituser"  >return</button></Link>
     </div>
   </div>
   </div>
   <div className='edit_password'   >
   <div className="form-floating ">
   <label  style={{color:"#ebe71c"}}  for="floatingInput">Current passowrd</label>
     <input    type="password" className="form-control inpt " id="floatingInput" placeholder="current password"  onChange={(e)=>setcurrentpassword(e.target.value)}   />
    
     <br/>
   </div>
   <div className="form-floating ">
   <label  style={{color:"#ebe71c"}}  for="floatingInput">New passowrd</label>
     <input    type="password" className="form-control inpt " id="floatingInput" placeholder="new password"  onChange={(e)=>setnewpassword(e.target.value)}   />
  <br/>
   </div>
   <p   style={{color:"#ebe71c"}}   >{error ? error : err ? err.msg : null }</p>
   </div>
    </div>
  )
}

export default EditUser