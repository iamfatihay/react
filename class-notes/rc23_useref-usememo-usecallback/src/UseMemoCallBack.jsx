import React, { useEffect, useMemo, useState } from 'react';
import axios from "axios";
import Users from './components/Users';

const UseMemoCallBack = () => {
  const[kisiler,setKisiler]=useState([])
  const[text,setText]=useState("")
  const[bitmisHali,setBitmis]=useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setKisiler(res.data))
  }, [])
  
  const filtreli = useMemo(()=>kisiler.filter((i)=>i.name.includes(bitmisHali)),[kisiler,bitmisHali]);


  return (
    <div>
      <input type="search" onChange={(e)=>setText(e.target.value)} />
      <button onClick={()=>setBitmis(text)} >SEARCH</button>
      {/* <Users kisiler={kisiler} /> */}
      <Users kisiler={filtreli} />
    </div>
  )
}

export default UseMemoCallBack