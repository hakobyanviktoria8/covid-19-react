import React, { useState, useEffect } from "react";
import "./MainContent.css";
import {Cases} from "./Cases/Cases";
import {Map} from "./Map/Map";
import { Row, Col } from 'reactstrap';

export function MainContent(props) {
    const [data,setData] = useState([]);
    const [active,setActive] = useState(0);
    const [mapCenter, setMapCenter] = useState({lat:34.80746, lng: -40.4796});
    const [mapZoom, setMapZoom] = useState(2);
    const [mapCountries, setMapCountries] = useState([]);

    const url = props.country === "selectCountry"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${props.country}`;

    // useEffect(()=> {
    //     async function totalData() {
    //         const response = await  axios.get(url);
    //         setData(response.data);
    //         setActive(response.data.todayCases - response.data.todayRecovered - response.data.todayDeaths < 0 ? 0
    //             : response.data.todayCases - response.data.todayRecovered - response.data.todayDeaths)
    //         // return response
    //     }
    //     totalData()
    // },[props.country]);

    useEffect(()=>{
        const totalData = async()=>{
            await fetch(url)
                .then(response => response.json())
                .then(response => {
                        setData(response);
                        setActive(response.todayCases - response.todayRecovered - response.todayDeaths < 0 ? 0
                            : response.todayCases - response.todayRecovered - response.todayDeaths);
                        // console.log(response);
                        setMapCenter([response.countryInfo.lat, response.countryInfo.long]);
                        setMapZoom(4);
                        setMapCountries(response);
                    }
                )
                .catch(() => console.log("Can’t access " + url + " response."))
        };
        totalData();
    },[props.country]);

    // console.log(data);

    return(
        <div className={"MainContent px-1"}>
            <Row>
                <Col className={"p-2 borderMin"} xs="12" sm="12" md="12" lg="12" xl="12">
                    <Cases country={props.country} data={data} active={active}/>
                </Col>
            </Row>
            <Row>
                <Col className={"p-2 borderMin"} xs="12" sm="12" md="12" lg="12" xl="12">
                    <Map countries={mapCountries} center={mapCenter} zoom={mapZoom}/>
                </Col>
            </Row>
        </div>
    )
}