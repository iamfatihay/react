import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import mail from "./assets.js/email.svg";
import konum from "./assets.js/location.svg";
import tel from "./assets.js/phone.svg";
import "./App.css";

function App() {
  //! Build Random User App fetching data from https://randomuser.me/api/ using axios.
  const [info, setInfo] = useState([])
  const url = "https://randomuser.me/api/";
  console.log(info);
  
  //! date kisminin sadece ilk 10 karakterini aldim
  
  let registeredDate = ''; // Varsayılan değer

  if (info.length > 0 ) {
    registeredDate = info[0].registered?.date?.substring(0, 10);
  }


  const getInfo = async () => {
    const veri = await axios.get(url)
    setInfo(veri.data.results)
    console.log(veri.data.results);
    
  }
  useEffect(() => {
    getInfo()
    
  }, [])

  const random = () =>{
    getInfo()
  }



  return (
    <div className="ilk">
      {info.map((a) => {
        return (
          <div className="container" key={a.id.value}>
            <div className="resimli">
              <div>
                <img className="resim" src={a.picture.large} alt="" />
              </div>

              <h2>{a.name.title} {a.name.first} {a.name.last}</h2>
            </div>
            <div className="mail">
              <img className="icon" src={mail} alt="" />
              <p>{a.email} </p>
            </div>
            <div className="tel">
              <img className="icon" src={tel} alt="" />
              <p>{a.cell} </p>
            </div>
            <div className="konum">
              <img className="icon" src={konum} alt="" />
              <p>{a.location.city} - {a.location.country} </p>
            </div>
            <div className="alt">
              <span>Age: {a.dob.age}</span>
              <p>Register Date: {registeredDate} </p>
            </div>
          </div>

        )

      })}
      <button className="btn" onClick={random} >
        Random User
      </button>



    </div>
  );
}

export default App;
