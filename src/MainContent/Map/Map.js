import React from "react";
import "./Map.css";
import { Container, Row, Col } from 'reactstrap';

export function Map(props) {
    return(
        <Container>
            <Row  className={"Map"}>
                <Col className={"p-2"} xs="12" sm="12" md="12" lg="12" xl="12">
                    <span className={"dataUpdate"}>Last Updated April 09, 2020</span>
                    <div className={"MapDiv"}>Map</div>
                </Col>
            </Row>
        </Container>
    )
}