// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (istediğim bişeyi yap) demek için kullanılır

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {
// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);

import React, { useEffect, useState } from 'react';

const OrnekUseEffect = () => {
    const [sayac, setSayac] = useState(0)

    //?ilk bunu göster
    //!componentDidMount=component ilk render edildiginde calis
    // useEffect(()=>{
    //     console.log("ilk renderda calisacak sadece bu kod");

    //     setTimeout(()=>{
    //         alert("Veri getirildi")
    //     },3000)
    // },[])


    //?ikinci olarak bunu goster
    // //! sayac her degistiginde calissin =componentDidUpdate
    // useEffect(() => {
    //     console.log("sayac artiyor");
    //     setTimeout(() => {
    //         alert("Veri getirildi")
    //     }, 3000)
    // }, [sayac])


    //?son olarak bunu goster
    //!component öldügünde (baska sayfaya gidildiginde)
    useEffect(() => {
      const time= setInterval(()=>{
        console.log("INTERVAL CALISMAYA BASLADI");
      },1000)
    

      //!component ölünce = componentWillUnmount
      return () => {
        clearInterval(time)
        console.log("component öldü");
      }
    }, [sayac])
    



    return (
        <div>
            <h3>COUNT:{sayac} </h3>
            <button className='btn btn-warning' onClick={() => setSayac(sayac + 1)} >ARTTIR</button>
        </div>
    )
}

export default OrnekUseEffect