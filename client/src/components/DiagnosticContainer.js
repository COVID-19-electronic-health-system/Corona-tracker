import React from 'react';
import '../css/App.css';
import '../css/DiagnosticContainer.css';
import '../css/themePalette.css';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";


const useStyles = makeStyles(theme =>({
    logo: {
        width: '100px',
        
        height: '100px',
        [theme.breakpoints.down("xs")]: {
            width: '80px'
        }
    },
    textLogo: {
        width: '350px',
        height: '100px',
        [theme.breakpoints.down("xs")]: {
      width: '200px'
    }
    }
}))

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
  return (
    <div className="DiagnosticContainer">
      <NavBar />
      <Container className='temp-singout'>
        <Button onClick={handleSignOut} style={{
          width: '100px', flexShrink: '0'

        }}>Sign Out</Button>
      </Container>

      <Container>
        <Logo className={classes.logo} />
        <TextLogo className={classes.textLogo} />
        <h4>
          Hello, <b>{userSession.loadUserData().profile.name}</b>
        </h4>
        <h5>
          Today is <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{" "}
        </h5>
      </Container>
    </div>
  );
}

export default DiagnosticContainer;
