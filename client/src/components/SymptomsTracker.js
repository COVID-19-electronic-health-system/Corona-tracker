import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, ButtonGroup, Button, Checkbox, FormControlLabel, TextField }  from '@material-ui/core';

// custome style for material ui elements
const useStyles = makeStyles({
    root: {
      width: 300,
      display: `inline-block`,
    },
    controlLabels: {
      marginLeft: -20,
    }
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

    const classes = useStyles();

    // emulate dynamic state in a fuctional component
    const [todayFeeling, setTodayFeeling] = useState(1)
    const [todaySymptoms, setTodaySymptoms] = useState(1)
    const [comparedFeeling, setcomparedFeeling] = useState(1)
    const [cough, setCough] = useState('')
    const [fever, setFever] = useState(0)
    const [dizinnes, setDizinnes] = useState('')
    const [soreThroat, setSoreThroat] = useState('')
    const [congestion, setCongestion] = useState('')
    const [additionalInfo, setAdditionalInfo] = useState('')

    // every headnler function responsible for collecting data for particular question
    const handlerTodayFeeling = (e) => {
      setTodayFeeling(e) 
    }

    const handlerTodaySymptoms = (e) => {
      setTodaySymptoms(e) 
    }

    const handlerCough = (e) => {
      setCough(e)
    }

    const handlerComparedFeeling = (e) => {
      setcomparedFeeling(e)
    }

    const handlerFever = (e) => {
      setFever(e)
    }

    const handlerDizinnes = (e) => {
      setDizinnes(e)
    }

    const handlerSoreThroat = (e) => {
      setSoreThroat(e)
    }

    const handlerCongestion = (e) => {
      setCongestion(e)
    }

    const handlerAdditionalInfo = (e) => {
      setAdditionalInfo(e)
    }

    // aggregate collected data
    const submitAction = () => {
      const submission = {
        todayFeeling: todayFeeling, 
        todaySymptoms: todaySymptoms,
        comparedFeeling: comparedFeeling,
        cough: cough,
        fever: fever,
        dizinnes: dizinnes,
        soreThroat: soreThroat,
        congestion: congestion,
        additionalInfo: additionalInfo
      }
    }

    return (
      <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        How do you feel today?
      </Typography>
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

      <Typography id="discrete-slider" gutterBottom>How are your symptoms?</Typography>
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

      <Typography>Which symptoms are you experiencing?</Typography>
      
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <FormControlLabel
          value="Cough"
          control={<Checkbox color="secondary" />}
          label="Cough"
          labelPlacement="end"
          className={classes.controlLabels}
        />
        <Button onClick={e => handlerCough(e.target.innerText)}>Minimal</Button>
        <Button onClick={e => handlerCough(e.target.innerText)}>Moderate</Button>
        <Button onClick={e => handlerCough(e.target.innerText)}>Severe</Button>
      </ButtonGroup >
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
      <FormControlLabel
          value="Cough"
          control={<Checkbox color="secondary" />}
          label="Fever"
          labelPlacement="end"
          className={classes.controlLabels}
        />
        <TextField onChange={e => handlerFever(e.target.value)}/>
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
      <FormControlLabel
          value="Dizinnes"
          control={<Checkbox color="secondary" />}
          label="Dizinnes"
          labelPlacement="end"
          className={classes.controlLabels}
        />
        <Button onClick={e => handlerDizinnes(e.target.innerText)}>Minimal</Button>
        <Button onClick={e => handlerDizinnes(e.target.innerText)}>Moderate</Button>
        <Button onClick={e => handlerDizinnes(e.target.innerText)}>Severe</Button>
      </ButtonGroup >
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
      <FormControlLabel
          value="Soar throat"
          control={<Checkbox color="secondary" />}
          label="Soar throat"
          labelPlacement="end"
        />
        <Button onClick={e => handlerSoreThroat(e.target.innerText)}>Minimal</Button>
        <Button onClick={e => handlerSoreThroat(e.target.innerText)}>Moderate</Button>
        <Button onClick={e => handlerSoreThroat(e.target.innerText)}>Severe</Button>
      </ButtonGroup >
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
      <FormControlLabel
          value="Congestion"
          control={<Checkbox color="secondary" />}
          label="Congestion"
          labelPlacement="end"
        />
        <Button onClick={e => handlerCongestion(e.target.innerText)}>Minimal</Button>
        <Button onClick={e => handlerCongestion(e.target.innerText)}>Moderate</Button>
        <Button onClick={e => handlerCongestion(e.target.innerText)}>Severe</Button>
      </ButtonGroup >

      <Typography>Anything you'd like to share?</Typography>
      <TextField onChange={e => handlerAdditionalInfo(e.target.value)}/>
      <Button onClick={submitAction} variant="outlined" color="secondary">
        SAVE MY RESPONSES
      </Button>

    </div>
      );
}

export default SymptomsTracker