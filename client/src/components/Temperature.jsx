import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Temperature.css';
import { useSelector } from 'react-redux';

export default () => {
  const observations = useSelector(state => state.observations);
  const averageTemperature =
    observations.reduce((sum, record) => {
      return record.attrs.physical.temperature + sum;
    }, 0) / observations.length;

  return (
    <Card>
      <Card.Body style={{ width: '130px' }}>
        <Card.Title id="Temperature-temp">{averageTemperature}&#8457;</Card.Title>
        <Card.Subtitle id="Temperature-avgTempText">Average Temp</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
