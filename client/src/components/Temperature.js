import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/themePalette.css';
import '../css/Temperature.css';

export default Temperature = ({ allRecords }) => {
  const averageTemperature = allRecords.reduce(record => record.temperature + sum, 0) / allRecords.length;

  return (
    <Card>
      <Card.Body>
        <Card.Title id="Temperature-temp">{averageTemperature}F</Card.Title>
        <Card.Subtitle id="Temperature-avgTempText">Average Temp</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Temperature;
