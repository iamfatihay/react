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

//?-------------------------------------------------------------------
//! Konsolda, güncellenen değişen count u görebiliriz ancak web sayfasında (biz görüntüle demeden) görüntülenmiyor..
//* Çünkü, REACT herhangi bir element i default olarak static sayar
//*DOM manipülasyonunu en aza indirmek için bunu yapar
//* Hangi elementin interactive olduğu konusunda React'e bilgi vermeliyiz.
//! REACT'i interactive elements hakkında bilgilendirmek için iki yöntem kullanıyoruz
//* 1. Statefull Classes. State-based inform (Class Components)
//* 2. Hooks (Functional Components)
//?--------------------------------------------------------------------

export default Events