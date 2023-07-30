import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { createContext } from "react";
import { auth } from '../auth/firebase';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/ToastNotify';
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()



const AuthContextProvider = ({ children }) => {
    let navigate = useNavigate();

    const createUser = async (email, password) => {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password)
            toastSuccessNotify("Registered successfully!")
            navigate("/home")
            console.log(userCredential);
        } catch (error) {
            console.log(error);
            toastErrorNotify(error.message)
        }
    }





    const values = { createUser };
    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider