import { useEffect, useState } from "react";

import axios from "axios";
import AddBilgi from "../components/AddBilgi";
import BilgiList from "../components/BilgiList";
const Home = () => {
 const [bilgiler, setBilgiler] = useState([]);

  const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  
  //!GET (Read)
 
  const getBilgiler=async()=>{
     const veri= await axios.get(url)
     setBilgiler(veri.data)
  }

 useEffect(()=>{getBilgiler()},[]) 

  //!then zinciriyle de yazabilirsiniz
  // useEffect(()=>{
  // axios.get(url).then((res) => setBilgiler(res.data))},[])
  
// console.log(bilgiler);
  //? Sadece Component mount oldugunda istek yapar
 

  
  //!POST (create) database e veri gönderme
 const postBilgi=async(yeniVeri)=>{

  await axios.post(url,yeniVeri)
  
  getBilgiler()
 }

// const deleteBilgi = async (id) => {
//   await axios.delete(url/id);

//   getBilgiler();
// };
 
  return (
    <>
    <AddBilgi postBilgi={postBilgi}/>
    <BilgiList  bilgiler={bilgiler} getBilgiler={getBilgiler}/>
    </>
  );
};

export default Home;
