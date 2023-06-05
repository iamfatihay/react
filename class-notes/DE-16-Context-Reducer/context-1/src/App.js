import React, { createContext, useState } from 'react'
import Home from './components/Home'
import data from "./data"

export const OgrenciContext=createContext()

const App = () => {

  const[ogrenci, setOgrenci]=useState(data)


  const changeRenk=(id,newRenk)=>{
    setOgrenci(
      ogrenci.map((a)=>a.id===id ? {...a,color:newRenk} : a)
    )
  }

  return (

  <OgrenciContext.Provider value={{ogrenci,changeRenk}}>
    <Home/>
  </OgrenciContext.Provider>
  )
}

export default App