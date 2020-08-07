import React from "react";
import "./Map.css";
import { Container, Row, Col } from 'reactstrap';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import numeral from "numeral";
import {Circle, Popup} from "react-leaflet";

//map countries graph data
const dataColor = {
    cases:{
        hex: "#748fdc",
        multiplier:700,
    },
    recovered:{
        hex: "#23cc37",
        multiplier:1200,
    },
    deaths:{
        hex: "#5b6169",
        multiplier:2000,
    }
};

//use leaflet
export const showCircle = (data, casesType ="cases") =>(
    data.map((country,idx) => (
            <Circle key = {idx}
                    center={[country.countryInfo.lat, country.countryInfo.long]}
                    fillOpacity={0.5}
                    color={dataColor[casesType].hex}
                    fillColor={dataColor[casesType].hex}
                    radius = {Math.sqrt(country[casesType]) * dataColor[casesType].multiplier}
            >
                {console.log(data)}
                <Popup>
                    <div className={"showPopup"}>
                        <div><img src={country.countryInfo.flag} alt=""/></div>
                        <div><h4>{country.country}</h4></div>
                        <p>Cases: <span className={"cases"}>{numeral(country.cases).format("0,0")}</span></p>
                        <p>Recovered: <span className={"recovered"}>{numeral(country.recovered).format("0,0")}</span></p>
                        <p>Active: <span className={"active"}>{numeral(country.cases-country.recovered-country.deaths).format("0,0")}</span></p>
                        <p>Deaths: <span className={"deaths"}>{numeral(country.deaths).format("0,0")}</span></p>
                    </div>
                </Popup>
            </Circle>
        )
    )
);

//use leaflet to make map
export function Map({ countries, casesType, center, zoom}) {
    return(
        <Container>
            <Row  className={"MapComp"}>
                <Col className={"p-2"} xs="12" sm="12" md="12" lg="12" xl="12">
                    <Row>
                        <Col className={"MapDiv"} xs="7" sm="7" md="7" lg="7" xl="7">
                            <h4 className={"subTitle text-left"}>Map</h4>
                        </Col>
                        <Col className={"dataUpdate"} xs="5" sm="5" md="5" lg="5" xl="5">
                            <div>Last Updated April 09, 2020</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"MapComp-Map"} xs="12" sm="12" md="12" lg="12" xl="12">
                            <div className={"map"}>
                                <LeafletMap center={center} zoom={zoom}>
                                    <TileLayer
                                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    {/*{console.log(casesType,countries)}*/}
                                    {showCircle(countries, casesType)}
                                </LeafletMap>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
