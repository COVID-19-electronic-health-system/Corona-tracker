import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Transition, animated } from 'react-spring';
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
  const { t } = useTranslation();

  return hasSubmitted() ? (
    <div>
      <Transition
        items
        from={{ opacity: 0, transform: 'translate(0, 100%)' }}
        enter={{ opacity: 1, transform: 'translate(0, 0%)' }}
      >
        {props => (
          <animated.div style={props}>
            <Typography variant="h5">
              {t('hello')} <b>{userSession.loadUserData().profile.name}</b>
            </Typography>
            <Typography variant="h6">
              {t('todayText')} <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{' '}
            </Typography>
            <hr className={classes.hr} />
            <HealthLogToggle />
          </animated.div>
        )}
      </Transition>
    </div>
  ) : (
    <Survey />
  );
}

export default DiagnosticContainer;
