import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  return (
    (localStorage.getItem("username")==="ipek" && localStorage.getItem("password")==="1234" )
     ? (<Outlet/>) : (<Navigate to="/" />)
  );
  // kullanici doğru şifre ve isim girdiyse Outlet komponenti sayesinde istenilen sayfaya git,
  // yanlışlık varsa Navigate ile bulunduğun yerde (Login) kal ya da başka path veriledebilir
}

export default PrivateRouter