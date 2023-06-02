import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  return (
    (localStorage.getItem("username")==="ipek" && localStorage.getItem("password")==="1234" )
     ? (<Outlet/>) : (<Navigate to="/" />)
  )
}

export default PrivateRouter