import { useEffect, useState } from "react";

import axios from "axios";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
const Home = () => {
  const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  
  //!GET (Read)
 
  //!then zinciriyle de yazabilirsiniz
 

  //? Sadece Component mount oldugunda istek yapar
 

  
  //!POST (create) database e veri gönderme
 

 
  return (
    <>
    <AddBilgi/>
    <BilgiList/>
    </>
  );
};

export default Home;
