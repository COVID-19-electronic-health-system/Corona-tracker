/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */

import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as chartJs from 'chart.js';
import PropTypes from 'prop-types';
import { useBlockstack } from 'react-blockstack';

const Chart = ({ chartType }) => {
  const temperatureData = useSelector(state => state.temperatureReducer.temperature);
  const data = [];
  let files = [];
  const { userSession } = useBlockstack();

  const chartConfig = {
    type: chartType,
    data: {
      labels: temperatureData.labels,
      datasets: [
        {
          label: 'Patient temperature',
          backgroundColor: '#4760ff',
          data: temperatureData.values,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              max: 110,
              min: 80,
            },
          },
        ],
      },
    },
  };

  const chartContainer = useRef(null);

  const getFiles = async () => {
    files = [];
    await userSession
      .listFiles(file => {
        files.push(file);
        return true;
      })
      .then(async () => {
        for (let i = 0; i < files.length; i += 1) {
          if (files[i].includes('observation/')) {
            const curr = await userSession.getFile(files[i]);
            data.push(JSON.parse(curr));
          }
        }
      })
      .then(() => {
        const map = new Map();
        data.map(dataPoint => {
          const date = new Date(dataPoint.date).toISOString().slice(0, 10);
          let temp = 0;

          if (!parseInt(dataPoint.physical.feverSeverity, 10) > 0) {
            temp = 0;
          } else {
            temp = parseInt(dataPoint.physical.feverSeverity, 10);
          }

          if (map.has(date)) {
            if (map.get(date).temp !== 0) {
              map.get(date).temp = (map.get(date).temp + temp) / (map.get(date).numObservations + 1);
              map.get(date).numObservations += 1;
            }
          } else {
            map.set(date, {
              temp,
              numObservations: 1,
              date,
            });
          }
          return true;
        });

        const dates = [];
        const temps = [];

        map.forEach(entry => {
          dates.push(entry.date);
          temps.push(entry.temp);
        });

        chartConfig.data.labels = dates;
        chartConfig.labdels = dates;
        chartConfig.data.datasets[0].data = temps;
        return true;
      });
  };

  useEffect(() => {
    getFiles(chartConfig).then(() => {
      const ChartJS = new chartJs.Chart(chartContainer.current, chartConfig);
    });
    // eslint-disable-next-line
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
