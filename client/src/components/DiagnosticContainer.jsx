import React from 'react';
import { useDispatch } from 'react-redux';
import Container from '@material-ui/core/Container';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { loadObservations } from '../redux/actions/observations';
import HealthLogToggle from './HealthLogToggle';
import Scroll from './Scroll';
import Disclaimer from './Disclaimer';
import Subscribe from './Subscribe';

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

function DiagnosticContainer() {
  const classes = useStyles();
  const { userSession } = useBlockstack();
  const dispatch = useDispatch();
  const today = new Date();
  const { t } = useTranslation();
  dispatch(loadObservations());
  return (
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
      <Container>
        <Disclaimer />
      </Container>
      <Subscribe />
    </div>
  );
}

export default DiagnosticContainer;
