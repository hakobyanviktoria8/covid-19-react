import React from "react";
import "./Cases.css";
import { Container, Row, Col } from 'reactstrap';

export function Cases(props) {
    return(
        <Container>
            <Row className={"Cases"}>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>1</div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>1</div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>1</div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>1</div>
                </Col>
            </Row>
        </Container>
    )
}