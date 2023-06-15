import axios from "axios";

import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const register = async (userInfo) =>{
        dispatch(fetchStart());
        try {
            const { data } = await axios.post(
              "http://15111.fullstack.clarusway.com/account/register/",userInfo
            );
        
            console.log(data)
            dispatch(registerSuccess(data))
            navigate("/stock")
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
            
        }
    }

    return register;
};

export default useAuthCall;
