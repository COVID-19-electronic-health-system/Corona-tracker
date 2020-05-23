import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import PropTypes from 'prop-types';
import NavBar from 'layout/NavBar';
import Login from 'pages/Login';
import { FullLogo } from 'utils/imgUrl';

const useStyles = makeStyles(theme => ({
  '@global': {
    'html, body, #root': {
      height: '100vh',
    },
  },
  root: {
    scroll: 'hidden',
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
    <div>
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
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
