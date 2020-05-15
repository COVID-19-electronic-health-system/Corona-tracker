import React, { useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Chart = props => {
  const { observations, tempUnit } = props;

  const temps = observations.map(observation => {
    const datetime = new Date(observation.date).toISOString().slice(0, 10);
    let temp;
    if (
      !observation.physical.feverSeverity ||
      observation.physical.feverSeverity === '' ||
      !parseFloat(observation.physical.feverSeverity, 10) > 0
    ) {
      temp = 0;
    } else {
      temp = parseFloat(observation.physical.feverSeverity, 10);
    }

    return { date: datetime, temperature: temp };
  });

  const [temperatureData] = useState(temps);

  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 1.5}>
      <LineChart
        data={temperatureData}
        margin={{
          top: 10,
          right: 50,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis type="number" domain={tempUnit === 'fahrenheit' ? [94, 105] : [32, 42]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  observations: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  tempUnit: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    observations: state.observationsReducer.observations,
    tempUnit: state.onboardingReducer.tempUnit,
  };
};

export default connect(mapStateToProps)(Chart);
