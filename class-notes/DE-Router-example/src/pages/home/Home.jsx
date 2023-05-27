import React, { useEffect, useState } from 'react';





const Home = () => {
  const [ülkeler, setUlkeler] = useState([]);

  // const url = ("https://restcountries.com/v3.1/all");

 

  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
    <div>
      {ülkeler.map((a) => {
        return (
          <div>
            <button>DETAYLAR</button>
          </div>
        );
      })}
    </div>
  );
}

export default Home