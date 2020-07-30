import React from "react";
import numeral from "numeral";
import {Circle, Popup} from "react-leaflet";

//sorted Cases Data in table
export const sorted = (data) =>{
    const sortedData = [...data];
    return sortedData.sort((a,b) => a.cases > b.cases ? -1 : 1);
};

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