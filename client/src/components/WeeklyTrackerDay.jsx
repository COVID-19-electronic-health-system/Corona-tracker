import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CalendarThreeLines from '../img/Calendar_Three-Lines.svg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  div: {
    width: '375px',
  },
}));

const WeeklyTrackerDay = props => {
  const classes = useStyles();
  const { dayData } = props;
  return (
    <div className={classes.div}>
      <Grid container spacing={0} className="day-container">
        <Grid item>
          <img alt="threeLinesSvg" src={CalendarThreeLines} />
        </Grid>
        <Grid item>
          <Typography variant="h4">{dayData.date}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">You said you felt: {dayData.status} / 10</Typography>
          <Typography variant="subtitle2">{dayData.day}, 12:00pm</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            Fever: <strong>{dayData.temp}</strong>
          </Typography>
          <Typography variant="subtitle2">
            Symptoms: <strong>{dayData.symptoms}</strong>
          </Typography>
          <Typography variant="subtitle2">Comments: ugh</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

WeeklyTrackerDay.propTypes = {
  dayData: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  symptoms: PropTypes.number.isRequired,
};

export default WeeklyTrackerDay;
