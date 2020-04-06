import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Slider,
  ButtonGroup,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  controlLabels: {
    marginLeft: -20,
  },
  buttons: {
    ...buttonsCss.buttons,
    width: '20vw',
    height: '10vh',
    margin: '1em',
  },
  continueButton: {
    ...buttonsCss.buttons,
    marginTop: '10vh',
    width: '50vw',
  },
  gridItem: {
    maxWidth: '80vw',
  },
  dialog: {
    background: '#7a9cf9',
  },
  dialogText: {
    color: 'white',
    margin: '0 auto',
  },
  selectedButton: {
    ...buttonsCss.buttons,
    margin: '0.5em',
  },
  button: {
    ...buttonsCss.buttons,
    margin: '0.5em',
    // background: 'url(50%-transparent-white.png)',
    background: 'rgba(255,255,255,0.5)',
    backgroundColor: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    color: 'black',
    '&:hover': {
      ...buttonsCss.buttons,
      backgroundColor: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    },
  },
}));

const marks = [
  {
    value: 1,
    label: '😥',
  },
  {
    value: 1.5,
  },
  {
    value: 2,
    label: '🙁',
  },
  {
    value: 2.5,
  },
  {
    value: 3,
    label: '😐',
  },
  {
    value: 3.5,
  },
  {
    value: 4,
    label: '🙂',
  },
  {
    value: 4.5,
  },
  {
    value: 5,
    label: '😁',
  },
];

const SurveyPage1 = props => {
  const { setSurveyPage1 } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [todaySet, setTodaySet] = useState(false);
  const [symptomsSet, setSymptomsSet] = useState(false);
  const [comparedSet, setComparedSet] = useState(false);
  const [todayFeeling, setTodayFeeling] = useState(-1);
  const [todaySymptoms, setTodaySymptoms] = useState(-1);
  const [comparedFeeling, setcomparedFeeling] = useState('');

  const handlerTodayFeeling = e => {
    setTodayFeeling(e);
    setTodaySet(true);
  };

  const handlerTodaySymptoms = e => {
    setTodaySymptoms(e);
    setSymptomsSet(true);
  };

  const handlerComparedFeeling = e => {
    setcomparedFeeling(e);
    setComparedSet(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitSurveyPage1 = async () => {
    if (!todaySet || !symptomsSet || !comparedSet) {
      setOpen(true);
    } else {
      const surveyPage1 = {
        todayFeeling,
        todaySymptoms,
        comparedFeeling: comparedFeeling.toLowerCase(),
      };

      setSurveyPage1(surveyPage1);
    }
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} xl={4}>
          <Typography variant="h5">
            <b>Let&apos;s answer a few questions!</b>
          </Typography>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Typography>
            Be sure to answer truthfully and honestly so that your health record will be accurate and helpful
          </Typography>
        </Grid>
        <Grid item xs={12} xl={4} className={classes.gridItem}>
          <Typography id="discrete-slider" gutterBottom>
            <b>Q1: How do you feel today?</b>
          </Typography>
          <Slider
            onChange={(e, val) => handlerTodayFeeling(val)}
            color="secondary"
            defaultValue={3}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />

          <Typography id="discrete-slider" gutterBottom>
            <b>Q2: How are your symptoms?</b>
          </Typography>
          <Slider
            onChange={(e, val) => handlerTodaySymptoms(val)}
            color="secondary"
            defaultValue={3}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />

          <Typography>
            <b>Q3: How are your feeling compared yesterday?</b>
          </Typography>
          <ButtonGroup color="secondary" aria-label="outlined primary button group">
            <Button
              className={comparedFeeling === 'worse' ? classes.selectedButton : classes.button}
              variant="contained"
              value="Worse"
              onClick={e => handlerComparedFeeling(e.target.innerText)}
            >
              Worse
            </Button>
            <Button
              className={comparedFeeling === 'the same' ? classes.selectedButton : classes.button}
              variant="contained"
              onClick={e => handlerComparedFeeling(e.target.innerText)}
            >
              The Same
            </Button>
            <Button
              className={comparedFeeling === 'better' ? classes.selectedButton : classes.button}
              variant="contained"
              onClick={e => handlerComparedFeeling(e.target.innerText)}
            >
              Better
            </Button>
          </ButtonGroup>
        </Grid>

        {/* <Grid item xs={12} xl={4} className={classes.gridItem}>
          <CheckboxButton ref={childRef} />
        </Grid> */}

        <Grid item xs={12} xl={4} className={classes.gridItem}>
          {/* <Typography>Anything you&apos;d like to share?</Typography> */}
          {/* <TextField onChange={e => handleropenComment(e.target.value)} /> */}
          <Button onClick={submitSurveyPage1} variant="outlined" color="secondary" className={classes.continueButton}>
            CONTINUE
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.dialogText}>Please complete:</DialogContentText>
          {!todaySet ? <DialogContentText className={classes.dialogText}>Q1</DialogContentText> : null}
          {!symptomsSet ? <DialogContentText className={classes.dialogText}>Q2</DialogContentText> : null}
          {!comparedSet ? <DialogContentText className={classes.dialogText}>Q3</DialogContentText> : null}
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Button onClick={handleClose} className={classes.dialogText}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

SurveyPage1.propTypes = {
  setSurveyPage1: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage1: survey => dispatch(actions.setSurveyPage1(survey)),
  };
};

export default connect(null, mapDispatchToProps)(SurveyPage1);
