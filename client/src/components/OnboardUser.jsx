/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useBlockstack } from 'react-blockstack';
import actions from '../redux/actions/actions';
import profileImg from '../img/profile.png';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '2em 0 2em 0',
  },
  button: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
    height: '4vh',
    borderRadius: '5px',
    margin: '0 0 0 0',
    maxWidth: '300px',
    minWidth: '42%',
  },
  header: {
    width: 325,
    display: `inline-block`,
    marginBottom: '.5em',
    fontSize: '.5em',
  },
  profile: {
    width: '100px',
    height: '140px',
    marginBottom: '.5em',
    fontSize: '1em',
  },
  image: {
    width: '100%',
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '.5vh',
  },
  inputField: {
    width: '48%',
    textAlign: 'center',
    maxWidth: '180px',
    color: 'white',
    backgroundColor: 'red',
    height: '4vh',
    justifyContent: 'space-between',
    border: 'none',
    borderRadius: '5px',
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
  inputFieldLabel: {
    textAlign: 'right',
    width: '48%',
  },
  location: {
    border: 'none',
    marginBottom: '10px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'red',
    width: '33%',
    maxWidth: '60px',
    fontSize: '1em',
    borderRadius: '5px',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,',
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
    <div className={classes.root}>
      <div className={classes.header}>
        <h4>
          <b>Welcome to CoronaTracker!</b>
        </h4>
        <h4>Let&apos;s get your profile set up with a few quick questions and start logging your health:</h4>
      </div>
      <div className={classes.profile}>
        <img src={profileImg} className={classes.image} alt="Profile" />
        <h4>
          <b>PROFILE</b>
        </h4>
      </div>
      <div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Age (Years):</b>
          </h5>
          <input
            className={classes.inputField}
            name="age"
            placeholder="Click Here"
            value={formState.age}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Gender:</b>
          </h5>
          <div>
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                setFormState({
                  ...formState,
                  gender: 'male',
                });
              }}
              className={classes.button}
              style={formState.gender === 'male' ? { backgroundColor: 'white', color: 'red' } : {}}
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
              className={classes.button}
              style={formState.gender === 'female' ? { backgroundColor: 'white', color: 'red' } : {}}
            >
              Female
            </button>
          </div>
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>City, State & ZIP:</b>
          </h5>
          <div className={classes.inputField}>
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
          </div>
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Do you smoke?</b>
          </h5>
          <input
            className={classes.inputField}
            name="isSmoker"
            placeholder="Click Here"
            value={formState.isSmoker}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Do you have obesity?</b>
          </h5>
          <input
            className={classes.inputField}
            name="isObese"
            placeholder="Click Here"
            value={formState.isObese}
            onChange={handleChange}
          />
        </div>
        <div className={classes.inputArea}>
          <h5 className={classes.inputFieldLabel}>
            <b>Do you have asthma?</b>
          </h5>
          <input
            className={classes.inputField}
            name="isAsthmatic"
            placeholder="Click Here"
            value={formState.isAsthmatic}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => {
            // setDemographicsComorbiditiesThunk(formState, userSession).then(() => history.push('/'));
            setDemographicsComorbiditiesThunk(formState, userSession);
            history.push('/');
          }}
          className={classes.button}
          style={{
            width: '300px',
            height: '3.5em',
            marginTop: '2em',
          }}
        >
          SAVE MY RESPONSES
        </button>
      </div>
    </div>
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
