import React from 'react'
import Header from './components/Header'
import { useState } from 'react'

const ReactMemo = () => {
  const [sayac,setSayac]=useState(0)
  const arttir=()=>{
    setSayac(sayac+1)
  }



  return (
    <div>
      <Header/>
      <p>COUNT: {sayac} </p>
      <button onClick={arttir} >INCREASE</button>
    </div>
  )
}

export default ReactMemo