import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 12, 0),
    padding: theme.spacing(1),
  },
  pulse: {
    fontSize: '7em',
    color: 'white',
  },
}));

const Pulse = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column" className={classes.root}>
        <Grid item xs={12}>
          <FavoriteBorderIcon className={classes.pulse} />
        </Grid>
        <Typography variant="h4">Let&#39;s check your pulse!</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Place your finger over your camera for 15-20 seconds
        </Typography>
      </Grid>
    </div>
  );
};

export default Pulse;
