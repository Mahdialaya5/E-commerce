import React from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({children}) {
    
    const checktoken=localStorage.getItem('token')
    const navigate=useNavigate()
  return (
    <div>{checktoken ? children : navigate('/')}</div>
  )
}

export default PrivateRoute