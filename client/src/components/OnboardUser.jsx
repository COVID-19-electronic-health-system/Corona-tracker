import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useBlockstack } from 'react-blockstack';
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  Grid,
  ButtonGroup,
  Button,
  TextField,
  Container,
  InputLabel,
} from '@material-ui/core';
import actions from '../redux/actions/actions';
import buttonsCss from '../css/buttons';
import { states } from '../utils/constants';
import { initialState as onboardingInitialState } from '../redux/reducers/onboarding';

const useStyles = makeStyles(() => ({
  buttonRight: {
    ...buttonsCss.buttons,
    background: 'rgba(255,255,255,0.5)',
    color: 'black',
    margin: '5px 0px 0px 9px',
    width: '75px',
  },
  buttonLeft: {
    ...buttonsCss.buttons,
    background: 'rgba(255,255,255,0.5)',
    color: 'black',
    height: '40px',
    margin: '5px 10px 0px 0px',
    width: '75px',
  },
  selectedButton: {
    ...buttonsCss.buttons,
    color: 'wheat',
  },
  saveButton: {
    ...buttonsCss.buttons,
    cursor: 'pointer',
    height: '3.5em',
    margin: '2em 8px 2px 8px',
    textTransform: 'uppercase',
    width: '300px',
  },
  fullWidth: {
    width: '100%',
  },
}));

const OnboardUser = props => {
  const { setDemographicsComorbiditiesThunk, demographicsComorbidities } = props;
  const { userSession } = useBlockstack();
  const classes = useStyles();
  const history = useHistory();
  const [formState, setFormState] = useState(onboardingInitialState.demographicsComorbidities);

  useEffect(() => {
    setFormState(demographicsComorbidities);
  }, [demographicsComorbidities, setFormState]);

  const handleInputChange = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await setDemographicsComorbiditiesThunk(formState, userSession);
    history.push('/');
  };

  return (
    <Container maxWidth="xs">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5">
            <b>Welcome to CoronaTracker!</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" paragraph color="textSecondary">
            Let&apos;s get your profile set up with a few quick questions and start logging your health:
          </Typography>
        </Grid>
        <Grid item sm={4} xs={6}>
          <FormControl variant="outlined" className={classes.fullWidth}>
            <InputLabel id="gender-select-label">Gender</InputLabel>
            <Select
              labelId="gender-select-label"
              id="gender-select"
              name="gender"
              label="Gender"
              value={formState.gender}
              onChange={handleInputChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="nonbinary">Non-Binary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={6}>
          <TextField
            type="number"
            name="age"
            label="Age (Years)"
            value={formState.age}
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            name="city"
            label="City"
            value={formState.city}
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={3} xs={6}>
          <FormControl variant="outlined" className={classes.fullWidth}>
            <InputLabel id="state-select-label">State</InputLabel>
            <Select
              labelId="state-select-label"
              id="state-select"
              label="State"
              name="state"
              value={formState.state}
              onChange={handleInputChange}
            >
              {states.map(state => (
                <MenuItem key={state.abbreviation} value={state.abbreviation}>
                  {state.abbreviation}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4} xs={6}>
          <TextField
            type="text"
            name="zip"
            label="Zip Code"
            value={formState.zip}
            variant="outlined"
            fullWidth
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            <b>Do you smoke?</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ButtonGroup>
            <button
              type="button"
              name="isSmoker"
              value="yes"
              onClick={handleInputChange}
              className={`${classes.buttonLeft} ${formState.isSmoker === 'yes' && classes.selectedButton}`}
            >
              Yes
            </button>
            <button
              type="button"
              name="isSmoker"
              value="no"
              onClick={handleInputChange}
              className={`${classes.buttonRight} ${formState.isSmoker === 'no' && classes.selectedButton}`}
            >
              No
            </button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            <b>Are you Obese (BMI)?</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ButtonGroup>
            <button
              type="button"
              name="isObese"
              value="yes"
              onClick={handleInputChange}
              className={`${classes.buttonLeft} ${formState.isObese === 'yes' && classes.selectedButton}`}
            >
              Yes
            </button>
            <button
              type="button"
              name="isObese"
              value="no"
              onClick={handleInputChange}
              className={`${classes.buttonRight} ${formState.isObese === 'no' && classes.selectedButton}`}
            >
              No
            </button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            <b>Do you have asthma?</b>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <ButtonGroup>
            <button
              type="button"
              name="isAsthmatic"
              value="yes"
              onClick={handleInputChange}
              className={`${classes.buttonLeft} ${formState.isAsthmatic === 'yes' && classes.selectedButton}`}
            >
              Yes
            </button>
            <button
              type="button"
              name="isAsthmatic"
              value="no"
              onClick={handleInputChange}
              className={`${classes.buttonRight} ${formState.isAsthmatic === 'no' && classes.selectedButton}`}
            >
              No
            </button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.saveButton} onClick={handleSave}>
            Save my responses
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

OnboardUser.propTypes = {
  setDemographicsComorbiditiesThunk: PropTypes.func.isRequired,
  demographicsComorbidities: PropTypes.shape({
    age: PropTypes.string,
    gender: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    isSmoker: PropTypes.string,
    isObese: PropTypes.string,
    isAsthmatic: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => {
  return {
    demographicsComorbidities: state.onboardingReducer.demographicsComorbidities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDemographicsComorbiditiesThunk: (formData, userSession) =>
      dispatch(actions.setDemographicsComorbiditiesThunk(formData, userSession)),
    fetchDemographicsComorbidities: userSession => {
      dispatch(actions.fetchDemographicsComorbidities(userSession));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnboardUser);
