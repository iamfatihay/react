import React, { useState } from 'react'
import Header from './components/Header'
import fullstack from './assets/cw_logo.png'


const ReactMemo = () => {
const[sayac,setSayac]=useState(0)
const [resim,setResim]=useState()

const arttir=()=>{
  setSayac(sayac+1)
}


//! setSayac yüzünden sayac her değiştiğinde Header tekrar render olur, Header da bir değişiklik olmadığı sürece render olmaması için, Header ı memo ile sarmalladım . Fullstack butonuna tıklayıp Header a resim yollandığında Header da değişiklik farkettiği için tekrar render oldu
  return (
    <div>
<Header resim={resim}/>

<p>COUNT: {sayac}</p>

<button onClick={arttir}>INCREASE</button>
<button onClick={()=>setResim(fullstack)}> FULLSTACK</button>

    </div>
  )
}

export default ReactMemo