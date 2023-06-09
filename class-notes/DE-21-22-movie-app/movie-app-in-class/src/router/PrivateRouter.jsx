import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authContext from '../context/AuthContext';

const PrivateRouter = () => {
    const {currentUser} = useContext(authContext)

  return (
    currentUser ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter