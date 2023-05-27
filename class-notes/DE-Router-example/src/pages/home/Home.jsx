import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Container,Col,Card,Row,Button} from 'react-bootstrap';



const Home = () => {
  const navigate=useNavigate()
  const [ülkeler, setUlkeler] = useState([]);

  // const url = ("https://restcountries.com/v3.1/all");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
  }, []);
 

  // ! 1- ) yukarıdaki url den (api den),  fetch ile DATA  çekilip bir diziye atılmalı (useEffect unutmayın) ve  dizide dönerek card lara bastırılmalı.
  //! 2-)sonra jsx alanındaki button a onclick yapıldığında tıklanan ülkenin name.common u alınarak navigate ile details sayfasına yol verilmeli, o yol App.js de, buradan gelen name ile Details sayfasına gitmeli

  return (
    <Container className="text-center mt-4 p-4 ">
      <Row className="g-3">
        {ülkeler.map(({ flags, name },index) => {
          return (
            <Col sm={12} md={6} lg={4} key={index}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={flags.png} />
                <Card.Body>
                  <Card.Title>{name.common}</Card.Title>
                  {/* <Card.Text>{text}</Card.Text> */}
                  <Button variant="danger"
                 onClick={()=>navigate(`/Details/${name.common}`)}
                  >DETAYLAR</Button>
                </Card.Body>
              </Card>
            </Col>
            
          );
        })}
      </Row>
    </Container>
  );
}

export default Home
