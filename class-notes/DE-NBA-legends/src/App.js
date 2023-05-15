import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Search from "./components/Search";

function App() {
  return (
    <div >
      <Header/>
      <Search/>
      <CardContainer/>
    </div>
  );
}

export default App;
