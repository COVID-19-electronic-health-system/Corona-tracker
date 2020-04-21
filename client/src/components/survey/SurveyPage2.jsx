import React, { useState } from 'react';
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
  },
  continueButtonGroup: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '4em',
    },
  },
}));

const SurveyPage2 = props => {
  const {
    setSurveyPage2,
    toSurveyPage1,
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
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [fever, setFever] = useState(feverSeverity);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(shortnessOfBreathSeverity);
  const [chills, setChills] = useState(chillsSeverity);
  const [dryCough, setDryCough] = useState(coughSeverity);
  const [fatigue, setFatigue] = useState(fatigueSeverity);
  const [soreThroat, setSoreThroat] = useState(soreThroatSeverity);
  const [bluish, setBluish] = useState(bluishnessSeverity);
  const [giIssues, setGiIssues] = useState(giIssueSeverity);
  const [headache, setHeadache] = useState(headacheSeverity);
  const [lostTaste, setLostTaste] = useState(lostTasteSeverity);
  const [lostSmell, setLostSmell] = useState(lostSmellSeverity);

  const handleFever = value => {
    setFever(value);
  };

  const handleshortnessOfBreath = value => {
    setShortnessOfBreath(value.toLowerCase());
  };

  const handlechills = value => {
    setChills(value.toLowerCase());
  };

  const handledryCough = value => {
    setDryCough(value.toLowerCase());
  };

  const handlefatigue = value => {
    setFatigue(value.toLowerCase());
  };

  const handlesoreThroat = value => {
    setSoreThroat(value.toLowerCase());
  };

  const handlebluish = value => {
    setBluish(value.toLowerCase());
  };

  const handleGiIssues = value => {
    setGiIssues(value.toLowerCase());
  };

  const handleHeadache = value => {
    setHeadache(value.toLowerCase());
  };

  const handleLostTaste = value => {
    setLostTaste(value.toLowerCase());
  };

  const handleLostSmell = value => {
    setLostSmell(value.toLowerCase());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendBackToPage1 = () => {
    const currentSurveyState = {
      fever,
      shortnessOfBreath,
      chills,
      dryCough,
      fatigue,
      soreThroat,
      bluish,
      giIssues,
      headache,
      lostTaste,
      lostSmell,
    };
    toSurveyPage1(currentSurveyState);
  };

  const submitSurveyPage2 = async () => {
    if (
      !fever ||
      shortnessOfBreath === '' ||
      chills === '' ||
      dryCough === '' ||
      fatigue === '' ||
      soreThroat === '' ||
      bluish === '' ||
      giIssues === '' ||
      headache === '' ||
      lostTaste === '' ||
      lostSmell === ''
    ) {
      setOpen(true);
    } else {
      const surveyPage2 = {
        fever,
        shortnessOfBreath,
        chills,
        dryCough,
        fatigue,
        soreThroat,
        bluish,
        giIssues,
        headache,
        lostTaste,
        lostSmell,
      };

      setSurveyPage2(surveyPage2);
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
            onChange={e => handleFever(e.target.value)}
            className={classes.temperatureField}
            defaultValue={fever}
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
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Shortness of breath
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={shortnessOfBreath === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={shortnessOfBreath === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={shortnessOfBreath === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Chills
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={chills === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={chills === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={chills === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Dry cough
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={dryCough === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={dryCough === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={dryCough === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Fatigue
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={fatigue === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={fatigue === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={fatigue === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Sore throat
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={soreThroat === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={soreThroat === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={soreThroat === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Bluish lips or face
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={bluish === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={bluish === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={bluish === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1" className={classes.symptomText}>
            Headache
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={headache === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleHeadache(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={headache === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleHeadache(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={headache === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleHeadache(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={`${classes.gridItem} ${classes.lostTaste}`}>
          <Typography variant="body1" className={classes.symptomText}>
            Loss of Taste
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={lostTaste === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleLostTaste(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={lostTaste === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleLostTaste(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={lostTaste === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleLostTaste(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={`${classes.gridItem} ${classes.lostSmell}`}>
          <Typography variant="body1" className={classes.symptomText}>
            Loss of Smell
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={lostSmell === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleLostSmell(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={lostSmell === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleLostSmell(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={lostSmell === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleLostSmell(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={`${classes.gridItem} ${classes.giIssues}`}>
          <Typography variant="body1" className={classes.symptomText}>
            Gastrointestinnal issues (i.e. nausea, diarrhea, vomiting, abdominal pain)
          </Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="minimal"
              className={giIssues === 'minimal' ? classes.selectedButton : classes.button}
              onClick={e => handleGiIssues(e.target.innerText)}
            >
              Minimal
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={giIssues === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleGiIssues(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={giIssues === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleGiIssues(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      {/* <div className={classes.continueButtonGroup}> */}
      <ButtonGroup className={classes.continueButtonGroup}>
        <Button onClick={sendBackToPage1} variant="outlined" color="secondary" className={classes.continueButton}>
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
          {!fever ? <DialogContentText className={classes.dialogText}>Temperature reading</DialogContentText> : null}
          {shortnessOfBreath === '' ? (
            <DialogContentText className={classes.dialogText}>Shortness of breath</DialogContentText>
          ) : null}
          {chills === '' ? <DialogContentText className={classes.dialogText}>Chills</DialogContentText> : null}
          {dryCough === '' ? <DialogContentText className={classes.dialogText}>Dry cough</DialogContentText> : null}
          {fatigue === '' ? <DialogContentText className={classes.dialogText}>Fatigue</DialogContentText> : null}
          {soreThroat === '' ? <DialogContentText className={classes.dialogText}>Sore throat</DialogContentText> : null}
          {bluish === '' ? (
            <DialogContentText className={classes.dialogText}>Bluish lips or face</DialogContentText>
          ) : null}
          {giIssues === '' ? (
            <DialogContentText className={classes.dialogText}>Gastrointestinnal issues</DialogContentText>
          ) : null}
          {headache === '' ? <DialogContentText className={classes.dialogText}>Headache</DialogContentText> : null}
          {lostTaste === '' ? (
            <DialogContentText className={classes.dialogText}>Loss of Taste</DialogContentText>
          ) : null}
          {lostSmell === '' ? (
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
  toSurveyPage1: PropTypes.func.isRequired,
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage2: survey => dispatch(actions.setSurveyPage2(survey)),
    toSurveyPage1: survey => dispatch(actions.toSurveyPage1(survey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage2);
