import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Edituser.css'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../redux/action_user'

function EditUser() {
  const dispatch= useDispatch()
  const naviagte=useNavigate()
  const [newname, setnewname] = useState("")
  const [Password, setPassword] = useState("")
  const [image, setimage] = useState()
  const user = useSelector(state => state.userReducer.User)
  console.log(user);
  useEffect(() => {
    
  setnewname(user.name)
   
  }, [user])
  
  const handleclick=()=>{
  if (newname||setPassword||image){
    const data = new FormData();
     data.append("name",newname)
    data.append("file",image)
    data.append("password",Password)
    dispatch(editUser(user._id,data,naviagte))}
    return alert("input is empty")
  }
  return (

       <div  className='EditUser'   >
            <p id='username' ></p>
     <div className='edituser'id='formedit' >
      <div className="form-floating ">
     <input    type="text" className="form-control inpt " id="floatingInput" placeholder={newname}  onChange={(e)=>setnewname(e.target.value)}   />
     <label  style={{color:"aqua"}}  for="floatingInput">NEW USER NAME</label>
     <br/>
   </div>
   <div className="form-floating ">
     <input    type="password" className="form-control inpt " id="floatingInput" placeholder="newpassword"  onChange={(e)=>setPassword(e.target.value)}   />
     <label  style={{color:"aqua"}}  for="floatingInput">NEW passowrd</label>
     <br/>
   </div>
   <div className="form-floating ">
  
        <br/>
   </div>
   <div className="form-floating">
     <input    type="file"     className="form-control inpt" id="floatingInput"    onChange={(e)=>setimage(e.target.files[0])} />
     <label style={{color:"aqua"}}   for="floatingInput">CHANGE PHOTO </label>
     <br/>
     <div id='save' >
     <button type="button"  className="btn btn-primary btnEdituser"  onClick={handleclick}  >save change</button>
     <Link to={"/profile"} > <button type="button" className="btn btn-success  btnEdituser"  >return</button></Link>
     </div>
   </div>
   </div>
    </div>
  )
}

export default EditUser