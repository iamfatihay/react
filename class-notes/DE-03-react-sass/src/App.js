import React from "react"
// import './scss/_button.scss'
// import './scss/_reset.scss'
// import './scss/_variable.scss'    //bu sekilde de import edilebilir
import "./App.scss"                  //biz bu sekilde tercih ettik
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import dataa from "./data";


function App() {
  return (
    <div >
      <Header/>
      <Card datA={dataa} />
    </div>
  );
}

export default App;
