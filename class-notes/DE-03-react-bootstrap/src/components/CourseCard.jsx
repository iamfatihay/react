import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

//! react alaninda döngü olarak sadece map() desteklenir, condition lardan da sedece ternary desteklenir.

const CourseCard = ({ data }) => {

  // console.log(props);
  // console.log(props.data[0].name);
  console.log(data);
  console.log(data[0].name);

  //?Bu ilk return react in ekrana bastirilan ilk kismi
  return (
    <Container>
      <Row className='g-3 text-center'>
        {data.map(({img,text,name,id}) => {
          //? arrow (map) süslü kullanildiginda return kullanimi ister. 
          //? react da süslü koymayabilirsiniz, böylece return e de ihtiyac kalmaz. Bu örnekte degistirmedik.
          //! Database den cekilen veriler ekrana bastirilirken en dis div unique bir veri ister,
          //! bunu da key={id} eklinde yazariz. id olmak zorunda degil unique herhangi bir property olabilir, mesela img.
          return (
            <Col className=' d-flex justify-content-center' key={id} sm={12} md={6} lg={4}>
              <Card style={{width:"18rem"}} >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text> 
                  {text}
                  </Card.Text>
                  <Button variant='info'>Detaylar</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}

      </Row>

    </Container>
  )
}

export default CourseCard