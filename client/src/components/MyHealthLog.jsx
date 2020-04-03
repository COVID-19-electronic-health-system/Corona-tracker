import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, makeStyles } from '@material-ui/core';
import WeeklyTracker from './WeeklyTracker';
import WeeklyTrackerDay from './WeeklyTrackerDay';
import AppCalendar from './Calendar';

const useStyles = makeStyles({
  button: {
    background: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    width: '320px',
    boxShadow: '0px 1px 15px 0px #4760ff',
    margin: '10px',
    color: 'white',
  },
});

const dates = [
  {
    date: 11,
    day: 'Monday',
    status: '10',
    temp: 99.6,
    symptoms: 'headache',
    comments: 'Tired for the entire day',
  },
];

function HealthLogButton() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div>
      <Link to="/symptomsurvey">
        <Button className={classes.button} variant="contained">
          {t('surveyButtonText')}
        </Button>
      </Link>
      <Grid container direction="column" alignContent="center">
        <AppCalendar />
        {dates.map(dayData => (
          <WeeklyTracker key={dayData.date}>
            <WeeklyTrackerDay dayData={dayData} />
          </WeeklyTracker>
        ))}
      </Grid>
    </div>
  );
}
export default function MyHealthLog() {
  return <HealthLogButton />;
}
