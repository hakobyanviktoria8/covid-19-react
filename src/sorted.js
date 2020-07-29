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
      hex: "#CC1034",
      rgb: "rgb(204, 16,52)",
      half_op: "red",
      multiplier:800,
  },
  recovered:{
      hex: "#23cc37",
      rgb: "rgb(204, 16,52)",
      half_op: "red",
      multiplier:1200,
  },
    deaths:{
      hex: "#5b6169",
      rgb: "rgb(204, 16,52)",
      half_op: "red",
      multiplier:2000,
  }
};

export const showCircle = (data, casesType ="cases") =>(
    data.map(country => (
        <Circle
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity={0.4}
        />
        )
    )
);