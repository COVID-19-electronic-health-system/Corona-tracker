import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

// Configuring chart parameters and pusing dummy data

const chartConfig = {
    type: "line",
    // passing data to out chart
    data: {
        // labels for X axe
        labels: [
            "2020-02-28", 
            "2020-03-2", 
            "2020-03-4",
            "2020-03-5",
            "2020-03-9"
            ],
        datasets: [
            {
            // title of the dataset
            label: "Patent temperature",
            // Y axe color
            borderColor: 'rgb(200, 30, 132)',
            // Do not fill space bitween X and Y axes
            fill: false,
            // data for Y axe
            data: [80, 70, 56, 90, 55],
            }
            ]
        },
    options: {
        // Chart positioning on the page
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
              bottom: 50
            }
        },
    scales: {
        yAxes: [{
            // Range on the values bitween which Y axe will be streched despite of the dataset values
            ticks: {
                suggestedMax: 150,
                suggestedMin: 0
                    }
                }]
            }
        }
};

const ChartJs = () => {

 //useRef is the React hook which allow us to select DOM node when it's avaliable
 const chartContainer = useRef(null);
  
// Chart.js uses the Canvas tag to render Chat inside it
// and the ctx parameter in new Chart(ctx, options) is a reference to the 
// <canvas /> element where chart will be attached.
// With second argument we pass chartConfig object which contain all paramets of the chart
  useEffect(() => {
    new Chart(chartContainer.current, chartConfig);
  }, [chartContainer]);
    
  return (
    <div style={{
            width: '600px',
            height: '300px'
        }}>
    
      <canvas ref={chartContainer} />
    </div>
  );
};

export default ChartJs;