import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/themePalette.css';
import '../css/Temperature.css';

export default ({ allRecords }) => {
  const averageTemperature = allRecords.reduce((record, sum) => record.temperature + sum, 0) / allRecords.length;

  return (
    <Card>
      <Card.Body>
        <Card.Title id="Temperature-temp">{averageTemperature}F</Card.Title>
        <Card.Subtitle id="Temperature-avgTempText">Average Temp</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
