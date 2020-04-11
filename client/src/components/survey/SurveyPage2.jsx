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
}));

const SurveyPage2 = props => {
  const {
    setSurveyPage2,
    toSurveyPage1,
    feverSeverity,
    shortnessOfBreathSeverity,
    chillsSeverity,
    coughSeverity,
    chestPainSeverity,
    fatigueSeverity,
    soreThroatSeverity,
    bluishnessSeverity,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [fever, setFever] = useState(feverSeverity);
  const [shortnessOfBreath, setShortnessOfBreath] = useState(shortnessOfBreathSeverity);
  const [chills, setChills] = useState(chillsSeverity);
  const [dryCough, setDryCough] = useState(coughSeverity);
  const [chestPain, setChestPain] = useState(chestPainSeverity);
  const [fatigue, setFatigue] = useState(fatigueSeverity);
  const [soreThroat, setSoreThroat] = useState(soreThroatSeverity);
  const [bluish, setBluish] = useState(bluishnessSeverity);

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

  const handlechestPain = value => {
    setChestPain(value.toLowerCase());
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

  const handleClose = () => {
    setOpen(false);
  };

  const sendBackToPage1 = () => {
    const currentSurveyState = {
      fever,
      shortnessOfBreath,
      chills,
      dryCough,
      chestPain,
      fatigue,
      soreThroat,
      bluish,
    };
    toSurveyPage1(currentSurveyState);
  };

  const submitSurveyPage2 = async () => {
    if (
      fever === -1 ||
      shortnessOfBreath === '' ||
      chills === '' ||
      dryCough === '' ||
      chestPain === '' ||
      fatigue === '' ||
      soreThroat === '' ||
      bluish === ''
    ) {
      setOpen(true);
    } else {
      const surveyPage2 = {
        fever,
        shortnessOfBreath,
        chills,
        dryCough,
        chestPain,
        fatigue,
        soreThroat,
        bluish,
      };

      setSurveyPage2(surveyPage2);
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">
        <b>Q4: What is your temperature?</b>
      </Typography>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3}>
          <TextField
            type="number"
            onChange={e => handleFever(e.target.value)}
            className={classes.temperatureField}
            defaultValue={fever}
          >
            Fever?
          </TextField>
        </Grid>
      </Grid>
      <Typography variant="subtitle2">
        <b>Q5: Which of the following are you feeling or exhibiting?</b>
      </Typography>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1">Shortness of Breath?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={shortnessOfBreath === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              None
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
          <Typography variant="body1">Chills?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={chills === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              None
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
          <Typography variant="body1">Dry Cough?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              className={dryCough === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              None
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
          <Typography variant="body1">Chest Pain or Pressure?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={chestPain === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlechestPain(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={chestPain === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlechestPain(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={chestPain === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlechestPain(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} sm={6} className={classes.gridItem}>
          <Typography variant="body1">Fatigue?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={fatigue === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              None
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
          <Typography variant="body1">Sore Throat?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={soreThroat === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              None
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
          <Typography variant="body1">Bluish Lips or Face?</Typography>
        </Grid>
        <Grid item xs={9} sm={6} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={bluish === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              None
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
      <ButtonGroup>
        <Button onClick={sendBackToPage1} variant="outlined" color="secondary" className={classes.continueButton}>
          BACK
        </Button>
        <Button onClick={submitSurveyPage2} variant="outlined" color="secondary" className={classes.continueButton}>
          CONTINUE
        </Button>
      </ButtonGroup>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.dialogText}>Please complete:</DialogContentText>
          {fever === -1 ? <DialogContentText className={classes.dialogText}>Fever</DialogContentText> : null}
          {shortnessOfBreath === '' ? (
            <DialogContentText className={classes.dialogText}>Shortness of Breath</DialogContentText>
          ) : null}
          {chills === '' ? <DialogContentText className={classes.dialogText}>Chills</DialogContentText> : null}
          {dryCough === '' ? <DialogContentText className={classes.dialogText}>Dry Cough</DialogContentText> : null}
          {chestPain === '' ? <DialogContentText className={classes.dialogText}>Chest Pain</DialogContentText> : null}
          {fatigue === '' ? <DialogContentText className={classes.dialogText}>Fatigue</DialogContentText> : null}
          {soreThroat === '' ? <DialogContentText className={classes.dialogText}>Sore Throat</DialogContentText> : null}
          {bluish === '' ? <DialogContentText className={classes.dialogText}>Bluishness</DialogContentText> : null}
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
  chestPainSeverity: PropTypes.string,
  fatigueSeverity: PropTypes.string,
  soreThroatSeverity: PropTypes.string,
  bluishnessSeverity: PropTypes.string,
};

SurveyPage2.defaultProps = {
  feverSeverity: 98.6,
  shortnessOfBreathSeverity: '',
  chillsSeverity: '',
  coughSeverity: '',
  chestPainSeverity: '',
  fatigueSeverity: '',
  soreThroatSeverity: '',
  bluishnessSeverity: '',
};

const mapStateToProps = state => {
  return {
    feverSeverity: state.surveyReducer.survey.physical.feverSeverity,
    shortnessOfBreathSeverity: state.surveyReducer.survey.physical.shortnessOfBreathSeverity,
    chillsSeverity: state.surveyReducer.survey.physical.chillsSeverity,
    coughSeverity: state.surveyReducer.survey.physical.coughSeverity,
    chestPainSeverity: state.surveyReducer.survey.physical.chestPainSeverity,
    fatigueSeverity: state.surveyReducer.survey.physical.fatigueSeverity,
    soreThroatSeverity: state.surveyReducer.survey.physical.soreThroatSeverity,
    bluishnessSeverity: state.surveyReducer.survey.physical.bluishnessSeverity,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage2: survey => dispatch(actions.setSurveyPage2(survey)),
    toSurveyPage1: survey => dispatch(actions.toSurveyPage1(survey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage2);
