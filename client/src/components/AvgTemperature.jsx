import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const AvgTemperature = props => {
  const { observations } = props;

  const classes = useStyles();

  const averageTemperature = observations.length ?
    Math.round(
      observations.reduce((sum, record) => {
        return sum + record.physical.feverSeverity * 10;
      }, 0) / observations.length
    ) / 10 :
    '--';

  return (
    <Grid className={classes.root}>
      <Typography>Average Temperature:</Typography>
      <Typography>{averageTemperature}&#8457;</Typography>
    </Grid>
  );
};

AvgTemperature.propTypes = {
  observations: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => {
  return {
    observations: state.observationsReducer.observations,
  };
};

export default connect(mapStateToProps)(AvgTemperature);
