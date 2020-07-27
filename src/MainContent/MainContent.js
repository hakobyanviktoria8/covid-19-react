import React from "react";
import "./MainContent.css";
import {Cases} from "./Cases/Cases";
import {Map} from "./Map/Map";

export function MainContent(props) {
    return(
        <div className={"MainContent px-1"}>
            <Cases country={props.country}/>
            <Map/>
        </div>
    )
}