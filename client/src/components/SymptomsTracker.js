import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, ButtonGroup, Button, TextField, Grid } from '@material-ui/core';
import CheckboxButton from './survey-view/checkbox-button/CheckboxButton';
import { useBlockstack } from 'react-blockstack';

// custom style for material ui elements
const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  controlLabels: {
    marginLeft: -20,
  },
  gridItem: {
    maxWidth: '1400px',

    // adjust padding based on window size
    [theme.breakpoints.down('sm')]: {
      padding: '2em',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20em',
      paddingRight: '20em',
      paddingBottom: '2em',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '2em',
    },
  },
}));

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
  const { userSession } = useBlockstack();
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

  let files = []
  let numObservations = 0

  const fetchFiles = async () => {
    console.log(files)
    for (let i = 0; i < files.length; i++) {
      if (files[i].includes("observation")) {
        const currObservation = parseInt(files[i].replace(/^\D+/g, ''))
        numObservations = currObservation
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      await userSession.listFiles((file) => {
        files.push(file);
        return true;
      });
      return files;
    }
    fetchData().then(() => {
      fetchFiles()
    })
  })

  // aggregate collected data
  const submitSurvey = async () => {
    const submission = {
      todayFeeling: todayFeeling,
      todaySymptoms: todaySymptoms,
      comparedFeeling: comparedFeeling,
      additionalInfo: additionalInfo
    }

    const observation = childRef.current.createObservation(submission)
    const encryptOptions = { encrypt: true };
    userSession.putFile(`observation/0000000${numObservations+1}.json`, JSON.stringify(observation.attrs), encryptOptions).then((res) => {
      window.location.reload()
    }).catch(err => {
      console.log(err)
    })

  }

  return (
    <div className={classes.root}>
      <Grid container justify={'center'} alignItems={'center'}>
        <Grid item xs={12} xl={4} className={classes.gridItem}>
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
        </Grid>

        <Grid item xs={12} xl={4} className={classes.gridItem}>
          <CheckboxButton ref={childRef}/>
        </Grid>

        <Grid item xs={12} xl={4} className={classes.gridItem}>
          <Typography>Anything you'd like to share?</Typography>
          <TextField onChange={e => handlerAdditionalInfo(e.target.value)} />
          <Button onClick={submitSurvey} variant="outlined" color="secondary">
            SAVE MY RESPONSES
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SymptomsTracker
