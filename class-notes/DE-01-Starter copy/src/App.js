import React, { useState } from "react";
import "./App.css";

function App() {
const [count,setCount]=useState(0)

const inc=()=>{
  setCount(count+1)
}
const dec=()=>{
  setCount(count-1)
}
const res=()=>{
  setCount(0)
}

  return (
    <div className="container">
      <h1>Counter: {count} </h1>
      <button className="btn1 btn" onClick={inc}>Increment</button>
      <button className="btn2 btn" onClick={res}>reset</button>
      <button className="btn3 btn" onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
