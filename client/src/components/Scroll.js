import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        overflowY: 'scroll',
        height: '44vh',
    }
})

const Scroll = props => {
    const classes =useStyles()
  return <div className={classes.root}>{props.children}</div>;
};

export default Scroll;
