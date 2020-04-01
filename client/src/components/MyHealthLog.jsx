import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid } from '@material-ui/core';
import WeeklyTracker from './WeeklyTracker';
import AppCalendar from './Calendar';

function HealthLogButton() {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/symptomsurvey">
        <Button color="secondary" variant="contained">
          {t('surveyButtonText')}
        </Button>
      </Link>
      <Grid container direction="column" alignContent="center">
        <AppCalendar />
        <WeeklyTracker />
      </Grid>
    </div>
  );
}
export default function MyHealthLog() {
  return <HealthLogButton />;
}
