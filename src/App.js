import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {LeftAside} from "./LeftAside/LeftAside";
import {RightAside} from "./RightAside/RightAside";
import {MainContent} from "./MainContent/MainContent";


function App() {
  return (
      <Container fluid>
          {/*header*/}
          <Row>
              <Col className={"border1 pl-3 p-2 text-danger"} xs="12" sm="12" md="7" lg="7" xl="7">
                  <h1>COVID-19 Dashboard by the CSSE</h1>
              </Col>
              <Col className={"border1 p-2"} xs="12" sm="12" md="5" lg="5" xl="5">
                  <select name="" id="" className={"headerOption"}>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                  </select>
              </Col>
          </Row>
          {/*body*/}
          <Row>
              <Col className={"border1 minHeight"} xs="12" sm="10" md="5" lg="4" xl="3">
                  <LeftAside/>
              </Col>
              <Col className={"border1 minHeight px-0"} xs="12" sm="10" md="7" lg="8" xl="6">
                  <MainContent/>
              </Col>
              <Col className={"border1 minHeight"} xs="12" sm="10" md="10" lg="10" xl="3">
                  <RightAside/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
