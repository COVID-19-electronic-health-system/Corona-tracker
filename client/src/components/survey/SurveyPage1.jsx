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
  withStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Nunito',
    maxWidth: theme.breakpoints.values.md,
    width: '92vw',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
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
    marginTop: '1vh',
    width: '50vw',
    maxWidth: '180px',
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
    background: 'rgba(255,255,255,0.5)',
    color: 'black',
    '&:hover': {
      ...buttonsCss.buttons,
    },
  },
}));

const WellnessSlider = withStyles({
  markLabel: {
    fontSize: '1.17rem',
  },
})(Slider);

const marks = [
  {
    value: 1,
    label: '😥',
  },
  {
    value: 1.5,
    label: 1.5,
  },
  {
    value: 2,
    label: '🙁',
  },
  {
    value: 2.5,
    label: 2.5,
  },
  {
    value: 3,
    label: '😐',
  },
  {
    value: 3.5,
    label: 3.5,
  },
  {
    value: 4,
    label: '🙂',
  },
  {
    value: 4.5,
    label: 4.5,
  },
  {
    value: 5,
    label: '😁',
  },
];

const SurveyPage1 = props => {
  const { setSurveyPage1, dailyfeeling, dailySymptomsFeeling, dailyComparedToYesterday } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [todaySet, setTodaySet] = useState(dailyfeeling);
  const [symptomsSet, setSymptomsSet] = useState(dailySymptomsFeeling);
  const [comparedSet, setComparedSet] = useState(dailyComparedToYesterday);
  const [todayFeeling, setTodayFeeling] = useState(dailyfeeling);
  const [todaySymptoms, setTodaySymptoms] = useState(dailySymptomsFeeling);
  const [comparedFeeling, setcomparedFeeling] = useState(dailyComparedToYesterday);

  const handlerTodayFeeling = e => {
    setTodayFeeling(e);
    setTodaySet(true);
  };

  const handlerTodaySymptoms = e => {
    setTodaySymptoms(e);
    setSymptomsSet(true);
  };

  const handlerComparedFeeling = e => {
    setcomparedFeeling(e.toLowerCase());
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
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            <b>Let&apos;s answer a few questions!</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Be sure to answer truthfully and honestly so that your health record will be accurate and helpful
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
            <b>Q1: How do you feel today?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WellnessSlider
            onChange={(e, val) => handlerTodayFeeling(val)}
            color="secondary"
            defaultValue={todayFeeling || 3}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />

          <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
            <b>Q2: How are your symptoms?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WellnessSlider
            onChange={(e, val) => handlerTodaySymptoms(val)}
            color="secondary"
            defaultValue={todaySymptoms || 3}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />

          <Typography variant="subtitle1">
            <b>Q3: How are your feeling compared to yesterday?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
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

        <Grid item xs={12}>
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
  dailyfeeling: PropTypes.number,
  dailySymptomsFeeling: PropTypes.number,
  dailyComparedToYesterday: PropTypes.string,
};

SurveyPage1.defaultProps = {
  dailyfeeling: 3,
  dailySymptomsFeeling: 3,
  dailyComparedToYesterday: '',
};

const mapStateToProps = state => {
  return {
    dailyfeeling: state.surveyReducer.survey.physical.dailyfeeling,
    dailySymptomsFeeling: state.surveyReducer.survey.physical.dailySymptomsFeeling,
    dailyComparedToYesterday: state.surveyReducer.survey.physical.dailyComparedToYesterday,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage1: survey => dispatch(actions.setSurveyPage1(survey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage1);
