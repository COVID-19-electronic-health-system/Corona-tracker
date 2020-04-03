import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { useBlockstack, useFile } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { loadObservations } from '../redux/actions/observations';
import HealthLogToggle from './HealthLogToggle';
import Scroll from './Scroll';
import Disclaimer from './Disclaimer';
import Subscribe from './Subscribe';
import SymptomsTracker from './SymptomsTracker';

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
  const dispatch = useDispatch();
  const today = new Date();
  const { t } = useTranslation();
  dispatch(loadObservations());
  const [disclaimer] = useFile('disclaimer.json');
  return (
    // if the survey has been submitted for the day render home page, else render survey page
    hasSubmitted() ? (
      <div>
        <h4>
          {t('hello')} <b>{userSession.loadUserData().profile.name} </b>
        </h4>
        <h5>
          {t('todayText')} <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{' '}
        </h5>
        <hr className={classes.hr} />
        <Scroll>
          <HealthLogToggle />
        </Scroll>
        <Container>{disclaimer === null && <Disclaimer />}</Container>
        <Subscribe />
      </div>
    ) : (
      <SymptomsTracker />
    )
  );
}

export default DiagnosticContainer;
