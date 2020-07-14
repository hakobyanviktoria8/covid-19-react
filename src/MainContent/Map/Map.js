import React from "react";
import "./Map.css";
import { Container, Row, Col } from 'reactstrap';

export function Map(props) {
    return(
        <Container>
            <Row>
                <Col className={"p-1"} xs="12" sm="12" md="12" lg="12" xl="12">
                    <div className={"MapDiv"}>Map</div>
                </Col>
            </Row>
        </Container>
    )
}