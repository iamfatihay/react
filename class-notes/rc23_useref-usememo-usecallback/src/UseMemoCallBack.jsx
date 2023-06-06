import React, { useEffect, useState } from 'react';
import axios from "axios";
import Users from './components/Users';

const UseMemoCallBack = () => {
  const[kisiler,setKisiler]=useState([])
  const[text,setText]=useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setKisiler(res.data))
  }, [])
  



  return (
    <div>
      <input type="search" onChange={(e)=>setText(e.target.value)} />
      <button>SEARCH</button>
      <Users kisiler={kisiler} />
    </div>
  )
}

export default UseMemoCallBack