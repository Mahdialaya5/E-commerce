import React from 'react'
import { useSelector } from 'react-redux'
import "./alert.css"
function Alert() {
  const err = useSelector(state => state.userReducer.errors)

  return(
  <p >
    {err&&err.msg?<p id='err'  >{err.msg}</p>:
    err&& err.errors[0].msg ?   <p id='err'  >{err.errors[0].msg }</p>: 
   err&& err.errors[1].msg? <p id='err'    >{err.errors[1].msg }</p>: null  }
    </p>
  )
}

export default Alert