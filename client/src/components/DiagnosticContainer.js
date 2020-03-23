import React, { useState } from 'react';
import '../css/App.css';
import '../css/DiagnosticContainer.css';
import '../css/themePalette.css';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { loadObservations } from '../redux/actions/observations';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  //the styles goes here as an object
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
  textQ: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
}));
//the date
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function DiagnosticContainer(props) {
  const [healthLogged] = useState(false);
  const classes = useStyles();
  const { handleSignOut, userSession } = props;
  const today = new Date();

  const dispatch = useDispatch();
  dispatch(loadObservations());
  return (
    <div className="DiagnosticContainer">
      <Container className="temp-singout">
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Container>

      <Container>
        <Logo className={classes.logo} />
        <TextLogo className={classes.textLogo} />
        <h4>
          Hello, <b>{userSession.loadUserData().profile.name}</b>
        </h4>
        <h5>
          Today is <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{' '}
        </h5>
        <Typography className={classes.textQ}>
          {!healthLogged ? 'Great Job Logging Your Health Today!' : "Let's Log Your Health Today!"}
        </Typography>
      </Container>
      <NavBar />
    </div>
  );
}

export default DiagnosticContainer;
