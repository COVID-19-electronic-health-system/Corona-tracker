import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import { useHistory } from 'react-router-dom';
import { Typography, Slider, Button, Grid, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';
import BehavioralChart from '../behavior/chart/BehavioralChart';

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
    label: 'Not at All',
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
    label: 'Somewhat',
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
    label: 'A lot',
  },
];

const SurveyPage4 = props => {
  const { setSurveyPage4, toSurveyPage3, survey, addObservation, clearSurvey } = props;
  const classes = useStyles();
  const { interest, sadness, sleep, energy, appetite } = props;
  const history = useHistory();
  const { userSession } = useBlockstack();
  const [interestAnswer, setInterestAnswer] = useState(interest);

  const [sadAnswer, setSadAnswer] = useState(sadness);

  const [sleepAnswer, setSleepAnswer] = useState(sleep);

  const [energyAnswer, setEnergyAnswer] = useState(energy);

  const [appetiteAnswer, setAppetiteAnswer] = useState(appetite);

  const handleChange = (evt, value) => {
    setInterestAnswer(value);
  };

  const handleChange2 = (evt, value) => {
    setSadAnswer(value);
  };

  const handleChange3 = (evt, value) => {
    setSleepAnswer(value);
  };

  const handleChange4 = (evt, value) => {
    setEnergyAnswer(value);
  };

  const handleChange5 = (evt, value) => {
    setAppetiteAnswer(value);
  };

  const sendBackToPage3 = () => {
    const currentSurveyState = {
      interestAnswer,
      sadAnswer,
      sleepAnswer,
      energyAnswer,
      appetiteAnswer,
    };
    toSurveyPage3(currentSurveyState);
  };

  const submitSurveyPage4 = async () => {
    const surveyPage4 = {
      interestAnswer,
      sadAnswer,
      sleepAnswer,
      energyAnswer,
      appetiteAnswer,
    };
    survey.nonPhysical.interest = interestAnswer;
    survey.nonPhysical.sadness = sadAnswer;
    survey.nonPhysical.sleep = sleepAnswer;
    survey.nonPhysical.energy = energyAnswer;
    survey.nonPhysical.appetite = appetiteAnswer;

    history.push('/');

    setSurveyPage4(surveyPage4);
    addObservation(userSession, survey);
    clearSurvey();

    window.localStorage.setItem('surveyCompleted', 'true');
  };

  return (
    <>
      <div className={classes.root} style={{ marginTop: '10px' }}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid container spacing={2} noValidate>
            <Grid item xs={12}>
              <Typography variant="subtitle1" id="discrete-slider" gutterBottom>
                <b>1: Have you lost interest or pleasure in doing things?</b>
                <div className={classes.margin} />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <WellnessSlider
                name="interest"
                defaultValue={1}
                step={0.5}
                valueLabelDisplay="on"
                color="secondary"
                max={5}
                min={1}
                aria-labelledby="discrete-slider"
                marks={marks}
                onChange={handleChange}
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
                defaultValue={1}
                onChange={handleChange2}
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
                onChange={handleChange3}
                defaultValue={1}
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
                onChange={handleChange4}
                defaultValue={1}
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
                name="energy"
                onChange={handleChange5}
                defaultValue={1}
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
              <Button
                onClick={sendBackToPage3}
                variant="outlined"
                color="secondary"
                className={classes.continueButton}
                style={{ marginRight: '5px' }}
              >
                BACK
              </Button>
              <Button
                onClick={submitSurveyPage4}
                variant="outlined"
                color="secondary"
                className={classes.continueButton}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', marginTop: 50, justifyContent: 'flex-end' }} />
      </div>
      <div style={{ height: 500 }}>
        <BehavioralChart />
      </div>
    </>
  );
};

SurveyPage4.propTypes = {
  survey: PropTypes.objectOf(Object).isRequired,
  setSurveyPage4: PropTypes.func.isRequired,
  toSurveyPage3: PropTypes.func.isRequired,
  interest: PropTypes.number,
  sadness: PropTypes.number,
  sleep: PropTypes.number,
  energy: PropTypes.number,
  appetite: PropTypes.number,
  addObservation: PropTypes.func.isRequired,
  clearSurvey: PropTypes.func.isRequired,
};

SurveyPage4.defaultProps = {
  interest: 1,
  sadness: 1,
  sleep: 1,
  energy: 1,
  appetite: 1,
};

const mapStateToProps = state => {
  return {
    survey: state.surveyReducer.survey,
    interest: state.surveyReducer.survey.nonPhysical.interest,
    sadness: state.surveyReducer.survey.nonPhysical.sadness,
    sleep: state.surveyReducer.survey.nonPhysical.sleep,
    energy: state.surveyReducer.survey.nonPhysical.energy,
    appetite: state.surveyReducer.survey.nonPhysical.appetite,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage4: survey => dispatch(actions.setSurveyPage4(survey)),
    toSurveyPage3: survey => dispatch(actions.toSurveyPage3(survey)),
    addObservation: (userSession, survey) => dispatch(actions.addObservation(userSession, survey)),
    clearSurvey: () => dispatch(actions.clearSurvey()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage4);
