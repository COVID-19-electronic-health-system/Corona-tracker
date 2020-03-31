import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as chartJs from 'chart.js';

const Chart = () => {
  // Extratring dummy data from the store
  const dataSample = useSelector(state => state.root.dataSample);

  // Configuring chart parameters and pusing dummy data
  const chartConfig = {
    type: 'line',
    // passing data to out chart
    data: {
      // labels for X axe, inserting labels data from the store
      labels: dataSample.labels,
      datasets: [
        {
          // title of the dataset
          label: 'Patent temperature',
          // Y axe color
          borderColor: 'rgb(200, 30, 132)',
          // Do not fill space bitween X and Y axes
          fill: false,
          // data for Y axe, inserting values data from the store
          data: dataSample.values,
        },
      ],
    },
    options: {
      // Chart positioning on the page
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 50,
        },
      },
      scales: {
        yAxes: [
          {
            // Range on the values bitween which Y axe will be streched despite of the dataset values
            ticks: {
              suggestedMax: 150,
              suggestedMin: 0,
            },
          },
        ],
      },
    },
  };

  // useRef is the React hook which allow us to select DOM node when it's avaliable
  const chartContainer = useRef(null);

  // Chart.js uses the Canvas tag to render Chat inside it
  // and the ctx parameter in new Chart(ctx, options) is a reference to the
  // <canvas /> element where chart will be attached.
  // With second argument we pass chartConfig object which contain all paramets of the chart
  useEffect(() => {
    const ChartJS = new chartJs.Chart(chartContainer.current, chartConfig);
    ChartJS();
  }, [chartContainer, chartConfig]);

  return (
    <div
      className="chart-container"
      style={{
        width: '600px',
        height: '300px',
      }}
    >
      <canvas id="chart" ref={chartContainer} />
    </div>
  );
};

export default Chart;
