import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContex = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState()

  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toastSuccessNotify("Registered successfully")
      navigate("/")
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message)
      console.log(error);
    }
  };

  const signIn = async(email,password)=>{
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toastSuccessNotify("Logged in successfully")
      navigate("/")
    } catch (error) {
      console.log(error); 
      toastErrorNotify(error.message)     
    }
  }
  const logOut=()=>{
    signOut(auth)
    toastSuccessNotify("Logged out successfully")
  }
  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu!
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        setCurrentUser(false);
      }
    });
  };


  const values = { createUser, signIn, logOut };
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};

export default AuthContextProvider;
