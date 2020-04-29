import React from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Login from './Login';
import { FullLogo } from '../utils/imgUrl';

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
          color: 'black',
        },
      },
    },
    MuiSelect: {
      select: {
        '&&': {
          paddingRight: '0px',
        },
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 'inherit',
      },
    },
    MuiList: {
      root: {
        backgroundColor: '#bbcef9',
      },
    },
    MuiTextField: {
      root: {
        '& label.Mui-focused': {
          color: 'black',
        },
      },
    },
  },

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 479,
      md: 839,
      lg: 1279,
      xl: 1599,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'Nunito',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 18,
    h1: {
      fontFamily: 'sans-serif',
      fontSize: '2.5rem',
    },
    h2: {
      fontFamily: 'sans-serif',
      fontSize: '2.25rem',
    },
    h3: {
      fontFamily: 'sans-serif',
      fontSize: '2rem',
    },
    h4: {
      fontFamily: 'sans-serif',
      fontSize: '1.8rem',
    },
    h5: {
      fontFamily: 'sans-serif',
      fontSize: '1.6rem',
    },
    h6: {
      fontFamily: 'sans-serif',
      fontSize: '1.4rem',
    },
    subtitle1: {
      fontSize: '1.2rem',
    },
    subtitle2: {
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '.9rem',
    },
  },
});

const useStyles = makeStyles(() => ({
  '@global': {
    'html, body, #root': {
      height: '100vh',
    },
  },
  root: {
    scroll: 'hidden',
    position: 'fixed',
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
    overflowY: 'auto',
    width: '100%',
    height: '100vh',
    overflowX: 'hidden',
    margin: '0px',
    paddingTop: '3vh',
  },
  fullLogo: {
    width: '90vw',
    height: '10vh',

    [theme.breakpoints.up('md')]: {
      width: '70vh',
      height: '6vh',
    },
  },
}));
const Layout = props => {
  const { children } = props;
  const classes = useStyles();
  const { authenticated } = useBlockstack();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {authenticated ? (
          <div>
            <div id="content" className={classes.root}>
              {/* <object title="logo" className={classes.logo} data={Logo} type="image/svg+xml" />
              <object title="logoText" className={classes.textLogo} data={TextLogo} type="image/svg+xml" /> */}
              <object title="fullLogo" className={classes.fullLogo} data={FullLogo} type="image/svg+xml" />
              {children}
            </div>
            <div>
              <NavBar />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </CssBaseline>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
