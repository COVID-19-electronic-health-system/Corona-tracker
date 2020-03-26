import React from 'react';
import { loadObservations } from '../redux/actions/observations';
import { useDispatch } from 'react-redux';
import HealthLogToggle from './HealthLogToggle';
import Scroll from './Scroll'


function DiagnosticContainer() {

  const dispatch = useDispatch();
  dispatch(loadObservations());
  return (
    <div className="DiagnosticContainer">
     
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
