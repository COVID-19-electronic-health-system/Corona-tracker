import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HealthLogToggle from './HealthLogToggle';
import SymptomsTracker from './SymptomsTracker';
import actions from '../redux/actions/actions';

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

function DiagnosticContainer(props) {
  const { setNumObservations, setObservations } = props;
  const classes = useStyles();
  const { userSession } = useBlockstack();
  const today = new Date();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const fileNames = [];
      const observations = [];
      let numObservations = 0;

      await userSession.listFiles(fileName => {
        if (fileName.includes('observation/')) {
          fileNames.push(fileName);
        }
        return true;
      });

      const getFilePromises = fileNames.map(fileName => {
        const observationNum = parseInt(fileName.replace(/^\D+/g, ''), 10);
        numObservations = observationNum;
        return userSession.getFile(fileName);
      });

      (await Promise.all(getFilePromises)).forEach(observationString => {
        const observation = JSON.parse(observationString);
        observations.push(observation);
      });

      setObservations(observations);
      setNumObservations(numObservations);
    })();
  });

  return hasSubmitted() ? (
    <div>
      <h4>
        {t('hello')} <b>{userSession.loadUserData().profile.name}</b>
      </h4>
      <h5>
        {t('todayText')} <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{' '}
      </h5>
      <hr className={classes.hr} />
      <HealthLogToggle />
    </div>
  ) : (
    <SymptomsTracker />
  );
}

DiagnosticContainer.propTypes = {
  setNumObservations: PropTypes.func.isRequired,
  setObservations: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    setNumObservations: numObservations => dispatch(actions.setNumObservations(numObservations)),
    setObservations: observations => dispatch(actions.setObservations(observations)),
  };
};

export default connect(null, mapDispatchToProps)(DiagnosticContainer);
