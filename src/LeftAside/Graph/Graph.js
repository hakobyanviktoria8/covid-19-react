import React,{ useState, useEffect } from "react";
import "./Graph.css";
import { Line } from "react-chartjs-2";

export function Graph(props) {
    //https://corona.lmao.ninja/v2/historical/all?lastdays=120
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch("https://corona.lmao.ninja/v2/historical/all?lastdays=120")
            .then(response => response.json())
            .then(response=> {console.log(response)})
    });

    return(
        <div className={"Graph"}>
            <h1>Graph</h1>
            {/*{*/}
                {/*fetch("https://corona.lmao.ninja/v2/historical/all?lastdays=120")*/}
                    {/*.then((response)=> response.json())*/}
                    {/*.then((data)=>{*/}
                {/*let chartData = buildChartData(data);*/}
                {/*buildChart(chartData);*/}
                {/*})*/}
            {/*}*/}
        </div>
    )
}

// const buildChartData = (data) => {
//     let chartData = [];
//     let lastDataPoint;
//     for(let date in data.cases){
//         if(lastDataPoint){
//             let newDataPoint = {
//                 x: date,
//                 y: data.cases[date] - lastDataPoint
//             };
//             chartData.push(newDataPoint);
//         }
//         lastDataPoint = data.cases[date];
//     }
//     return chartData;
// };
// const buildChart = (chartData) => {
//     let timeFormat = 'MM/DD/YY';
//     let ctx = document.getElementById('myChart').getContext('2d');
//     let chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',
//
//         // The data for our dataset
//         data: {
//             datasets: [{
//                 backgroundColor: 'rgba(204, 16, 52, 0.5)',
//                 borderColor: '#CC1034',
//                 data: chartData
//             }]
//         },
//
//         // Configuration options go here
//         options: {
//             legend: {
//                 display: false
//             },
//             elements: {
//                 point:{
//                     radius: 0
//                 }
//             },
//             maintainAspectRatio: false,
//             tooltips: {
//                 mode: 'index',
//                 intersect: false,
//                 callbacks: {
//                     label: function(tooltipItem, data) {
//                         return numeral(tooltipItem.value).format('+0,0');
//                     }
//                 }
//             },
//             scales:     {
//                 xAxes: [{
//                     type: "time",
//                     time: {
//                         format: timeFormat,
//                         tooltipFormat: 'll'
//                     }
//                 }],
//                 yAxes: [{
//                     gridLines: {
//                         display:false
//                     },
//                     ticks: {
//                         // Include a dollar sign in the ticks
//                         callback: function(value, index, values) {
//                             return numeral(value).format('0a');
//                         }
//                     }
//                 }]
//             }
//         }
//     });
// };