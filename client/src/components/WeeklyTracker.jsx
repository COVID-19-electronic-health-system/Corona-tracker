/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';

const useStyles = makeStyles({
  item: {
    position: 'relative',
    width: '100vw',
    height: '15vh',
    pointerEvents: 'auto',
    transformOrigin: '50% 50% 0px',
    paddingLeft: '32px',
    paddingRight: '32px',
    boxSizing: 'border-box',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  fg: {
    cursor: '-webkit-grab',
    background: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    color: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.2)',
    fontsize: '3em',
    fontWeight: '600',
    transition: 'box-shadow 0.75s',
    '&:active': {
      cursor: '-webkit-grabbing',
      boxShadow: '0px 15px 30px -5px rgba(0, 0, 0, 0.4)',
    },
    ' > *': {
      pointerEvents: 'none',
    },
  },
  av: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'white',
  },
  weeklyTrackerContainer: {
    left: '0',
  },
});

const WeeklyTracker = props => {
  const { children, setToggleValue, setDetailData } = props;
  const classes = useStyles();
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${delta[0] < 0 ? '#f093fb 0%, #f5576c' : '#96fbc4 0%, #f9f586'} 100%)`,
    size: down ? 1.1 : 1,
    immediate: name => down && name === 'x',
  });
  const avSize = x.interpolate({
    map: Math.abs,
    range: [50, 300],
    output: ['scale(0.5)', 'scale(1)'],
    extrapolate: 'clamp',
  });

  const openDetail = () => {
    setDetailData([children.props.dayData]);
    setToggleValue('myHealthLog');
  };

  return (
    <div className={classes.weeklyTrackerContainer}>
      <animated.div
        {...bind()}
        className={classes.item}
        style={{ background: bg }}
        onMouseUp={() => openDetail()}
        onTouchEnd={() => openDetail()}
      >
        <animated.div className={classes.av} style={{ transform: avSize, justifySelf: delta[0] < 0 ? 'end' : 'start' }}>
          Detail
        </animated.div>
        <animated.div
          className={classes.fg}
          style={{ transform: interpolate([x, size], (_x, _s) => `translate3d(${_x}px,0,0) scale(${_s})`) }}
        >
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

WeeklyTracker.propTypes = {
  children: PropTypes.string,
  setToggleValue: PropTypes.func.isRequired,
  setDetailData: PropTypes.func.isRequired,
};

WeeklyTracker.defaultProps = {
  children: '',
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleValue: toggleValue => dispatch(actions.setToggleValue(toggleValue)),
    setDetailData: detailData => dispatch(actions.setDetailData(detailData)),
  };
};

export default connect(null, mapDispatchToProps)(WeeklyTracker);
