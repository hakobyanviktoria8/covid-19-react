import React from "react";
import "./LeftAside.css";
import {TableComp} from "./Table/Table";
import {Graph} from "./Graph/Graph";

export function LeftAside(props) {
    return(
        <div className={"LeftAside"}>
            <h4 className={"subTitle"}>Total Cases by Country</h4>
            <TableComp/>
            <h4 className={"subTitle"}>Total Cases by Graph</h4>
            <Graph/>
        </div>
    )
}