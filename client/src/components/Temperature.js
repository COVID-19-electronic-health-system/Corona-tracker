import React, { Component } from 'react';
import { Card }  from 'react-bootstrap';
import "../css/themePalette.css";
import "../css/Temperature.css";

class Temperature extends Component {
  render () {
    return (
      <Card>
        <Card.Body>
            <Card.Title id="Temperature-temp">
              98.8F
            </Card.Title>
            <Card.Subtitle id="Temperature-avgTempText">
              Average Temp
            </Card.Subtitle>
        </Card.Body>
      </Card>
    )
  }
}

export default Temperature;
