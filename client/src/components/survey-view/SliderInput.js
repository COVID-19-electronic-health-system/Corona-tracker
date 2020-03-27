import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { marks } from '../../utils/survey-view-constants';

const SliderInput = (props) => {
  return (
    <>
      <Typography id="discrete-slider" gutterBottom>{props.question}</Typography>
      <Slider
        onChange={props.handleSlider}
        color="secondary"
        defaultValue={5}
        value={props.value}
        title={props.name}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={10}
        marks={marks}
      />
    </>
  )
}

export default SliderInput;
