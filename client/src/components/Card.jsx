/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { animated, to } from 'react-spring';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  animatedMain: {
    position: 'fixed',
    willChange: 'transform',
    marginTop: '40px',
  },
  animatedSub: {
    backgroundColor: 'white',
    width: '300px',
    height: '330px',
    borderRadius: '20px',
    boxShadow: '1px 2px 10px 5px #97a2bd',
    padding: '15px',
    willChange: 'transform',
    userSelect: 'none',
  },
}));
const Facts = ({ data }) => {
  const { title, body, footer, link } = data;
  return (
    <div>
      <Typography variant="h4" color="secondary">
        {title}
      </Typography>
      <Typography paragraph>{body}</Typography>
      <footer>
        {footer}
        {link && (
          <Button size="small" href={link}>
            Learn More
          </Button>
        )}
      </footer>
    </div>
  );
};

const Quiz = ({ data }) => {
  const { question, footer, link } = data;
  return (
    <div style={{ textAlign: 'left' }}>
      <h1 style={{ fontStyle: 'cursive', fontSize: '1rem' }}>{question}</h1>
      <h3 className="item2" style={{ fontSize: '1rem' }}>
        False or True
      </h3>
      <footer style={{ textAlign: 'left' }}>
        {footer}
        {link && (
          <Button size="small" href={link}>
            Learn More
          </Button>
        )}
      </footer>
    </div>
  );
};

const Card = props => {
  const classes = useStyles();
  const { i, x, y, rot, scale, trans, bind, data, mode } = props;
  // TODO ADD STYLING
  return (
    <animated.div
      className={classes.animatedMain}
      key={i}
      style={{
        transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
    >
      <animated.div
        className={classes.animatedSub}
        {...bind(i)}
        style={{
          transform: to([rot, scale], trans),
        }}
      >
        {mode === 'facts' && <Facts data={data} />}
        {mode === 'quiz' && <Quiz data={data} />}
      </animated.div>
    </animated.div>
  );
};

export default Card;
