import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: [
                    "2020-02-28", 
                    "2020-03-2", 
                    "2020-03-4",
                    "2020-03-5",
                    "2020-03-9"
                ],
                datasets: [
                    {
                        label: "Patent temperature",
                        borderColor: 'rgb(200, 30, 132)',
                        fill: false,
                        data: [80, 70, 56, 90, 55],
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMax: 150,
                            suggestedMin: 0
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div  
                style={{
                width: '600px',
                height: '300px',
              }}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}