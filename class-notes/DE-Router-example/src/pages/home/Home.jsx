import React, { useEffect, useState } from 'react'; 
import { useNavigate } from "react-router-dom"; 
import {Container,Col,Card,Row,Button} from 'react-bootstrap'; 

 const Home = () => { 
  const navigate=useNavigate() 
  const [ulkeler, setUlkeler] = useState([]); 

   useEffect(() => { 
    const fetchData = async () => { 
      try { 
        const response = await fetch("https://restcountries.com/v3.1/all"); 
        const data = await response.json(); 
        setUlkeler(data); 
      } catch (error) { 
        console.log(error); 
      } 
    }; 
    fetchData(); 
  }, []); 


   const handleDetailsClick = (name) => { 
    navigate( `/Details/${name}` ); 
  }; 


   const [searchTerm, setSearchTerm] = useState(""); 
  const handleSearchChange = (event) => { 
    setSearchTerm(event.target.value); 
  }; 


   const filteredUlkeler = ulkeler.filter(({ name }) => 
    name.common.toLowerCase().includes(searchTerm.toLowerCase()) 
  ); 


   const paginatedUlkeler = filteredUlkeler.slice(0, 30); 


   return ( 
    <Container className="text-center mt-4 p-4 d-flex flex-column align-items-center"> 
      <input className='input-group-text  w-50 mb-4' type="text" placeholder="Search countries..." onChange={handleSearchChange} /> 
      <Row className="g-3"> 
        {paginatedUlkeler.map(({ flags, name }) => { 
          return ( 
            <Col sm={12} md={6} lg={4} key={name.common}> 
              <Card style={{ width: "15rem" }}> 
                <Card.Img variant="top" src={flags.png} /> 
                <Card.Body> 
                  <Card.Title>{name.common}</Card.Title> 
                  <Button variant="danger" onClick={() => handleDetailsClick(name.common)}> 
                    DETAYLAR 
                  </Button> 
                </Card.Body> 
              </Card> 
            </Col> 
          ); 
        })} 
      </Row> 
    </Container> 
  ); 
}; 
 export default Home;
