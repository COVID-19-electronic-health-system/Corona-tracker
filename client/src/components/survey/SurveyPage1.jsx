import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, Button, Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '16px 16px 10em 16px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Nunito',
    maxWidth: theme.breakpoints.values.md,
    width: '92vw',
    marginBottom: '8vh',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
  },
  continueButton: {
    ...buttonsCss.buttons,
    marginTop: '1vh',
    width: '50vw',
    maxWidth: '180px',
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
  const {
    setSurveyPage,
    setSurveyPage1,
    dailyfeeling,
    dailySymptomsFeeling,
    dailyComparedToYesterday,
    surveyPage,
    setCompleted,
  } = props;

  const surveyPage1 = {
    dailyfeeling,
    dailySymptomsFeeling,
    dailyComparedToYesterday,
  };
  const classes = useStyles();
  const [survey1, setSurvey1] = useState(surveyPage1);

  useEffect(() => {
    setSurveyPage1(survey1);
    setCompleted(surveyPage);
  }, [survey1, setSurveyPage1, setCompleted, surveyPage]);

  const handleAnswer = (val, name) => {
    setSurvey1({ ...survey1, [name]: val });
  };

  const submitSurveyPage1 = async () => {
    setSurveyPage(surveyPage + 1);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" spacing={4}>
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
        <Grid container spacing={3} direction="column" justify="space-between">
          <Grid item xs={12}>
            <Typography variant="subtitle1" id="today-feeling-slider" gutterBottom>
              <b>Q1: How do you feel today?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              onChange={(e, val) => handleAnswer(val, 'dailyfeeling')}
              color="secondary"
              value={dailyfeeling}
              aria-labelledby="today-feeling-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} direction="column" justify="space-between">
          <Grid item xs={12}>
            <Typography variant="subtitle1" id="today-symptoms-slider" gutterBottom>
              <b>Q2: How are your symptoms?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              onChange={(e, val) => handleAnswer(val, 'dailySymptomsFeeling')}
              color="secondary"
              value={dailySymptomsFeeling}
              aria-labelledby="today-symptoms-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} direction="column" justify="space-between">
          <Grid item xs={12}>
            <Typography variant="subtitle1" id="compared-feeling-slider" gutterBottom>
              <b>Q3: How are your feeling compared to yesterday?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              onChange={(e, val) => handleAnswer(val, 'dailyComparedToYesterday')}
              color="secondary"
              value={dailyComparedToYesterday}
              aria-labelledby="compared-feeling-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={submitSurveyPage1} variant="outlined" color="secondary" className={classes.continueButton}>
            CONTINUE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

SurveyPage1.propTypes = {
  setSurveyPage1: PropTypes.func.isRequired,
  dailyfeeling: PropTypes.number,
  dailySymptomsFeeling: PropTypes.number,
  dailyComparedToYesterday: PropTypes.number,
  setSurveyPage: PropTypes.func.isRequired,
  surveyPage: PropTypes.number.isRequired,
  setCompleted: PropTypes.func.isRequired,
};

SurveyPage1.defaultProps = {
  dailyfeeling: 3,
  dailySymptomsFeeling: 3,
  dailyComparedToYesterday: 3,
};

const mapStateToProps = state => {
  return {
    dailyfeeling: state.surveyReducer.survey.physical.dailyfeeling,
    dailySymptomsFeeling: state.surveyReducer.survey.physical.dailySymptomsFeeling,
    dailyComparedToYesterday: state.surveyReducer.survey.physical.dailyComparedToYesterday,
    surveyPage: state.surveyReducer.surveyPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage1: survey => dispatch(actions.setSurveyPage1(survey)),
    setSurveyPage: page => dispatch(actions.setSurveyPage(page)),
    setCompleted: page => dispatch(actions.setCompleted(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage1);
