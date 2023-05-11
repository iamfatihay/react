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
      <Row>
        {data.map(({img,text,name}) => {
          //? arrow (map) süslü kullanildiginda return kullanimi ister. 
          //? react da süslü koymayabilirsiniz, böylece return e de ihtiyac kalmaz. Bu örnekte degistirmedik.
          return (
            <Col>
              <Card>
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