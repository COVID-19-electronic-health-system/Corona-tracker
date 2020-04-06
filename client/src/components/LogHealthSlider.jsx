/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useHistory } from 'react-router-dom';
import CalendarThreeLines from '../img/Calendar_Three-Lines.svg';
import alarmSvg from '../img/Calendar_Menu_Alarm.svg';
import checkSvg from '../img/Calendar_Menu_Checkmark.svg';
import xSvg from '../img/Calendar_Menu_X.svg';
import noSelectCss from '../css/noSelect';

const useStyles = makeStyles({
  ...noSelectCss,
  item: {
    backgroundColor: '#ffffff',
    position: 'relative',
    height: '90px',
    pointerEvents: 'auto',
    transformOrigin: '50% 50% 0px',
    boxSizing: 'border-box',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
  },
  itemGridDiv: {
    borderRight: '1px solid #aaaaaa',
    width: '33%',
  },
  fg: {
    cursor: '-webkit-grab',
    backgroundColor: `#f64141`,
    color: '#ffffff',
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '-10px 0 10px 0 #aaaaaa',
    fontsize: '3em',
    fontWeight: '600',
    transition: 'box-shadow 0.75s',
    '&:active': {
      cursor: '-webkit-grabbing',
    },
    ' > *': {
      pointerEvents: 'none',
    },
  },
  fgGridDiv: {
    width: '560px',
  },
  bold: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  imageContainer: {
    height: '50px',
    padding: '12px 0',
  },
  image: {
    height: '100%',
  },
  itsTime: {
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
  },
});

const LogHealthSlider = () => {
  const classes = useStyles();
  const history = useHistory();
  const oneThird = window.innerWidth / 3; // Note: doesn't support window resizing
  let showOptions = false;
  let swiped = false;

  const [{ x }, set] = useSpring(() => ({
    x: 0,
    onRest: () => {
      if (swiped) {
        // After swipe animation finishes, navigate to survey
        history.push('/symptomsurvey');
      }
    },
  }));

  const bind = useDrag(
    ({ down, movement: [mx], swipe: [swipeX] }) => {
      if (swipeX === 1) {
        // User swiped
        set({ x: window.innerWidth });
        swiped = true;
        return;
      }

      // Initialize newMx to wherever slider x is
      let newMx = showOptions ? oneThird + mx : mx;

      // Don't allow user to drag off the left side of the screen
      if (newMx < 0) {
        return;
      }

      // If the user is to the right of the options and releases the slider,
      // the slider rests to the right of the options
      if (!down) {
        if (newMx > oneThird) {
          newMx = oneThird;
          showOptions = true;
        } else {
          newMx = 0;
          showOptions = false;
        }
      }

      set({ x: newMx, immediate: down });
    },
    { axis: 'x' }
  );

  return (
    <div className={classes.noSelect}>
      <animated.div className={classes.item}>
        <div className={classes.itemGridDiv}>
          <Grid container justify="space-around" alignItems="center">
            <Grid item className={classes.imageContainer}>
              <img alt="Yes" src={checkSvg} className={classes.image} />
            </Grid>
            <Grid item className={classes.imageContainer}>
              <img alt="Remind Me" src={alarmSvg} className={classes.image} />
            </Grid>
            <Grid item className={classes.imageContainer}>
              <img alt="No" src={xSvg} className={classes.image} />
            </Grid>
          </Grid>
        </div>
        <animated.div {...bind()} className={classes.fg} style={{ x }}>
          <div className={classes.fgGridDiv}>
            <Grid container alignItems="center">
              <Grid item xs={1} className={classes.imageContainer}>
                <img alt="threeLinesSvg" src={CalendarThreeLines} className={classes.image} />
              </Grid>
              <Grid item xs={11} container alignItems="center" spacing={1}>
                <Grid item xs={2}>
                  <Typography variant="body1" className={classes.bold}>
                    Today
                  </Typography>
                </Grid>
                <Grid item xs={4} className={classes.itsTime}>
                  <Typography variant="body1">{`It's time to enter your\nDaily Health Log!`}</Typography>
                </Grid>
                <Grid item xs={7} sm={6}>
                  <Typography variant="body1" className={classes.bold}>
                    Swipe to Complete &gt; &gt; &gt;
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default LogHealthSlider;
