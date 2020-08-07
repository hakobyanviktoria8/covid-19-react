import React, { useState, useEffect } from "react";
import "./Cases.css";
import { Container, Row, Col } from 'reactstrap';
import numeral from "numeral";

export function Cases({data, active}) {
    const [casesType,setCasesType] = useState("cases");

    return(
        <Container>
            <Row className={"Cases"}>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}
                         onClick={(e)=>setCasesType("cases")}
                    >
                        <p className={"m-0"}>Cases</p>
                        <h4 className={"CasesNumber numSize"}>+{numeral(data.cases).format("0.0a")}</h4>
                        <small>Today <b>{numeral(data.todayCases).format("0.0a")}</b></small>
                    </div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}
                         onClick={(e)=>setCasesType("recovered")}
                    >
                        <p className={"m-0"}>Recovered</p>
                        <h4 className={"RecoveredNumber"}>+{numeral(data.recovered).format("0.0a")}</h4>
                        <small>Today <b>{numeral(data.todayRecovered).format("0.0a")}</b></small>
                    </div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}
                         onClick={(e)=>setCasesType("active")}
                    >
                        <p className={"m-0"}>Active</p>
                        <h4 className={"ActiveNumber numSize"}>+{numeral(data.active).format("0.0a")}</h4>
                        <small>Today <b>{numeral(active).format("0.0a")}</b></small>
                    </div>
                </Col>
                <Col className={"p-1"} xs="3" sm="3" md="3" lg="3" xl="3">
                    <div className={"CasesDiv"}
                         onClick={(e)=>setCasesType("deaths")}
                    >
                        <p className={"m-0"}>Deaths</p>
                        <h4 className={"DeathsNumber numSize"}>+{numeral(data.deaths).format("0.0a")}</h4>
                        <small>Today <b>{numeral(data.todayDeaths).format("0.0a")}</b></small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}