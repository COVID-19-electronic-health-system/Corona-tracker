import React from 'react';
import { loadObservations } from '../redux/actions/observations';
import { useDispatch } from 'react-redux';
import HealthLogToggle from './HealthLogToggle';
import Scroll from './Scroll';
import Container from '@material-ui/core/Container';
import Disclaimer from './Disclaimer';
import Subscribe from './Subscribe';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function DiagnosticContainer() {
  const { userSession } = useBlockstack();
  const dispatch = useDispatch();
  const today = new Date();
  const { t } = useTranslation();
  dispatch(loadObservations());
  return (
    <div className="DiagnosticContainer">
      <h4>
    {t('hello')} <b>{userSession.loadUserData().profile.name} </b>
      </h4>
      <h5>
    {t('todayText')} <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{' '}
      </h5>
      <hr className="hr" />
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
