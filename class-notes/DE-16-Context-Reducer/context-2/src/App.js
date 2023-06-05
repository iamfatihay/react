import React from "react";
import GosterUsers from "./pages/GosterUsers";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const KullaniciContext=createContext();

const App = () => {

  const [kullanici,setKullanici]=useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users").then((res)=>res.json()).then((data)=>setKullanici(data));
  }, [])
  
  const degistirWidth=()=>{
    // diziye width ekle
  }

  return (
    <KullaniciContext.Provider value={{kullanici, degistirWidth}} >
      <GosterUsers />
    </KullaniciContext.Provider>
  );
};

export default App;
