/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { animated, to } from 'react-spring';
import Button from '@material-ui/core/Button';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  animatedMain: {
    position: 'fixed',
    willChange: 'transform',
    bottom: '10',
    // eslint-disable-next-line
    ['@media (max-width:320px)']: {
      bottom: '7',
    },
  },
  animatedSub: {
    backgroundColor: 'white',
    width: '310px',
    height: '350px',
    // eslint-disable-next-line
    [theme.breakpoints.down(400)]: {
      width: '300px',
      height: '270px',
    },
    // eslint-disable-next-line
    [theme.breakpoints.up('md')]: {
      width: '350px',
      height: '380px',
    },
    borderRadius: '20px',
    boxShadow: '1px 2px 10px 5px #97a2bd',
    padding: '10px',
    willChange: 'transform',
    userSelect: 'none',
  },
  fontChange: {
    // eslint-disable-next-line
    [theme.breakpoints.down(400)]: {
      fontSize: '1em',
    },
    // eslint-disable-next-line
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
}));
const Facts = ({ data }) => {
  const { title, body, footer, link } = data;

  const classes = useStyles();
  return (
    <Grid>
      <Typography variant="subtitle1" color="secondary">
        {title}
      </Typography>
      <Typography paragraph variant="body1" className={classes.fontChange} color="textSecondary">
        {body}
      </Typography>
      <footer>
        <Typography variant="caption">{footer}</Typography>
        {link && (
          <Button size="small" href={link}>
            Learn More
          </Button>
        )}
      </footer>
    </Grid>
  );
};

const Quiz = ({ data }) => {
  const { question, footer, link } = data;
  return (
    <Grid>
      <Typography color="secondary" variant="subtitle1">
        True or False?
      </Typography>
      <Typography paragraph variant="body1">
        {question}
      </Typography>
      <footer>
        <Typography variant="caption">{footer}</Typography>
        {link && (
          <Button size="small" href={link}>
            Learn More
          </Button>
        )}
      </footer>
    </Grid>
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
