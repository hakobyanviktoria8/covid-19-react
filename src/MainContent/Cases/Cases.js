import React, { useState, useEffect } from "react";
import "./Cases.css";
import { Container, Row, Col } from 'reactstrap';
// import axios from "axios";

export function Cases({data, active}) {
    return(
        <Container>
            <Row className={"Cases"}>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>
                        <p className={"m-0"}>Cases</p>
                        <h4 className={"CasesNumber numSize"}>{data.cases}</h4>
                        <small>Today <b>{data.todayCases}</b></small>
                    </div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>
                        <p className={"m-0"}>Recovered</p>
                        <h4 className={"RecoveredNumber"}>{data.recovered}</h4>
                        <small>Today <b>{data.todayRecovered}</b></small>
                    </div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>
                        <p className={"m-0"}>Active</p>
                        <h4 className={"ActiveNumber numSize"}>{data.active}</h4>
                        <small>Today <b>{active}</b></small>
                    </div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}>
                        <p className={"m-0"}>Deaths</p>
                        <h4 className={"DeathsNumber numSize"}>{data.deaths}</h4>
                        <small>Today <b>{data.todayDeaths}</b></small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}