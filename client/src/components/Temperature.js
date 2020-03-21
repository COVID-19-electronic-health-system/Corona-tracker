import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/themePalette.css';
import '../css/Temperature.css';

export default ({ allRecords }) => {
  const averageTemperature =
    allRecords.reduce((sum, record) => {
      return record.temperature + sum;
    }, 0) / allRecords.length;

  return (
    <Card>
      <Card.Body style={{width: '130px'}}>
        <Card.Title id="Temperature-temp">{averageTemperature}&#8457;</Card.Title>
        <Card.Subtitle id="Temperature-avgTempText">Average Temp</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
