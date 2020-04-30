import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HealthLogToggle from './HealthLogToggle';
import Survey from './survey/Survey';

const useStyles = makeStyles({
  hr: {
    width: '100px',
    border: '1px black solid',
  },
});

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

// check if the survey has been submitted today
const hasSubmitted = () => {
  const date = window.localStorage.getItem('date');
  const todaysDate = new Date().toISOString().slice(0, 10);
  if (date === todaysDate) {
    if (window.localStorage.getItem('surveyCompleted') === 'false') {
      return false;
    }
    return true;
  }
  window.localStorage.setItem('date', todaysDate);
  window.localStorage.setItem('surveyCompleted', 'false');
  return false;
};

function DiagnosticContainer() {
  const classes = useStyles();
  const { userSession } = useBlockstack();
  const today = new Date();
  const { t, i18n } = useTranslation();

  return hasSubmitted() ? (
    <div>
      <Typography variant="h5">
        {t('hello')} <b>{userSession.loadUserData().profile.name}</b>
      </Typography>
      <Typography variant="h6">
        {t('todayText')} <b>{today.toLocaleDateString(i18n.languages, dateOptions)}</b>{' '}
      </Typography>
      <hr className={classes.hr} />
      <HealthLogToggle />
    </div>
  ) : (
    <Survey />
  );
}

export default DiagnosticContainer;
