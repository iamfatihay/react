import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';


const TeacherDetails = () => {
  //? id yi suslu icinde yazarak destructuring yaptik, suslu disinda yazarsak "id.id" olarak degere ulasabilirdik
  const {id}=useParams()
  // console.log(id);
  const[kisi,setKisi]=useState([])
  const navigate=useNavigate()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data))
      .catch((err) => console.log(err));
  }, [id]);
//  console.log(kisi);
//! useEffect de ikinci parametredeki array i bos birakinca bir defa render ediliyor,
//! ama icinde bir deger eklendiginde o deger her degistiginde tekrar render ediliyor.
//! navigate(-sayi) ile sayi kac ise o kadar sekme geri doner, yani (-1) bir onceki sayfaya doner

  return (
    <Container className="text-center mt-4">
      <div>
        <h3> </h3>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${id}.svg`}
          alt="#"
          width="250px"
        />
        <h4>{kisi.username}</h4>
        <h5>{kisi.name}</h5>
        <h5>{kisi.phone}</h5>
        <h5>{kisi.website}</h5>
        <h5>{kisi.email}</h5>
        <div>
          <button className="btn btn-primary" onClick={()=>navigate(-1)} >
            GO BACK
          </button>
          <button className="btn btn-warning" onClick={()=>navigate("/")} >
            GO HOME
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TeacherDetails