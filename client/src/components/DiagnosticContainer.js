import React from 'react';
import '../css/App.css';
import '../css/DiagnosticContainer.css';
import '../css/themePalette.css';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { loadObservations } from '../redux/actions/observations';
import { useDispatch } from 'react-redux';
import Disclaimer from './Disclaimer';
import HealthLogToggle from './HealthLogToggle';
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
}));
//the date
const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function DiagnosticContainer(props) {
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
        <hr className="hr" />
        <h4>
          <b>Let’s log your health for today: </b>
        </h4>
      </Container>
      {/*uncomment out below to show popup*/}
      {/* <Container>
        <Disclaimer />
      </Container> */}
      <HealthLogToggle />
      <NavBar />
    </div>
  );
}

export default DiagnosticContainer;
