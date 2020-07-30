import React from "react";
import "./Map.css";
import { Container, Row, Col } from 'reactstrap';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import {showCircle} from "../../sorted";

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
