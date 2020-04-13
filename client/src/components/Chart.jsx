import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, connect } from 'react-redux';
import * as chartJs from 'chart.js';
import PropTypes from 'prop-types';

const Chart = props => {
  const { chartType, observations } = props;
  const temperatureData = useSelector(state => state.temperatureReducer.temperature);
  const [chartConfig, setChartConfig] = useState({
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
  });

  const chartContainer = useRef(null);

  const updateChartConfig = useCallback(() => {
    const map = new Map();
    observations.map(observation => {
      const date = new Date(observation.date).toISOString().slice(0, 10);

      let temp;
      if (
        !observation.physical.feverSeverity ||
        observation.physical.feverSeverity === '' ||
        !parseInt(observation.physical.feverSeverity, 10) > 0
      ) {
        temp = 0;
      } else {
        temp = parseInt(observation.physical.feverSeverity, 10);
      }

      if (map.has(date)) {
        if (map.get(date).temp !== 0) {
          map.get(date).temp = (map.get(date).temp + temp) / (map.get(date).numObservations + 1);
        }
        map.set(temp, {
          temp,
          date,
        });
      } else {
        map.set(date, {
          temp,
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

    setChartConfig(config => {
      const newConfig = config;
      newConfig.data.labels = dates;
      newConfig.data.datasets[0].data = temps;
      return newConfig;
    });
  }, [observations]);

  useEffect(() => {
    updateChartConfig();
    // eslint-disable-next-line no-unused-vars
    const chart = new chartJs.Chart(chartContainer.current, chartConfig);
  }, [chartContainer, chartConfig, updateChartConfig]);

  return (
    <div>
      <canvas id="chart" ref={chartContainer} />
    </div>
  );
};

Chart.propTypes = {
  chartType: PropTypes.string.isRequired,
  observations: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => {
  return {
    observations: state.observationsReducer.observations,
  };
};

export default connect(mapStateToProps)(Chart);
