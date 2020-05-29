import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '200px',
    backgroundColor: '#bbcef9',
    padding: theme.spacing(1),
  },
}));

const AvgTemperature = props => {
  const { observations, tempUnit } = props;

  const classes = useStyles();

  const averageTemperature = observations.length
    ? Math.round(
        observations.reduce((sum, record) => {
          return sum + record.physical.feverSeverity * 10;
        }, 0) / observations.length
      ) / 10
    : '--';

  return (
    <Paper className={classes.root}>
      <Typography variant="overline">Average Temperature:</Typography>
      {tempUnit === 'fahrenheit' ? (
        <Typography variant="body2">{averageTemperature}&#8457;</Typography>
      ) : (
        <Typography variant="body2">{averageTemperature}&#8451;</Typography>
      )}
    </Paper>
  );
};

AvgTemperature.propTypes = {
  observations: PropTypes.arrayOf(Object).isRequired,
  tempUnit: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    observations: state.observationsReducer.observations,
    tempUnit: state.onboardingReducer.tempUnit,
  };
};

export default connect(mapStateToProps)(AvgTemperature);
