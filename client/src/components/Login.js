import React from 'react';
import '../css/Login.css';
import '../css/App.css';
import '../css/themePalette.css';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/styles'
import { useConnect } from '@blockstack/connect';

const useStyles = makeStyles({
  button: {
    background: "#f64141",
    color: "white"
  }
})

function Login() {
  const { doOpenAuth } = useConnect();
  const classes = useStyles()
  return (
    <div className="Login">
      <Logo className="LoginLogo" />
      <TextLogo className="TextLogo" />
      <p className="ShortDescriptionText">
        Your health app to <b>monitor</b> flu-like symptoms, <b>connect</b> to telehealth doctors in your area and{' '}
        <b>discover</b> resources close to you.
      </p>
      <Button variant="contained" className={classes.button} onClick={doOpenAuth}>
        Get started
      </Button>
    </div>
  );
}

export default Login;
