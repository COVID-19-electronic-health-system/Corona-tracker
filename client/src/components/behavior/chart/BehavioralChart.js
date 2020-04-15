import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';

const BehavioralChart = props => {
  const { observations } = props;

  const behaveData = observations.map(obj => {
    return [
      `${moment(new Date(obj.date)).format('MMM Do, h:mm a')}`,
      `${parseInt(obj.nonPhysical.interest, 10)}`,
      `${parseInt(obj.nonPhysical.sadness, 10)}`,
      `${parseInt(obj.nonPhysical.sleep, 10)}`,
      `${parseInt(obj.nonPhysical.energy, 10)}`,
      `${parseInt(obj.nonPhysical.appetite, 10)}`,
    ];
  });

  const behaveObjArray = behaveData.map(arr => {
    return { name: arr[0], Interest: arr[1], Sadness: arr[2], Sleep: arr[3], Energy: arr[4], Appetite: arr[5] };
  });

  const [isActive, setActive] = useState(false);
  const [interest, setInterest] = useState(true);
  const [sadness, setSadness] = useState(true);
  const [sleep, setSleep] = useState(true);
  const [energy, setEnergy] = useState(true);
  const [appetite, setAppetite] = useState(true);

  const handleChange = evt => {
    const targetName = evt.target.name;

    if (targetName === 'interest') {
      setInterest(!interest);
    } else if (targetName === 'sadness') {
      setSadness(!sadness);
    } else if (targetName === 'sleep') {
      setSleep(!sleep);
    } else if (targetName === 'energy') {
      setEnergy(!energy);
    } else if (targetName === 'appetite') {
      setAppetite(!appetite);
    }
  };

  const onMouseDownHandler = (event, type) => {
    console.info(type, event);
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
      <FormControlLabel
        control={<Checkbox checked={interest} onChange={handleChange} color="primary" name="interest" />}
        label="Interest"
      />
      <FormControlLabel
        control={<Checkbox checked={sadness} onChange={handleChange} name="sadness" color="primary" />}
        label="Sadness"
      />
      <FormControlLabel
        control={<Checkbox checked={sleep} onChange={handleChange} name="sleep" color="primary" />}
        label="Sleep"
      />
      <FormControlLabel
        control={<Checkbox checked={energy} onChange={handleChange} name="energy" color="primary" />}
        label="Energy"
      />
      <FormControlLabel
        control={<Checkbox checked={appetite} onChange={handleChange} name="appetite" color="primary" />}
        label="Appetite"
      />

      <>
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            data={behaveObjArray}
            onMouseUp={onMouseUpHandler}
            onMouseMove={onMouseMoveHandler}
            margin={{ top: 2, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
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
