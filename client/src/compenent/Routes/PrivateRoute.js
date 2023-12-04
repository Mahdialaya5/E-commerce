import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    
    const checktoken=localStorage.getItem('token')

  return (
  <>  {checktoken?children:<Navigate to='/' /> }</>
  )
}

export default PrivateRoute