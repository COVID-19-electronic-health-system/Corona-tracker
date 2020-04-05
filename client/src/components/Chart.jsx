/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as chartJs from 'chart.js';
import PropTypes from 'prop-types';

const Chart = ({ chartType }) => {
  const temperatureData = useSelector(state => state.temperatureReducer.temperature);

  // Configuring chart parameters and pusing dummy data
  const chartConfig = {
    type: chartType,
    data: {
      labels: temperatureData.labels,
      datasets: [
        {
          label: 'Patent temperature',
          borderColor: 'rgb(200, 30, 132)',
          fill: false,
          data: temperatureData.values,
        },
      ],
    },
    options: {
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

  const chartContainer = useRef(null);

  useEffect(() => {
    const ChartJS = new chartJs.Chart(chartContainer.current, chartConfig);
  }, [chartContainer, chartConfig]);

  return (
    <div
      style={{
        width: '100%',
        height: '100px',
      }}
    >
      <canvas id="chart" ref={chartContainer} />
    </div>
  );
};

export default Chart;

Chart.propTypes = {
  chartType: PropTypes.string.isRequired,
};
