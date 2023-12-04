import React from 'react'
import { useSelector } from 'react-redux'
import { naviagte } from '../../redux/const_user'
import { useNavigate } from 'react-router-dom'

function AdminRoute({children}) {
    const user = useSelector(state => state.userReducer.User)
    const checktoken=localStorage.getItem('token')
    const navigate=useNavigate()
  return (
    <div>{checktoken && user.role=='admin' ? children : navigate('/') }</div>
  )
}

export default AdminRoute