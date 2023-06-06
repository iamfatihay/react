import React, { useRef, useState } from 'react'

const UseRefComponent = () => {
//? 1.kullanim
//* hafızada yeri değişmeyen bir obje oluşturur, her render da yeniden render olmaz,
//* onu engellemek için.sürekli yeni referans numarası alarak hafızayı doldurmamak için
//   const[sayac,setSayac]=useState(0);
//   const sayacRef=useRef(0)

// console.log("sayac", sayac);
// console.log("sayacRf", sayacRef);

// const arttir=()=>{
//   setSayac(sayac+1)
//   sayacRef.current++
// }
 //? 2.kullanim DOM elemanlsrina ulasmamizi saglar
  const inputRef=useRef()
  const divRef=useRef()
  const renkDegistir=()=>{
    divRef.current.style.backgroundColor=inputRef.current.value;
    // console.log(inputRef.current.value);
  }


  return (
    <div ref={divRef} >
      <h2>UseRef Component </h2>
      {/* <h3>{sayacRef.current}</h3> */}
      <input ref={inputRef} type="text" placeholder='enter text...' />
      <button onClick={renkDegistir} >ChangeRenk </button>
      {/* <button onClick={arttir} >Arttir</button> */}
    </div>
  )
}

export default UseRefComponent