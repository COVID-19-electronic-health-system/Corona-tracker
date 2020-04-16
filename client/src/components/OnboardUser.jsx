/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useBlockstack } from 'react-blockstack';
import { Typography, Select, MenuItem, FormControl, Grid, ButtonGroup, Button } from '@material-ui/core';
import actions from '../redux/actions/actions';
import DeletionDialog from './DeletionDialog';
import buttonsCss from '../css/buttons';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
  },
  buttonRight: {
    ...buttonsCss.buttons,

    margin: '5px 0px 0px 9px',
    background: 'rgba(255,255,255,0.5)',
    color: 'black',
    width: '75px',
  },
  buttonLeft: {
    ...buttonsCss.buttons,
    background: 'rgba(255,255,255,0.5)',
    color: 'black',
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
  deleteButton: {
    ...buttonsCss.buttons,
    margin: '0px 8px 2px 8px',
    width: '300px',
    cursor: 'pointer',
    height: '3.5em',
    marginTop: '2em',
    background: `#f64141`,
    '&:hover': {
      boxShadow: '0px 1px 10px 0px #f64141',
      background: `#f64141`,
    },
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
  const [showDeletionDialog, setShowDeletionDialog] = useState(false);
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
        <Grid>
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
                style={
                  formState.age !== null
                    ? {
                        outline: 'none',
                        color: 'wheat',
                      }
                    : {}
                }
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
              <FormControl>
                <Select
                  className={classes.inputField}
                  name="gender"
                  value={formState.gender}
                  onChange={handleChange}
                  displayEmpty
                  style={formState.gender !== '' ? { ...buttonsCss, outline: 'none', color: 'wheat' } : {}}
                >
                  <MenuItem value="" disabled>
                    Click Here
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="nonbinary">Non-Binary</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>City:</b>
              </Typography>
            </Grid>
            <Grid item>
              <input
                name="city"
                value={formState.city}
                onChange={handleChange}
                placeholder="City"
                className={classes.inputField}
                style={
                  formState.city !== null
                    ? {
                        outline: 'none',
                        color: 'wheat',
                      }
                    : {}
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>State:</b>
              </Typography>
            </Grid>
            <Grid item>
              <input
                name="state"
                value={formState.state}
                onChange={handleChange}
                placeholder="State"
                className={classes.inputField}
                style={
                  formState.state !== null
                    ? {
                        outline: 'none',
                        color: 'wheat',
                      }
                    : {}
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="space-between">
            <Grid item>
              <Typography variant="subtitle2" color="textSecondary">
                <b>Zip:</b>
              </Typography>
            </Grid>
            <Grid item>
              <input
                name="zip"
                value={formState.zip}
                onChange={handleChange}
                placeholder="Zip"
                className={classes.inputField}
                style={
                  formState.zip !== null
                    ? {
                        outline: 'none',
                        color: 'wheat',
                      }
                    : {}
                }
              />
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
                  className={classes.buttonLeft}
                  style={
                    formState.isSmoker === 'yes'
                      ? {
                          ...buttonsCss.buttons,
                          outline: 'none',
                          color: 'wheat',
                        }
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
                      isSmoker: 'no',
                    });
                  }}
                  className={classes.buttonRight}
                  style={
                    formState.isSmoker === 'no'
                      ? {
                          ...buttonsCss.buttons,
                          outline: 'none',
                          color: 'wheat',
                        }
                      : {}
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
                  className={classes.buttonLeft}
                  style={
                    formState.isObese === 'yes'
                      ? {
                          ...buttonsCss.buttons,
                          outline: 'none',
                          color: 'wheat',
                        }
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
                      isObese: 'no',
                    });
                  }}
                  className={classes.buttonRight}
                  style={
                    formState.isObese === 'no'
                      ? {
                          ...buttonsCss.buttons,
                          outline: 'none',
                          color: 'wheat',
                        }
                      : {}
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
                  className={classes.buttonLeft}
                  style={
                    formState.isAsthmatic === 'yes'
                      ? {
                          ...buttonsCss.buttons,
                          outline: 'none',
                          color: 'wheat',
                        }
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
                  className={classes.buttonRight}
                  style={
                    formState.isAsthmatic === 'no'
                      ? {
                          ...buttonsCss.buttons,
                          outline: 'none',
                          color: 'wheat',
                        }
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

          <Button
            onClick={() => {
              setShowDeletionDialog(true);
            }}
            className={classes.deleteButton}
          >
            DELETE ALL OBSERVATION DATA
          </Button>
          {showDeletionDialog && <DeletionDialog setShowDeletionDialog={setShowDeletionDialog} />}
        </Grid>
        <Button className={classes.deleteButton}>DELETE ALL DATA</Button>
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
