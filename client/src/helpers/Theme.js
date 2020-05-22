import { createMuiTheme } from '@material-ui/core';

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
export default theme;
