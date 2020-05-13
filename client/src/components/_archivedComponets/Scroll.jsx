import React from 'react';
import Proptypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    overflowY: 'scroll',
    height: '44vh',
  },
});

const Scroll = props => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

Scroll.propTypes = {
  children: Proptypes.func.isRequired,
};

export default Scroll;
