import React from 'react';
import { loadObservations } from '../redux/actions/observations';
import { useDispatch } from 'react-redux';
import HealthLogToggle from './HealthLogToggle';
import Scroll from './Scroll'

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

      {/*uncomment out below to show popup*/}
      {/* <Container>
        <Disclaimer />
      </Container> */}
      <Scroll>
        <HealthLogToggle />
      </Scroll>
    </div>
  );
}

export default DiagnosticContainer;
