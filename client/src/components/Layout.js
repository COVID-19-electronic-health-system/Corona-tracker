import React from 'react';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import NavBar from './NavBar';
import Login from './Login';
import { useBlockstack } from 'react-blockstack';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c8d7fa',
      main: '#bbcef9',
      dark: '#c8d7fa',
      contrastText: '#000',
    },
    secondary: {
      light: '#f76767',
      main: '#f64141',
      dark: '#ac2d2d',
      contrastText: '#fff',
    },
  },
});
const useStyles = makeStyles(theme => ({
  //the styles goes here as an object
  root: {
    textAlign: 'center',
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
    overflowY: 'scroll',
    height: '85vh',
  },
  logo: {
    width: '75px',

    height: '60px',
    //this is for small devices, theme media query there are (sm, md and lg)
    [theme.breakpoints.down('xs')]: {
      width: '80px',
    },
  },
  textLogo: {
    width: '350px',
    height: '55px',
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
}));
const Layout = props => {
  const classes = useStyles();
  const { authenticated, signOut } = useBlockstack();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        {authenticated ? (
          <div className={classes.root}>
            <Logo className={classes.logo} />
            <TextLogo className={classes.textLogo} />

            <Button size="medium" color="secondary" variant="contained" onClick={signOut}>
              Sign Out
            </Button>
            {props.children}
            <NavBar />
          </div>
        ) : (
          <Login />
        )}
      </CssBaseline>
    </MuiThemeProvider>
  );
};

export default Layout;
