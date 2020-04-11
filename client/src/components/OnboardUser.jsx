/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useBlockstack } from 'react-blockstack';
import { Typography, Grid, ButtonGroup, Button } from '@material-ui/core';
import actions from '../redux/actions/actions';
import profileImg from '../img/profileBlue.png';

import buttonsCss from '../css/buttons';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
  },
  buttonFemale: {
    ...buttonsCss.buttons,

    margin: '5px 0px 0px 9px',
    background: '#4760ff',
    width: '75px',
  },
  buttonMale: {
    ...buttonsCss.buttons,

    background: '#4760ff',
    margin: '5px 10px 0px 0px',
    width: '75px',
    height: '40px',
  },
  saveButton: {
    ...buttonsCss.buttons,
    margin: '0px 8px 2px 8px',
    width: '300px',
    cursor: 'pointer',
    height: '3.5em',
    marginTop: '2em',
  },
  image: {
    maxWidth: '120px',
  },
  inputField: {
    ...buttonsCss.buttons,
    textAlign: 'center',
    width: '160px',
    height: '40px',

    background: '#4760ff',
    '&::placeholder': {
      color: 'white',
    },

    '&:-ms-input-placeholder': {
      color: 'white',
    },

    '&::-ms-input-placeholder': {
      color: 'white',
    },
  },
  location: {
    ...buttonsCss.buttons,
    textAlign: 'center',
    color: 'white',
    background: '#4760ff',
    width: '50px',
    height: '40px',
    margin: '5px 2px 5px 0px',
    '&::placeholder': {
      color: 'white',
    },

    '&:-ms-input-placeholder': {
      color: 'white',
    },

    '&::-ms-input-placeholder': {
      color: 'white',
    },
  },
}));

const blankForm = {
  age: '',
  gender: '',
  city: '',
  state: '',
  zip: '',
};

const OnboardUser = props => {
  const history = useHistory();
  const { setDemographicsComorbiditiesThunk } = props;
  const { userSession } = useBlockstack();
  const [formState, setFormState] = useState(blankForm);
  const handleChange = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid container alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h5">
            <b>Welcome to CoronaTracker!</b>
          </Typography>
          <Typography variant="subtitle1" paragraph color="textSecondary">
            Let&apos;s get your profile set up with a few quick questions and start logging your health:
          </Typography>
        </Grid>
        <Grid item>
          <img src={profileImg} className={classes.image} alt="Profile" />
          <Typography variant="h6">
            <b>PROFILE</b>
          </Typography>
        </Grid>
        <div>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>Age (Years):</b>
              </Typography>
            </Grid>
            <Grid item>
              <input
                className={classes.inputField}
                name="age"
                placeholder="Click Here"
                value={formState.age}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>Gender:</b>
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      gender: 'male',
                    });
                  }}
                  className={classes.buttonMale}
                  style={
                    formState.gender === 'male' ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' } : {}
                  }
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      gender: 'female',
                    });
                  }}
                  className={classes.buttonFemale}
                  style={
                    formState.gender === 'female' ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' } : {}
                  }
                >
                  Female
                </button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>City, State & ZIP:</b>
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <input
                  name="city"
                  value={formState.city}
                  onChange={handleChange}
                  placeholder="City"
                  className={classes.location}
                />
                <input
                  name="state"
                  value={formState.state}
                  onChange={handleChange}
                  placeholder="State"
                  className={classes.location}
                />
                <input
                  name="zip"
                  value={formState.zip}
                  onChange={handleChange}
                  placeholder="Zip"
                  className={classes.location}
                />
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>Do you smoke?</b>
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      isSmoker: 'yes',
                    });
                  }}
                  className={classes.buttonMale}
                  style={
                    formState.isSmoker === 'yes' ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' } : {}
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      isSmoker: 'no',
                    });
                  }}
                  className={classes.buttonFemale}
                  style={
                    formState.isSmoker === 'no' ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' } : {}
                  }
                >
                  No
                </button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>Do you have obesity?</b>
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      isObese: 'yes',
                    });
                  }}
                  className={classes.buttonMale}
                  style={
                    formState.isObese === 'yes' ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' } : {}
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      isObese: 'no',
                    });
                  }}
                  className={classes.buttonFemale}
                  style={
                    formState.isObese === 'no' ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' } : {}
                  }
                >
                  No
                </button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>Do you have asthma?</b>
              </Typography>
            </Grid>
            <Grid item>
              <ButtonGroup>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      isAsthmatic: 'yes',
                    });
                  }}
                  className={classes.buttonMale}
                  style={
                    formState.isAsthmatic === 'yes'
                      ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' }
                      : {}
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={e => {
                    e.preventDefault();
                    setFormState({
                      ...formState,
                      isAsthmatic: 'no',
                    });
                  }}
                  className={classes.buttonFemale}
                  style={
                    formState.isAsthmatic === 'no'
                      ? { backgroundColor: '#82a4f8', outline: 'none', color: 'wheat' }
                      : {}
                  }
                >
                  No
                </button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Button
            onClick={() => {
              // setDemographicsComorbiditiesThunk(formState, userSession).then(() => history.push('/'));
              setDemographicsComorbiditiesThunk(formState, userSession);
              history.push('/');
            }}
            className={classes.saveButton}
          >
            SAVE MY RESPONSES
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

OnboardUser.propTypes = {
  setDemographicsComorbiditiesThunk: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    setDemographicsComorbiditiesThunk: (formData, userSession) =>
      dispatch(actions.setDemographicsComorbiditiesThunk(formData, userSession)),
  };
};

export default connect(null, mapDispatchToProps)(OnboardUser);
