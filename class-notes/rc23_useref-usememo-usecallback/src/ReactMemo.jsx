import React from 'react'
import Header from './components/Header'
import { useState } from 'react'
import fullstack from "./assets/cw_logo.png";

const ReactMemo = () => {
  const [sayac,setSayac]=useState(0)
  const [resim,setResim]=useState()
  const arttir=()=>{
    setSayac(sayac+1)
  }



  return (
    <div>
      <Header resim={resim} />
      <p>COUNT: {sayac} </p>
      <button onClick={arttir} >INCREASE</button>
      <button onClick={()=>setResim(fullstack)} >FULLSTACK </button>
    </div>
  )
}

export default ReactMemo