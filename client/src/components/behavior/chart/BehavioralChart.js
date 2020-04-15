import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';

const BehavioralChart = props =>{

  const {observations} = props

  // const date = observations.slice(7,8).map(obj => Date(obj.date.toString()))
  // const interestNum = parseInt(observations.slice(7,8).map(obj => obj.nonPhysical.interest))
  // const sadNum = parseInt(observations.slice(7,8).map(obj => obj.nonPhysical.sadness))
  // const sleepNum = parseInt(observations.slice(7,8).map(obj => obj.nonPhysical.sleep))
  // const energyNum = parseInt(observations.slice(7,8).map(obj => obj.nonPhysical.energy))
  // const appNum = parseInt(observations.slice(7,8).map(obj => obj.nonPhysical.appetite))


  const rechartData = [
    // { name: date, Interest: interestNum, Sadness: sadNum, Sleep: sleepNum, Energy: energyNum, Appetite: appNum },
    // { name: 'Day 2', Interest: 6, Sadness: 6, Sleep: 5, Energy: 7, Appetite: 3 },
    // { name: 'Day 3', Interest: 3, Sadness: 5, Sleep: 4, Energy: 2, Appetite: 3 },
    // { name: 'Day 4', Interest: 2, Sadness: 2, Sleep: 4, Energy: 1, Appetite: 4 },
    // { name: 'Day 5', Interest: 2, Sadness: 1, Sleep: 5, Energy: 5, Appetite: 3 },
    // { name: 'Day 6', Interest: 5, Sadness: 2, Sleep: 3, Energy: 1, Appetite: 5 },
    // { name: 'Day 7', Interest: 1, Sadness: 3, Sleep: 1, Energy: 5, Appetite: 3 },
  ];

  // const behaveData = observations.map(obj => {
  //   return `name: ${Date(obj.date).toString()}, Interest: ${parseInt(obj.nonPhysical.interest)}, Sadness: ${parseInt(obj.nonPhysical.sadness)},  
  //   Sleep: ${parseInt(obj.nonPhysical.sleep)}, Energy: ${parseInt(obj.nonPhysical.energy)}, Appetite: ${parseInt(obj.nonPhysical.appetite)}`
  // })

  const behaveData = observations.map(obj => {
    return [`${new Date(obj.date)}`, `${parseInt(obj.nonPhysical.interest)}`, `${parseInt(obj.nonPhysical.sadness)}`,  
    `${parseInt(obj.nonPhysical.sleep)}`, `${parseInt(obj.nonPhysical.energy)}`, `${parseInt(obj.nonPhysical.appetite)}`]
  })

  const behaveObjArray = behaveData.map(arr => {
    return {name: arr[0],
    Interest: arr[1],
    Sadness: arr[2],
    Sleep: arr[3],
    Energy: arr[4],
    Appetite: arr[5]  
}})

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

  const random = () => {
    console.log(observations)
    console.log(behaveData)
    console.log(behaveObjArray)
  }

  return (
    <>
    <button onClick={random}>random</button>
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
}

BehavioralChart.propTypes = {
  observations: PropTypes.arrayOf(Object).isRequired,
};

function mapStateToProps(state) {
  return { observations: state.observationsReducer.observations };
}

export default connect(mapStateToProps)(BehavioralChart)
