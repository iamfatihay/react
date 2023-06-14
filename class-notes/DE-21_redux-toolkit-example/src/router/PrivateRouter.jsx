import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

//!yetkiSlice sayfasından kullanici dolu gelirse yönlendirilen sayfaya git 
    return useSelector((state)=>state.yetkiSlice.email)==="osman" ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
};

export default PrivateRouter;
