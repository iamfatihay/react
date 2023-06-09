import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContex = createContext();

const AuthContextProvider = ({ children }) => {
  let navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    userObserver()
  }, [])
  console.log(currentUser);

  const createUser = async (email, password, displayName) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

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
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        toastSuccessNotify("Logged in successfuly");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const values = { createUser, signIn, logOut, signUpProvider, currentUser };
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};

export default AuthContextProvider;
