import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import '../css/Slider.css'

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  }
];


class AppSlider extends Component {
  
  render() {
  return(
    <div className="slider-container">
      <Slider aria-labelledby="discrete-slider-custom"
        defaultValue={0}
        step={0.1}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        marks={marks}/>
    </div>
  );
  }
}

export default AppSlider;

