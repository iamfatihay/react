import React, { useRef, useState } from 'react'

const UseRefComponent = () => {
  //? 1.kullanim
//   const[sayac,setSayac]=useState(0);
//   const sayacRef=useRef(0)

// console.log("sayac", sayac);
// console.log("sayacRf", sayacRef);

// const arttir=()=>{
//   setSayac(sayac+1)
//   sayacRef.current++
// }

  return (
    <div>
      <h2>UseRef Component </h2>
      {/* <h3>{sayacRef.current}</h3> */}
      <input type="text" placeholder='enter text...' />
      <button>ChangeRenk </button>
      {/* <button onClick={arttir} >Arttir</button> */}
    </div>
  )
}

export default UseRefComponent