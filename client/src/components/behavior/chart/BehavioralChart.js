import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';

export default function BehavioralChart() {
  const rechartData = [
    { name: 'Day 1', Interest: 3, Sadness: 4, Sleep: 3, Energy: 4, Appetite: 5 },
    { name: 'Day 2', Interest: 6, Sadness: 6, Sleep: 5, Energy: 7, Appetite: 3 },
    { name: 'Day 3', Interest: 3, Sadness: 5, Sleep: 4, Energy: 2, Appetite: 3 },
    { name: 'Day 4', Interest: 2, Sadness: 2, Sleep: 4, Energy: 1, Appetite: 4 },
    { name: 'Day 5', Interest: 2, Sadness: 1, Sleep: 5, Energy: 5, Appetite: 3 },
    { name: 'Day 6', Interest: 5, Sadness: 2, Sleep: 3, Energy: 1, Appetite: 5 },
    { name: 'Day 7', Interest: 1, Sadness: 3, Sleep: 1, Energy: 5, Appetite: 3 },
  ];

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
            data={rechartData}
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
