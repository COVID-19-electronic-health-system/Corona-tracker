import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import { useHistory } from 'react-router-dom';
import { Typography, Slider, Button, Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '20em',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Nunito',
    marginTop: '10px',
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
    marginRight: '5px',
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
    backgroundColor: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    color: 'black',
    '&:hover': {
      ...buttonsCss.buttons,
      backgroundColor: `linear-gradient(45deg, #4760ff, #82a4f8)`,
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
    label: 'No',
  },
  {
    value: 1.5,
    label: 1.5,
  },
  {
    value: 2,
    label: 2,
  },
  {
    value: 2.5,
    label: 2.5,
  },
  {
    value: 3,
    label: 3,
  },
  {
    value: 3.5,
    label: 3.5,
  },
  {
    value: 4,
    label: 4,
  },
  {
    value: 4.5,
    label: 4.5,
  },
  {
    value: 5,
    label: 'Yes',
  },
];

const SurveyPage4 = props => {
  const {
    survey,
    setSurveyPage,
    setSurveyPage4,
    setCompleted,
    addObservation,
    clearSurvey,
    surveyPage,
    interest,
    sadness,
    sleep,
    energy,
    appetite,
  } = props;

  const surveyPage4 = {
    interest,
    sadness,
    sleep,
    energy,
    appetite,
  };

  const classes = useStyles();
  const history = useHistory();
  const { userSession } = useBlockstack();
  const [survey4, setSurvey4] = useState(surveyPage4);

  useEffect(() => {
    setSurveyPage4(survey4);
    setCompleted(surveyPage);
  }, [survey4, setSurveyPage4, setCompleted, surveyPage]);

  const handleAnswer = (value, name) => {
    setSurvey4({ ...survey4, [name]: value });
  };

  const goBack = () => {
    setSurveyPage(surveyPage - 1);
  };

  const submitSurveyPage4 = async () => {
    history.push('/');
    setSurveyPage(0);
    addObservation(userSession, survey);
    clearSurvey();
    window.localStorage.setItem('surveyCompleted', 'true');
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
              <b>1: Have you lost interest or pleasure in doing things?</b>
              <div className={classes.margin} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              name="interest"
              value={interest}
              onChange={(e, value) => handleAnswer(value, 'interest')}
              step={0.5}
              valueLabelDisplay="on"
              color="secondary"
              max={5}
              min={1}
              aria-labelledby="discrete-slider"
              marks={marks}
            />
            <br />
            <br />

            <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
              <b>2: Have you been feeling down, depressed, or hopeless?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              name="sadness"
              value={sadness}
              onChange={(e, value) => handleAnswer(value, 'sadness')}
              color="secondary"
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
            <br />
            <br />

            <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
              <b>3: Trouble falling or staying asleep, or sleeping too much?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              name="sleep"
              onChange={(e, value) => handleAnswer(value, 'sleep')}
              value={sleep}
              color="secondary"
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
            <br />
            <br />

            <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
              <b>4: Feeling tired or having little energy?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              name="energy"
              onChange={(e, value) => handleAnswer(value, 'energy')}
              value={energy}
              color="secondary"
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
            <br />
            <br />

            <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
              <b>5: Poor appetite or overeating?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <WellnessSlider
              name="appetite"
              onChange={(e, value) => handleAnswer(value, 'appetite')}
              value={appetite}
              color="secondary"
              aria-labelledby="discrete-slider"
              valueLabelDisplay="on"
              step={0.5}
              min={1}
              max={5}
              marks={marks}
            />
          </Grid>
          <br />
          <Grid item xs={12}>
            <Button onClick={goBack} variant="outlined" color="secondary" className={classes.continueButton}>
              BACK
            </Button>
            <Button onClick={submitSurveyPage4} variant="outlined" color="secondary" className={classes.continueButton}>
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </div>
      <div />
    </>
  );
};

SurveyPage4.propTypes = {
  survey: PropTypes.objectOf(Object).isRequired,
  setSurveyPage4: PropTypes.func.isRequired,
  setCompleted: PropTypes.func.isRequired,
  interest: PropTypes.number,
  sadness: PropTypes.number,
  sleep: PropTypes.number,
  energy: PropTypes.number,
  appetite: PropTypes.number,
  addObservation: PropTypes.func.isRequired,
  clearSurvey: PropTypes.func.isRequired,
  setSurveyPage: PropTypes.func.isRequired,
  surveyPage: PropTypes.number.isRequired,
};

SurveyPage4.defaultProps = {
  interest: 3,
  sadness: 3,
  sleep: 3,
  energy: 3,
  appetite: 3,
};

const mapStateToProps = state => {
  return {
    survey: state.surveyReducer.survey,
    interest: state.surveyReducer.survey.nonPhysical.interest,
    sadness: state.surveyReducer.survey.nonPhysical.sadness,
    sleep: state.surveyReducer.survey.nonPhysical.sleep,
    energy: state.surveyReducer.survey.nonPhysical.energy,
    appetite: state.surveyReducer.survey.nonPhysical.appetite,
    surveyPage: state.surveyReducer.surveyPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage: page => dispatch(actions.setSurveyPage(page)),
    setSurveyPage4: survey => dispatch(actions.setSurveyPage4(survey)),
    addObservation: (userSession, survey) => dispatch(actions.addObservation(userSession, survey)),
    clearSurvey: () => dispatch(actions.clearSurvey()),
    setCompleted: page => dispatch(actions.setCompleted(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage4);
