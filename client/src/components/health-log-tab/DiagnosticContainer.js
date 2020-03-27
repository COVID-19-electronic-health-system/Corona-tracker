import React from 'react';
import { loadObservations } from '../../redux/actions/observations';
import { useDispatch } from 'react-redux';
import HealthLogToggle from './HealthLogToggle';
import Scroll from '../Scroll'
import Container from '@material-ui/core/Container';
import Disclaimer from '../Disclaimer';
import Subscribe from '../Subscribe';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function DiagnosticContainer(props) {
  const { userSession } = props;
  const dispatch = useDispatch();
  const today = new Date();
  dispatch(loadObservations());
  return (
    <div className="DiagnosticContainer">

      <h4>
        Hello, <b>{userSession.loadUserData().profile.name} </b>
      </h4>
      <h5>
        Today is <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{' '}
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
