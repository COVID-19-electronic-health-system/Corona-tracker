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
          <Typography variant="h4">{dayData.date}</Typography>
        </Grid>
        <Grid item className={classes.summary}>
          <Typography variant="subtitle2">You felt: {dayData.status}/10</Typography>
          <Typography variant="subtitle2">{dayData.day} </Typography>
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
  dayData: PropTypes.objectOf(object).isRequired,
  date: PropTypes.number,
  day: PropTypes.string,
  status: PropTypes.string,
  temp: PropTypes.number,
  symptoms: PropTypes.string,
};

WeeklyTrackerDay.defaultProps = {
  date: 0,
  day: '0/0/0000',
  status: 'n/a',
  temp: 0,
  symptoms: 'n/a',
};

export default WeeklyTrackerDay;
