import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField, MenuItem, FormControl } from '@material-ui/core';
import NavBar from './NavBar';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import profileImg from '../img/profile.png';

const useStyles = makeStyles(theme => ({
  //the styles goes here as an object
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: {
    display: 'inline-block',
  },
  button: {
    color: 'white',
    backgroundColor: 'red',
    fontWeight: 'bold',
    marginBottom: '10px',
    alignSelf: 'center',
    marginLeft: '5px',
    height: '4vh',
  },
  header: {
    width: 325,
    display: `inline-block`,
    marginBottom: '1em',
  },
  logo: {
    width: '100px',
    height: '100px',
    //this is for small devices, theme media query there are (sm, md and lg)
    [theme.breakpoints.down('xs')]: {
      width: '80px',
    },
  },
  textLogo: {
    width: '350px',
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
  profile: {
    width: '100px',
    height: '140px',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
  },
  textArea: {
    display: 'flex',
    flexDirection: 'row',
  },
  textField: {
    width: '48%',
    marginBottom: '10px',
    marginLeft: '5px',
    textAlign: 'center',
    color: 'white',
    maxWidth: '180px',
  },
  textFieldLabel: {
    textAlign: 'right',
    width: '48%',
  },
  input: {
    backgroundColor: 'red',
    color: 'white',
    height: '4vh',
  },
  location: {
    marginBottom: '10px',
    marginLeft: '5px',
    textAlign: 'center',
    color: 'white',
    width: '15%',
    maxWidth: '60px',
    fontSize: '1em',
  },
}));

const blankForm = {
  firstName: '',
  age: '',
  sex: '',
  city: '',
  state: '',
  zip: '',
};

export default ({ postNewUser }) => {
  const [formState, setFormState] = useState(blankForm);
  const handleChange = e => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const classes = useStyles();
  console.log(formState);
  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <Logo className={classes.logo} />
        <TextLogo className={classes.textLogo} />
      </div>
      <div className={classes.header}>
        <h4>
          <b>Welcome to CoronaTracker!</b>
        </h4>
        <h4>Let's get your profile set up with a few quick questions and start logging your health:</h4>
      </div>
      <div className={classes.profile}>
        <img src={profileImg} className={classes.image} />
        <h4>
          <b>PROFILE</b>
        </h4>
      </div>
      <FormControl onSubmit={() => postNewUser(formState).then(setFormState(blankForm))}>
        <div className={classes.textArea}>
          <h5 className={classes.textFieldLabel}>
            <b>First Name:</b>
          </h5>
          <TextField
            name="firstName"
            placeholder="Click Here"
            value={formState.firstName}
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              className: classes.input,
            }}
          />
        </div>
        <div className={classes.textArea}>
          <h5 className={classes.textFieldLabel}>
            <b>Age (Years):</b>
          </h5>
          <TextField
            name="age"
            placeholder="Click Here"
            value={formState.age}
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              className: classes.input,
            }}
          />
        </div>
        <div className={classes.textArea}>
          <h5 className={classes.textFieldLabel}>
            <b>Sex:</b>
          </h5>
          <div style={{ display: 'inline block' }}>
            <Button
              onClick={() =>
                setFormState({
                  ...formState,
                  sex: 'male',
                })
              }
              className={classes.button}
              style={
                formState.sex === 'male' ? { backgroundColor: 'white', color: 'red', border: '2px solid red' } : {}
              }
            >
              Male
            </Button>
            <Button
              onClick={() =>
                setFormState({
                  ...formState,
                  sex: 'female',
                })
              }
              className={classes.button}
              style={
                formState.sex === 'female' ? { backgroundColor: 'white', color: 'red', border: '2px solid red' } : {}
              }
            >
              Female
            </Button>
          </div>
        </div>
        <div className={classes.textArea}>
          <h5 className={classes.textFieldLabel}>
            <b>{'City, State & ZIP:'}</b>
          </h5>
          <TextField
            name="city"
            value={formState.city}
            onChange={handleChange}
            placeholder="City"
            variant="outlined"
            className={classes.location}
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            name="state"
            value={formState.state}
            onChange={handleChange}
            placeholder="State"
            variant="outlined"
            className={classes.location}
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            name="zip"
            value={formState.zip}
            onChange={handleChange}
            placeholder="Zip"
            variant="outlined"
            className={classes.location}
            InputProps={{
              className: classes.input,
            }}
          />
        </div>
        <Button
          type="submit"
          className={classes.button}
          style={{
            width: '300px',
            marginTop: '2em',
            height: '4.5em',
          }}
        >
          SAVE MY RESPONSES
        </Button>
      </FormControl>
      <NavBar />
    </div>
  );
};
