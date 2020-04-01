import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bowlG: {
    position: 'relative',
    width: '58px',
    height: '58px',
    margin: 'auto',
  },
  bowlRingG: {
    position: 'absolute',
    width: '58px',
    height: '58px',
    border: '5px solid #f64141',
    borderRadius: '58px',
  },
  ballHolderG: {
    position: 'absolute',
    width: '16px',
    height: '58px',
    left: '21px',
    top: '0px',
    animationName: '$ballMoveG',
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  ballG: {
    position: 'absolute',
    left: '0px',
    top: '-14px',
    width: '23px',
    height: '23px',
    background: '#f64141',
    borderRadius: '19px',
  },

  '@keyframes ballMoveG': {
    '0%': {
      transform: 'rotate(0deg)',
    },

    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const Loding = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bowlG}>
        <div className={classes.bowlRingG}>
          <div className={classes.ballHolderG}>
            <div className={classes.ballG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loding;
