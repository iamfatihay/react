//? React, JSX kullanır.
//?  JSX'te, HTML öğelerini doğrudan JS'de kullanabiliriz

//! Componentler birleştirilmiş bir HTML,CSS,JS kodu döndürebilir..
//!Ancak, tek bir kapsayıcı (div, section, article, <> etc. gibi) öğesi döndürmesi gerekir.
//* JSX'te Styling çeşitli şekillerde gerçekleştirilebilir.
//* 1-) Inline-Styling kullanılabilir.
//* 2-) Styling, local veya global bir değişken olarak tanımlanabilir..
//* 3-) Styling external stylesheet (harici stil sayfası) olarak tanımlanabilir

//! NOTES:
//*styling için, property-value(object) yapısı kullanılır.
//* property name için camelCase yazı şekli, class tanımlamaları için className ismi kullanılır
//*Material UI, Styled Component, Sass, Bootstrap etc. gibi 3. part kütüphaneler de stil için kullanılabilir.

// import React from 'react'  // bu satir silinebiir cunku app.js de cagirdik ve hepsine etki etti.
import resim from "../img/a.jpg"
//! External css
import "./Msg.css"

const Msg = () => {

  //! internal css
  const styleA={
    color:"green",
    fontFamily:"Tahoma",
    border:"1px solid red"
  }

  return (
    <div>
      <h2 style={styleA}>burasi MSG alani</h2>
      <p style={{color:"red",fontSize:"30px"}}>Hosgeldin REACT</p>

      <img className="msg-img" src="https://cdn.pixabay.com/photo/2023/04/28/14/35/leaf-7956829_640.jpg" alt=""/>
      <img className="msg-img" src={resim} alt=""/>

    </div>
  )
}

export default Msg