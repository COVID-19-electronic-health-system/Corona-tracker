/* eslint-disable no-console */

import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';
import { Typography } from '@material-ui/core';

const BehavioralChart = props => {
  const { observations } = props;

  const behaveData = observations.slice(observations.length - 7, observations.length).map(obj => {
    return {
      name: `${moment(new Date(obj.date)).format('MMM Do, h:mm a')}`,
      Interest: `${obj.nonPhysical.interest}`,
      Sadness: `${obj.nonPhysical.sadness}`,
      Sleep: `${obj.nonPhysical.sleep}`,
      Energy: `${obj.nonPhysical.energy}`,
      Appetite: `${obj.nonPhysical.appetite}`,
    };
  });

  const [isActive, setActive] = useState(false);
  const [interest, setInterest] = useState(true);
  const [sadness, setSadness] = useState(true);
  const [sleep, setSleep] = useState(true);
  const [energy, setEnergy] = useState(true);
  const [appetite, setAppetite] = useState(true);

  const handleChange = evt => {
    const targetName = evt.target.name;

    switch (targetName) {
      case 'interest':
        setInterest(!interest);
        break;
      case 'sadness':
        setSadness(!sadness);
        break;
      case 'sleep':
        setSleep(!sleep);
        break;
      case 'energy':
        setEnergy(!energy);
        break;
      case 'appetite':
        setAppetite(!appetite);
        break;
      default:
        break;
    }
  };

  const onMouseDownHandler = (event, type) => {
    setActive(type);
  };

  const onMouseUpHandler = () => setActive(false);

  const onMouseMoveHandler = event => {
    if (!isActive) return;
    console.warn(event);
  };

  const createLine = (type, colour) => (
    <Line
      activeDot={{
        onMouseDown: event => onMouseDownHandler(type, event),
      }}
      type="natural"
      dataKey={type}
      stroke={colour}
    />
  );

  const interestLine = interest ? createLine('Interest', 'green') : null;
  const sadnessLine = sadness ? createLine('Sadness', 'black') : null;
  const sleepLine = sleep ? createLine('Sleep', 'purple') : null;
  const energyLine = energy ? createLine('Energy', 'red') : null;
  const appetiteLine = appetite ? createLine('Appetite', 'magenta') : null;

  return (
    <>
      <Typography variant="subtitle1">
        <b>Behavioral Health History</b>
      </Typography>

      <FormControlLabel
        control={<Checkbox checked={interest} onChange={handleChange} color="Secondary" name="interest" />}
        label="Interest"
      />
      <FormControlLabel
        control={<Checkbox checked={sadness} onChange={handleChange} name="sadness" color="Secondary" />}
        label="Sadness"
      />
      <FormControlLabel
        control={<Checkbox checked={sleep} onChange={handleChange} name="sleep" color="Secondary" />}
        label="Sleep"
      />
      <FormControlLabel
        control={<Checkbox checked={energy} onChange={handleChange} name="energy" color="Secondary" />}
        label="Energy"
      />
      <FormControlLabel
        control={<Checkbox checked={appetite} onChange={handleChange} name="appetite" color="Secondary" />}
        label="Appetite"
      />

      <>
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            data={behaveData}
            onMouseUp={onMouseUpHandler}
            onMouseMove={onMouseMoveHandler}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dx={15} dataKey="name" />
            <YAxis dy={-4} type="number" domain={[0, 5]} />
            <Tooltip />
            <Legend />
            {interestLine}
            {sadnessLine}
            {sleepLine}
            {energyLine}
            {appetiteLine}
          </LineChart>
        </ResponsiveContainer>
      </>
    </>
  );
};

BehavioralChart.propTypes = {
  observations: PropTypes.arrayOf(Object).isRequired,
};

function mapStateToProps(state) {
  return { observations: state.observationsReducer.observations };
}

export default connect(mapStateToProps)(BehavioralChart);
