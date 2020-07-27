import React, { useState, useEffect } from "react";
import "./Table.css";
import { Table } from 'reactstrap';
import {sorted} from "../../sorted";

export function TableComp(props) {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
        // fetch("https://disease.sh/v3/covid-19/countries/")
        fetch("https://corona.lmao.ninja/v2/countries")
            .then(response => response.json())
            .then(response => {
                const sortedCountries = sorted(response);
                setCountries(sortedCountries)
                }
            )
    },[]);

    return(
       <div className={"tableDiv my-2"}>
           <Table striped>
               <thead>
                   <tr className={"tableHeader"}>
                       <th style={{width:"15%"}}>Flag</th>
                       <th style={{width:"60%"}}>Name</th>
                       <th style={{width:"25%"}}>Cases</th>
                   </tr>
               </thead>
               <tbody>
               {
                   countries.map((item,idx) =>
                       <tr className={"p-1"} key={idx}>
                           <td className={"p-0"}>
                               <img className={"tableFlag"} src={item.countryInfo.flag} alt=""/>
                           </td>
                           <td className={"p-1"}>{item.country}</td>
                           <td className={"p-1"}>{item.cases}</td>
                       </tr>
                   )
               }
               </tbody>
           </Table>

       </div>
    )
}