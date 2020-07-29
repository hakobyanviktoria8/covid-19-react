import React from "react";
import "./Map.css";
import { Container, Row, Col } from 'reactstrap';
import { Map as LeafletMap, TileLayer } from "react-leaflet";

export function Map({ countries, center, zoom}) {
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
                                        // attribution='&copy; <a href="http://osm.org/copyright>
                                        //   OpenMap</a> contributors'
                                    />
                                </LeafletMap>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


// import React, { Component } from 'react'
// import { Map, TileLayer, Marker, Popup } from '../../src'
//
// type State = {
//     lat: number,
//     lng: number,
//     zoom: number,
// };
//
// export default class SimpleExample extends Component<{}, State> {
//     state = {
//         lat: 51.505,
//         lng: -0.09,
//         zoom: 13,
//     };
//
//     render() {
//         const position = [this.state.lat, this.state.lng]
//         return (
//             <Map center={position} zoom={this.state.zoom}>
//                 <TileLayer
//                     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <Marker position={position}>
//                     <Popup>
//                         A pretty CSS3 popup. <br /> Easily customizable.
//                     </Popup>
//                 </Marker>
//             </Map>
//         )
//     }
// }