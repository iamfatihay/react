import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

//? süslü kullanmasaydik return e de gerek yoktu. Arrow function kendisi return yapabiliyor, eger tek satirsa kod.


const CardContainer = () => {
    console.log(data);
    return (
        <Container className="rounded-4 my-4 p-3 card-container">
            <Row className="g-3 justify-content-center">
                {data.map((player, index) => {
                    return (
                        <Col key={index} md={6} lg={4} xl={3} >
                            <PlayerCard {...player} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default CardContainer