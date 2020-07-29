import React,{ useState, useEffect } from "react";
import "./Graph.css";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
    legend:{
        display:false
    },
    elements:{
        point: {
            radius: 0,
        }
    },
    maintainAspectRatio: false,
    tooltips:{
        mode: 'index',
        intersect: false,
        callbacks:{
            label: function (tooltinItem, data) {
                return numeral(tooltinItem.value).format("+0,0")
            }
        }
    },
    scales:     {
        xAxes: [{
            type: "time",
            time: {
                format: "MM/DD/YY",
                tooltipFormat: 'll'
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            },
            ticks: {
                callback: function(value, index, values) {
                    return numeral(value).format('0a');
                }
            }
        }]
    }
};

const chartDataFunc = (data, casesType) => {
    const chartData = [];
    let lastData;
    for(let date in data.cases) {
        if (lastData){
            const  newDataPoint = {
                x: date,
                y: data[casesType][date] - lastData
            };
            chartData.push(newDataPoint)
        }
        lastData = data[casesType][date]
    }
    return chartData;
};

export function GraphComp({casesType = "cases"}) {
    const [data, setData] = useState({});

    useEffect(()=>{
        const graphFunc = async()=>{
            await fetch("https://corona.lmao.ninja/v2/historical/all?lastdays=120")
                .then(response => response.json())
                .then(data=> {
                    console.log(data);
                    setData(chartDataFunc(data,"cases"));
                })
        };
        graphFunc();
    },[casesType]);

    return(
        <div className={"Graph"}>
            {
                data?.length > 0 && (
                    <Line
                        data={{
                            datasets:[
                                {
                                    data: data,
                                    backgroundColor: "#e8f7ff",
                                    borderColor:"#6d89d0"
                                }
                            ]
                        }}
                        options={options}
                    />
                )
            }
        </div>
    )
}
