import React, { useRef, useState } from 'react'

const UseRefComponent = () => {
  //? 1.kullanım (tercih edilmeyen yol)
  //* hafızada yeri değişmeyen bir obje oluşturur, her render da yeniden render olmaz, onu engellemek için.sürekli yeni referans numarası alarak hafızayı doldurmamak için
  //!setSayac kapalıyken arttır a basınca sayacRef artar ama render edilmediğinden console da sayacRef i yazdırmaz,setSayac ı açınca artmış hali yazar, UI (browser) da anlık görmeyeceksem kullanılabilir
  // const[sayac,setSayac]=useState(0)
  // const sayacRef=useRef(0)

  // console.log("sayac", sayac);
  // console.log("sayacRef", sayacRef.current);

  // const arttir=()=>{
  //   setSayac(sayac+1)
  // sayacRef.current++

  // }

  //? 2. kullanım DOM elemanlarına ulaşmamızı sağlar
  const inputRef = useRef();
  const divRef = useRef();
  const renkDegistir = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
    // console.log(inputRef.current.value);
  };

  return (
    <div ref={divRef}>
      <h2>UseRef Component</h2>
      {/* <h3>{sayacRef.current}</h3> */}
      <input ref={inputRef} type="text" placeholder="enter text..." />
      <button onClick={renkDegistir}>ChangeRenk</button>
      {/* <button onClick={arttir}>ARTTIR</button> */}
    </div>
  );
}

export default UseRefComponent