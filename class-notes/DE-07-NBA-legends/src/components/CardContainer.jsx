import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

//? süslü kullanmasaydik return e de gerek yoktu. Arrow function kendisi return yapabiliyor, eger tek satirsa kod.


const CardContainer = () => {
    const [search, setSearch] = useState("");

    // console.log(data);
    return (
        <>
            <Form.Control className="w-50 m-auto" placeholder="Search Player..." type="search" onChange={(e) => setSearch(e.target.value)} />
            <Container className="rounded-4 my-4 p-3 card-container">


                <Row className="g-3 justify-content-center">
                    {data.filter((player) => player.name.toLowerCase().includes(search.trim().toLowerCase())).map((player, index) => {
                        return (
                            <Col key={index} md={6} lg={4} xl={3} >
                                <PlayerCard {...player} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default CardContainer