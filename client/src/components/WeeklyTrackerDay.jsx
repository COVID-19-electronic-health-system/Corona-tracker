import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const noDataText = 'N/A';

const useStyles = makeStyles(() => ({
  div: {
    maxWidth: '560px',
    width: '100%',
  },
  bold: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  rotated: {
    fontSize: '14px',
    left: '-15px',
    position: 'absolute',
    top: '35px',
    transform: 'rotate(-90deg)',
  },
  date: {
    fontSize: '32px',
  },
  feeling: {
    fontSize: '24px',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  ellipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const WeeklyTrackerDay = props => {
  const { dayData } = props;
  const classes = useStyles();
  const date = new Date(dayData.date);

  return (
    <div className={classes.div}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={1}>
          <Typography variant="body1" className={`${classes.bold} ${classes.rotated}`}>
            Selected
          </Typography>
        </Grid>
        <Grid item xs={2} container>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.bold}>
              {date.toString().split(' ')[0]}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.date}>
              {date.getDate()}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3} sm={4} container>
          <Grid item xs={12}>
            <Typography variant="body2">You said you felt:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={`${classes.bold} ${classes.feeling}`}>
              {dayData.physical.dailyfeeling}/5
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={5} container className={classes.textAlignLeft}>
          <Grid item xs={12}>
            <Typography variant="body2">
              Temperature:&nbsp;
              <strong>
                {dayData.physical.feverSeverity
                  ? `${dayData.physical.feverSeverity} ${String.fromCharCode(176)}F`
                  : noDataText}
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              Symptoms:&nbsp;
              <strong>
                {dayData.physical.dailySymptomsFeeling ? `${dayData.physical.dailySymptomsFeeling}/5` : noDataText}
              </strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.ellipsis}>
              Comments:&nbsp;
              <strong>{dayData.nonPhysical.openComment || noDataText}</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.bold}>
              Swipe for Details &gt; &gt; &gt;
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

WeeklyTrackerDay.propTypes = {
  dayData: PropTypes.objectOf(Object).isRequired,
};

export default WeeklyTrackerDay;
