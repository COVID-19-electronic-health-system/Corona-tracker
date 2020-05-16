import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, makeStyles } from '@material-ui/core';
import buttonsCss from 'styles/buttons';
import AppCalendar from './Calendar';
import LogHealthSlider from './LogHealthSlider';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  button: {
    ...buttonsCss.buttons,
    width: '300px',
    margin: '10px',
  },
});

function HealthLogButton() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div>
      <Link className={classes.root} to="/symptomsurvey">
        <Button className={classes.button} variant="contained">
          {t('logSection.text.takeSurvey.takeASurvey')}
        </Button>
      </Link>
      <Grid container direction="column" alignContent="center">
        <AppCalendar />
      </Grid>
      <LogHealthSlider />
    </div>
  );
}
export default function MyHealthLog() {
  return <HealthLogButton />;
}
