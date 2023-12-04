import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CompanyRoute({children}) {
    const user = useSelector(state => state.userReducer.User)
    const checktoken=localStorage.getItem('token')
    const navigate=useNavigate()
  return (
    <div>{checktoken && user.role=='company' ? children : navigate('/')}</div>
  )
}

export default CompanyRoute