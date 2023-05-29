import React, { useEffect, useState, useMemo } from 'react'; 
import { useNavigate } from "react-router-dom"; 
import {Container,Col,Card,Row,Button} from 'react-bootstrap'; 
import { FaArrowCircleUp } from 'react-icons/fa';

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
    if (ulkeler.length === 0) {
      fetchData(); 
    } 
  }, [ulkeler]); 


   const handleDetailsClick = (name) => { 
    navigate( `/Details/${name}` ); 
  }; 

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

   const [searchTerm, setSearchTerm] = useState(""); 
  const handleSearchChange = (event) => { 
    setSearchTerm(event.target.value); 
  }; 


  const filteredUlkeler = useMemo(() => 
  ulkeler.filter(({ name }) => 
    name.common.toLowerCase().includes(searchTerm.toLowerCase()) 
  ), [ulkeler, searchTerm]
); 


   const paginatedUlkeler = filteredUlkeler.slice(0, 250); 


   return ( 
    <Container className="text-center mt-4 d-flex flex-column align-items-center" > 
      <input className='input-group-text  w-50' style={{marginTop:"6rem" }} type="text" placeholder="Search countries..." onChange={handleSearchChange} autoFocus /> 
      <Row className="g-3 mt-3" > 
        {paginatedUlkeler.map(({ flags, name }) => { 
          return ( 
            <Col className='' sm={12} md={6} lg={3} key={name.common}> 
              <Card style={{width:"15rem"}}> 
                <Card.Img variant="top" src={flags.png}  onClick={() => handleDetailsClick(name.common)} /> 
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
      <button className="scroll-to-top-btn" style={{position:"fixed", bottom:"60px",right:"20px",width:"40px",height:"40px" , zIndex:"333"}} onClick={handleScrollToTop}>
        <FaArrowCircleUp />
      </button> 
    </Container> 
  ); 
}; 
 export default Home;
