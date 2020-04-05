import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes, { object } from 'prop-types';
import CalendarThreeLines from '../img/Calendar_Three-Lines.svg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  div: {
    width: '375px',
  },
  summary: {
    marginTop: '1vh',
    marginRight: '2vw',
  },
  topMargin: {
    marginTop: '1vh',
  },
}));

const WeeklyTrackerDay = props => {
  const classes = useStyles();
  const { dayData } = props;

  return (
    <div className={classes.div}>
      <Grid container spacing={0} className="day-container">
        <Grid item className={classes.topMargin}>
          <img alt="threeLinesSvg" src={CalendarThreeLines} />
        </Grid>
        <Grid item className={classes.topMargin}>
          <Typography variant="h5">{new Date(dayData.date).toLocaleDateString()}</Typography>
        </Grid>
        <Grid item className={classes.summary}>
          <Typography variant="subtitle2">You felt: {dayData.physical.dailyfeeling}/10</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Fever? <strong>{dayData.physical.hasfever.toString()}</strong>
          </Typography>
          <Typography variant="subtitle2">
            Cough? <strong>{dayData.physical.hasCough.toString()}</strong>
          </Typography>
          <Typography variant="subtitle2">Comments: {dayData.nonPhysical.openComment}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

WeeklyTrackerDay.propTypes = {
  dayData: PropTypes.objectOf(object).isRequired,
};

export default WeeklyTrackerDay;
