import React from 'react';

//!react alaninda parametreli fonksinyon cagiracaksak fonksiyonun onune ()=> isaretini koymaliyiz, yoksa fonk. hemen calisiyor.


const Events = () => {
//! javascript alani
let baslik="MERHABA";
let count=0
const arttir=()=>{
    count+=1
    // console.log(count);
    document.querySelector("span").textContent=count
}
const butonBaslik=(a)=>{

    console.log(a);
    document.querySelector(".btn-info").textContent=a
}



  return (
//! react alani

    <div className='container text-center mt-4'>
        <h1>INFO: {baslik} </h1>
        <h2>COUNT: <span>{count} </span> </h2>
        <button className='btn btn-primary' onClick={arttir} >ARTTIR</button>
        <button className='btn btn-info' onClick={()=>butonBaslik(new Date().getFullYear())}>TEMIZLE </button>
        <button className='btn btn-danger' onClick={()=> alert("buton tiklandi")}>TIKLANDI</button>

    </div>
  )
}

export default Events