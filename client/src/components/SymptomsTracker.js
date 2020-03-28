import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, ButtonGroup, Button, TextField } from '@material-ui/core';
import CheckboxButton from './survey-view/checkbox-button/CheckboxButton';

// custome style for material ui elements
const useStyles = makeStyles({
  root: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  controlLabels: {
    marginLeft: -20,
  },
});

// marks for slider
const marks = [
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
  },
];


const SymptomsTracker = () => {

  const childRef = useRef();

  const classes = useStyles();

  // emulate dynamic state in a fuctional component
  const [todayFeeling, setTodayFeeling] = useState(1);
  const [todaySymptoms, setTodaySymptoms] = useState(1);
  const [comparedFeeling, setcomparedFeeling] = useState(1);
  const [additionalInfo, setAdditionalInfo] = useState('');

  // every headnler function responsible for collecting data for particular question
  const handlerTodayFeeling = (e) => {
    setTodayFeeling(e)
  }

  const handlerTodaySymptoms = (e) => {
    setTodaySymptoms(e)
  }

  const handlerComparedFeeling = (e) => {
    setcomparedFeeling(e)
  }

  const handlerAdditionalInfo = (e) => {
    setAdditionalInfo(e)
  }

  // aggregate collected data
  const submitSurvey = () => {
    childRef.current.submitSurvey()
    const submission = {
      todayFeeling: todayFeeling,
      todaySymptoms: todaySymptoms,
      comparedFeeling: comparedFeeling,
      additionalInfo: additionalInfo
    }
    // TODO save this state in Redux
  }

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>How do you feel today?</Typography>
      <Slider
        onChange={(e, val) => handlerTodayFeeling(val)}
        color="secondary"
        defaultValue={5}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={10}
        marks={marks}
      />

      <Typography id="discrete-slider" gutterBottom>
        How are your symptoms?
      </Typography>
      <Slider
        onChange={(e, val) => handlerTodaySymptoms(val)}
        color="secondary"
        defaultValue={5}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={1}
        max={10}
        marks={marks}
      />

      <Typography>How are your feeling compared yesterday?</Typography>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <Button onClick={e => handlerComparedFeeling(e.target.innerText)}>Worse</Button>
        <Button onClick={e => handlerComparedFeeling(e.target.innerText)}>The Same</Button>
        <Button onClick={e => handlerComparedFeeling(e.target.innerText)}>Better</Button>
      </ButtonGroup>

      <CheckboxButton ref={childRef}/>

      <Typography>Anything you'd like to share?</Typography>
      <TextField onChange={e => handlerAdditionalInfo(e.target.value)} />
      <Button onClick={submitSurvey} variant="outlined" color="secondary">
        SAVE MY RESPONSES
      </Button>
    </div>
  )
}

export default SymptomsTracker
