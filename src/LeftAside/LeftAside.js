import React from "react";
import "./LeftAside.css";
import {Table} from "./Table/Table";
import {Graph} from "./Graph/Graph";

export function LeftAside(props) {
    return(
        <div className={"LeftAside"}>
            <h1>LeftAside</h1>
            <Table/>
            <Graph/>
        </div>
    )
}