import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';


const TeacherDetails = () => {
  // id yi suslu icinde yazarak destructuring yaptik, suslu disinda yazarsak "id.id" olarak degere ulasabilirdik
  const {id}=useParams()
  // console.log(id);

  const[kisi,setKisi]=useState()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setKisi(data))
      .catch((err) => console.log(err));
  }, []);
//  console.log(kisi);

  return (
    <Container className="text-center mt-4">
      <div>
        <h3> </h3>
        <img
       
          alt=""
          width="250px"
        />
        <h4>{}</h4>
        <h5>{}</h5>
        <h5>{}</h5>
        <h5>{}</h5>
        <div>
          <button className="btn btn-primary" >
            GO BACK
          </button>
          <button className="btn btn-warning" >
            GO HOME
          </button>
        </div>
      </div>
    </Container>
  );
}

export default TeacherDetails