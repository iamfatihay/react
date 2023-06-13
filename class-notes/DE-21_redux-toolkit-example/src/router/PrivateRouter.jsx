import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

//!yetkiSlice sayfasından kullanici dolu gelirse yönlendirilen sayfaya git 
    return []==="osman" ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
};

export default PrivateRouter;
