import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Slider, Button, Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '10em',
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
  } = props;
  const classes = useStyles();
  const [todayFeeling, setTodayFeeling] = useState(dailyfeeling);
  const [todaySymptoms, setTodaySymptoms] = useState(dailySymptomsFeeling);
  const [comparedFeeling, setcomparedFeeling] = useState(dailyComparedToYesterday);

  const surveyPage1 = {
    todayFeeling,
    todaySymptoms,
    comparedFeeling,
  };
  const handlerTodayFeeling = e => {
    setTodayFeeling(e);
    setSurveyPage1({ ...surveyPage1, todayFeeling: e });
  };

  const handlerTodaySymptoms = e => {
    setTodaySymptoms(e);
    setSurveyPage1({ ...surveyPage1, todaySymptoms: e });
  };

  const handlerComparedFeeling = e => {
    setcomparedFeeling(e);
    setSurveyPage1({ ...surveyPage1, comparedFeeling: e });
  };

  const submitSurveyPage1 = async () => {
    setSurveyPage1(surveyPage1);
    setSurveyPage(surveyPage + 1);
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
          <Typography variant="subtitle1" id="today-feeling-slider" gutterBottom>
            <b>Q1: How do you feel today?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WellnessSlider
            onChange={(e, val) => handlerTodayFeeling(val)}
            color="secondary"
            value={todayFeeling}
            aria-labelledby="today-feeling-slider"
            valueLabelDisplay="on"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />

          <Typography variant="subtitle1" id="today-symptoms-slider" gutterBottom>
            <b>Q2: How are your symptoms?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WellnessSlider
            onChange={(e, val) => handlerTodaySymptoms(val)}
            color="secondary"
            value={todaySymptoms}
            aria-labelledby="today-symptoms-slider"
            valueLabelDisplay="on"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />

          <Typography variant="subtitle1" id="compared-feeling-slider" gutterBottom>
            <b>Q3: How are your feeling compared to yesterday?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <WellnessSlider
            onChange={(e, val) => handlerComparedFeeling(val)}
            color="secondary"
            value={comparedFeeling}
            aria-labelledby="compared-feeling-slider"
            valueLabelDisplay="on"
            step={0.5}
            min={1}
            max={5}
            marks={marks}
          />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage1);
