import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { AuthContext } from "../context/AuthContextProvider";

const PrivateRouter = () => {
    const { currentUser } = useSelector(state => state.auth);
    
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRouter;