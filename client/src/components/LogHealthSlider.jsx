/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useHistory } from 'react-router-dom';
import noSelectCss from '../css/noSelect';
import { CalendarThreeLines, alarmSvg, checkSvg, xSvg } from '../utils/imgUrl';

const useStyles = makeStyles(theme => ({
  ...noSelectCss,

  width: '100vw',
  [theme.breakpoints.up('md')]: {
    width: '60vw',
  },
  root: {
    paddingBottom: '15em',
  },
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
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '60vw',
    },
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
}));

const LogHealthSlider = () => {
  const classes = useStyles();
  const history = useHistory();
  const [oneThird, setOneThird] = useState(0);

  useEffect(() => {
    // grab slider element and use its width to calculate the oneThird Value
    const slider = document.querySelector('#health-slider');
    function getSliderBound() {
      const newOneThird = slider.clientWidth / 3;
      setOneThird(newOneThird);
    }
    getSliderBound();
    window.onresize = getSliderBound;
  }, []);

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
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid className={classes.noSelect}>
          <animated.div id="health-slider" className={classes.item}>
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
                      <Typography variant="body2" className={classes.bold}>
                        Today
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.itsTime}>
                      <Typography variant="body2">{`It's time to enter your\nDaily Health Log!`}</Typography>
                    </Grid>
                    <Grid item xs={7} sm={6}>
                      <Typography variant="body2" className={classes.bold}>
                        Swipe to Complete &gt; &gt; &gt;
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </animated.div>
          </animated.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default LogHealthSlider;
