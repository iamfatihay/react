import React from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import OrnekUseEffect from "./components/OrnekUseEffect";
import Clock from "./components/Clock";

function App() {
  const[goster,setGoster]=useState(true)


  return (
    <div className="container text-center mt-4">
      {/* <LifeCycleMethods/> */}



      <button className="btn btn-danger" onClick={()=>setGoster(!goster)}>GOSTER</button>

      {/* {goster ? <OrnekUseEffect/> : ""} */}
            {/* goster true iken OrnekUseEffect componenti görünsün, false durumunda hiçbirşey yapma */}

      {/* {goster && <OrnekUseEffect/>} */}
      {/* && iki parametrede doğruyken kullanılır, || soldaki doğruysa yada
      sağdaki doğruysa, hangisi true ise onu al */}

      {goster && <Clock/>} 
    </div>
  );
}

export default App;
