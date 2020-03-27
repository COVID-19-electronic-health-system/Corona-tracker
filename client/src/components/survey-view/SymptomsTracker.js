import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CheckboxButton from './checkbox-button/CheckboxButton';
import SliderInput from './SliderInput';
import { handleSlider, handleSymptoms, handlerAdditionalInfo } from '../../redux/actions/symptom-tracker';
import { submitSurvey } from '../../redux/actions/submit-survey'

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

const SymptomsTracker = () => {
  const classes = useStyles();
  const state = useSelector(state => state.symptomTrackerReducer);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <SliderInput
        handleSlider={(event, value) => dispatch(handleSlider(event, value))} question={'How do you feel today?'} name={'todayFeeling'} value={state.todayFeeling} />

      <Typography>How are your feeling compared yesterday?</Typography>
      <ButtonGroup color="secondary" aria-label="outlined primary button group">
        <Button variant='contained' onClick={event => dispatch(handleSymptoms(event))} color={state.comparedFeeling === 'Worse' ? 'secondary' : 'primary'} value='Worse'>Worse</Button>
        <Button variant='contained' onClick={event => dispatch(handleSymptoms(event))} color={state.comparedFeeling === 'The Same' ? 'secondary' : 'primary'} value='The Same' >The Same</Button>
        <Button variant='contained' onClick={event => dispatch(handleSymptoms(event))} color={state.comparedFeeling === 'Better' ? 'secondary' : 'primary'} value='Better' >Better</Button>
      </ButtonGroup>

      <SliderInput
        handleSlider={(event, value) => dispatch(handleSlider(event, value))} question={'How are your symptoms?'} name={'todaySymptoms'} value={state.todaySymptoms} />

      <CheckboxButton />

      <Typography>Anything you'd like to share?</Typography>
      <TextField
        onChange={event => dispatch(handlerAdditionalInfo(event))}
      />
      <Button variant='contained' component={Link} to='/' onClick={() => dispatch(submitSurvey())} color="secondary">
        SAVE MY RESPONSES
      </Button>

    </div>

  )
}

export default SymptomsTracker
