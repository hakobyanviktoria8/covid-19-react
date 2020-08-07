import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {LeftAside} from "./LeftAside/LeftAside";
import {RightAside} from "./RightAside/RightAside";
import {MainContent} from "./MainContent/MainContent";
import { FormControl, Select, MenuItem } from '@material-ui/core';
import "leaflet/dist/leaflet.css";

function App() {
    const [countries,setCountries] = useState([]);
    const [country,setCountry] = useState("selectCountry");

    useEffect(()=>{
        const getCountries = async()=>{
            await fetch("https://disease.sh/v3/covid-19/countries/")
            // await fetch("https://corona.lmao.ninja/v2/countries")
                .then(response => response.json())
                .then(response => {
                        setCountries(response)
                    }
                )
        };
        getCountries();
    },[]);

  return (
      <Container fluid>
          {/*header*/}
          <Row>
              <Col className={"border1 pl-3 p-2"} xs="12" sm="12" md="8" lg="8" xl="8">
                  <h1>COVID-19 Dashboard by the CSSE</h1>
              </Col>
              {/*select Country whit material-ui*/}
              <Col xs="12" sm="10" md="4" lg="4" xl="4">
                  <FormControl className="selectItem">
                      <Select
                          variant="outlined"
                          value={country}
                          className={"headerOption mt-3"}
                          onChange={(event)=>setCountry(event.target.value)}
                      >
                          <MenuItem value="selectCountry">Selec country</MenuItem>
                          {
                              countries.map((item, idx)=>
                                  <MenuItem key={idx} value={item.countryInfo.iso3}> {item.country} </MenuItem>
                              )
                          }
                      </Select>
                  </FormControl>
              </Col>
          </Row>
          {/*body*/}
          <Row>
              {/*Left Aside*/}
              <Col className={"border1 minHeight"} xs="12" sm="10" md="5" lg="4" xl="3">
                  <LeftAside/>
              </Col>
              {/*Main Content*/}
              <Col className={"border1 minHeight px-1"} xs="12" sm="10" md="7" lg="8" xl="6">
                  <MainContent countries={countries} country={country}/>
              </Col>
              {/*Right Aside*/}
              <Col className={"border1 minHeight"} xs="12" sm="10" md="10" lg="10" xl="3">
                  <RightAside/>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
