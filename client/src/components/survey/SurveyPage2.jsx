import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  ButtonGroup,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const buttonWidth = '75px';
const buttonHeight = '35px';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: '20em',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: theme.breakpoints.values.md,
    overflow: 'auto',
    padding: '4px',
    WebkitOverflowScrolling: 'touch',
  },
  buttons: {
    ...buttonsCss.buttons,
    width: '20vw',
    height: '5vh',
    margin: '1.2em',
  },
  continueButton: {
    ...buttonsCss.buttons,

    margin: '20px 8px 10px 8px',
    width: '160px',
  },
  temperatureField: {
    marginBottom: '1em',
  },
  grid: {
    marginTop: '2em',
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    marginTop: '2em',
  },
  symptomText: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75rem',
    },
  },
  giIssues: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '0',
    },
  },
  dialog: {
    background: '#7a9cf9',
  },
  dialogText: {
    color: 'white',
  },
  buttonGroup: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'center',
  },
  selectedButton: {
    ...buttonsCss.buttons,
    margin: '0.5em',
    width: buttonWidth,
    height: buttonHeight,
  },
  button: {
    ...buttonsCss.buttons,
    width: buttonWidth,
    height: buttonHeight,
    margin: '0.5em',
    background: 'rgba(255,255,255,0.5)',
    color: 'black',
    '&:hover': {
      ...buttonsCss.buttons,
      width: buttonWidth,
      height: buttonHeight,
    },
    '&:active': {
      ...buttonsCss.buttons,
      width: buttonWidth,
      height: buttonHeight,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  continueButtonGroup: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '4em',
    },
  },
}));

const SurveyPage2 = props => {
  const {
    setSurveyPage,
    setSurveyPage2,
    feverSeverity,
    shortnessOfBreathSeverity,
    chillsSeverity,
    coughSeverity,
    fatigueSeverity,
    soreThroatSeverity,
    bluishnessSeverity,
    giIssueSeverity,
    headacheSeverity,
    lostTasteSeverity,
    lostSmellSeverity,
    surveyPage,
    setCompleted,
  } = props;

  const surveyPage2 = {
    feverSeverity,
    shortnessOfBreathSeverity,
    chillsSeverity,
    coughSeverity,
    fatigueSeverity,
    soreThroatSeverity,
    bluishnessSeverity,
    giIssueSeverity,
    headacheSeverity,
    lostTasteSeverity,
    lostSmellSeverity,
  };

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [survey2, setSurvey2] = useState(surveyPage2);

  useEffect(() => {
    setSurveyPage2(survey2);
  }, [survey2, setSurveyPage2]);

  const handleFever = value => {
    setSurvey2({ ...survey2, feverSeverity: value });
  };
  const handleAnswer = (value, name) => {
    setSurvey2({ ...survey2, [name]: value.toLowerCase() });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goBack = () => {
    setSurveyPage(surveyPage - 1);
  };

  const submitSurveyPage2 = async () => {
    if (
      !feverSeverity ||
      shortnessOfBreathSeverity === '' ||
      chillsSeverity === '' ||
      coughSeverity === '' ||
      fatigueSeverity === '' ||
      soreThroatSeverity === '' ||
      bluishnessSeverity === '' ||
      giIssueSeverity === '' ||
      headacheSeverity === '' ||
      lostTasteSeverity === '' ||
      lostSmellSeverity === ''
    ) {
      setOpen(true);
    } else {
      setCompleted(surveyPage);
      setSurveyPage(surveyPage + 1);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        <b>Q4: What is your temperature reading today?</b>
      </Typography>
      <Grid container justify="center" direction="row" spacing={1} className={classes.grid}>
        <Grid item xs={3}>
          <TextField
            type="number"
            onChange={e => handleFever(e.target.valueAsNumber)}
            className={classes.temperatureField}
            defaultValue={feverSeverity}
          />
        </Grid>
        <Grid item>
          <Typography> &#8457;</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle2">
        <b>Q5: Which symptoms are you feeling or experiencing?</b>
      </Typography>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Shortness of breath
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={shortnessOfBreathSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'shortnessOfBreathSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={shortnessOfBreathSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'shortnessOfBreathSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={shortnessOfBreathSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'shortnessOfBreathSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={shortnessOfBreathSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'shortnessOfBreathSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Chills
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={chillsSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'chillsSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={chillsSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'chillsSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={chillsSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'chillsSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={chillsSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'chillsSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Dry cough
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={coughSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'coughSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={coughSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'coughSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={coughSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'coughSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={coughSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'coughSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Fatigue
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={fatigueSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'fatigueSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={fatigueSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'fatigueSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={fatigueSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'fatigueSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={fatigueSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'fatigueSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Sore throat
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={soreThroatSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'soreThroatSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={soreThroatSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'soreThroatSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={soreThroatSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'soreThroatSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={soreThroatSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'soreThroatSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Bluish lips or face
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={bluishnessSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'bluishnessSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={bluishnessSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'bluishnessSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={bluishnessSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'bluishnessSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={bluishnessSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'bluishnessSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Headache
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={headacheSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'headacheSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={headacheSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'headacheSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={headacheSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'headacheSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={headacheSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'headacheSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={`${classes.gridItem} ${classes.lostTaste}`}>
          <Typography variant="body1" className={classes.symptomText}>
            Loss of Taste
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={lostTasteSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostTasteSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={lostTasteSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostTasteSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={lostTasteSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostTasteSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={lostTasteSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostTasteSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={`${classes.gridItem} ${classes.lostSmell}`}>
          <Typography variant="body1" className={classes.symptomText}>
            Loss of Smell
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={lostSmellSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostSmellSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={lostSmellSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostSmellSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={lostSmellSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostSmellSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={lostSmellSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'lostSmellSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={2} sm={6} className={`${classes.gridItem} ${classes.giIssues}`}>
          <Typography variant="body1" className={classes.symptomText}>
            Gastrointestinnal issues (i.e. nausea, diarrhea, vomiting, abdominal pain)
          </Typography>
        </Grid>
        <Grid item xs={10} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={giIssueSeverity === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'giIssueSeverity')}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="minimal"
              className={giIssueSeverity === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'giIssueSeverity')}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={giIssueSeverity === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'giIssueSeverity')}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={giIssueSeverity === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleAnswer(e.target.textContent, 'giIssueSeverity')}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      {/* <div className={classes.continueButtonGroup}> */}
      <ButtonGroup className={classes.continueButtonGroup}>
        <Button onClick={goBack} variant="outlined" color="secondary" className={classes.continueButton}>
          BACK
        </Button>
        <Button onClick={submitSurveyPage2} variant="outlined" color="secondary" className={classes.continueButton}>
          CONTINUE
        </Button>
      </ButtonGroup>
      {/* </div> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.dialogText}>Please complete:</DialogContentText>
          {!feverSeverity ? (
            <DialogContentText className={classes.dialogText}>Temperature reading</DialogContentText>
          ) : null}
          {shortnessOfBreathSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Shortness of breath</DialogContentText>
          ) : null}
          {chillsSeverity === '' ? <DialogContentText className={classes.dialogText}>Chills</DialogContentText> : null}
          {coughSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Dry cough</DialogContentText>
          ) : null}
          {fatigueSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Fatigue</DialogContentText>
          ) : null}
          {soreThroatSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Sore throat</DialogContentText>
          ) : null}
          {bluishnessSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Bluish lips or face</DialogContentText>
          ) : null}
          {giIssueSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Gastrointestinnal issues</DialogContentText>
          ) : null}
          {headacheSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Headache</DialogContentText>
          ) : null}
          {lostTasteSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Loss of Taste</DialogContentText>
          ) : null}
          {lostSmellSeverity === '' ? (
            <DialogContentText className={classes.dialogText}>Loss of Smell</DialogContentText>
          ) : null}
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

SurveyPage2.propTypes = {
  setSurveyPage2: PropTypes.func.isRequired,
  feverSeverity: PropTypes.number,
  shortnessOfBreathSeverity: PropTypes.string,
  chillsSeverity: PropTypes.string,
  coughSeverity: PropTypes.string,
  fatigueSeverity: PropTypes.string,
  soreThroatSeverity: PropTypes.string,
  bluishnessSeverity: PropTypes.string,
  giIssueSeverity: PropTypes.string,
  headacheSeverity: PropTypes.string,
  lostTasteSeverity: PropTypes.string,
  lostSmellSeverity: PropTypes.string,
  setSurveyPage: PropTypes.func.isRequired,
  surveyPage: PropTypes.number.isRequired,
  setCompleted: PropTypes.func.isRequired,
};

SurveyPage2.defaultProps = {
  feverSeverity: 98.6,
  shortnessOfBreathSeverity: '',
  chillsSeverity: '',
  coughSeverity: '',
  fatigueSeverity: '',
  soreThroatSeverity: '',
  bluishnessSeverity: '',
  giIssueSeverity: '',
  headacheSeverity: '',
  lostTasteSeverity: '',
  lostSmellSeverity: '',
};

const mapStateToProps = state => {
  return {
    feverSeverity: state.surveyReducer.survey.physical.feverSeverity,
    shortnessOfBreathSeverity: state.surveyReducer.survey.physical.shortnessOfBreathSeverity,
    chillsSeverity: state.surveyReducer.survey.physical.chillsSeverity,
    coughSeverity: state.surveyReducer.survey.physical.coughSeverity,
    fatigueSeverity: state.surveyReducer.survey.physical.fatigueSeverity,
    soreThroatSeverity: state.surveyReducer.survey.physical.soreThroatSeverity,
    bluishnessSeverity: state.surveyReducer.survey.physical.bluishnessSeverity,
    giIssueSeverity: state.surveyReducer.survey.physical.giIssueSeverity,
    headacheSeverity: state.surveyReducer.survey.physical.headacheSeverity,
    lostTasteSeverity: state.surveyReducer.survey.physical.lostTasteSeverity,
    lostSmellSeverity: state.surveyReducer.survey.physical.lostSmellSeverity,
    surveyPage: state.surveyReducer.surveyPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage2: survey => dispatch(actions.setSurveyPage2(survey)),
    setSurveyPage: page => dispatch(actions.setSurveyPage(page)),
    setCompleted: page => dispatch(actions.setCompleted(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage2);
