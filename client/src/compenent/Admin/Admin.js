import React, { useEffect } from 'react'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/action_user'

function Admin() {
  const Users=useSelector(state=>state.userReducer.users)
  const dispatch=useDispatch()
 console.log(Users);
  useEffect(() => {
    dispatch( getAllUsers())
  }, [])
  
  return (
    <div className='containerAdm'  >
     <h2  className='titlAdm' >Admin</h2>
   < p  className='userlist'  > userlist</p>
  <table    >
<tbody>
    <tr   className='tr' >
        <th>name</th>
        <th>category</th>
        <th>Email</th>
    </tr>

    {Users && Users.map((el)=><tr className='tr'  >
        <td>{el.name}</td>
        <td>{el.role}</td>
        <td>{el.email}</td>
    </tr>)}
</tbody>
  </table>


    </div>
  )
}

export default Admin