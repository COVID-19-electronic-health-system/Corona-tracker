import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MyHealthLog from './my-health-log/MyHealthLog';

export default function HealthLogToggle() {
  const [toggleValue, setToggleValue] = useState('myHealthLog');
  const setHealthLog = () => setToggleValue('myHealthLog');
  const setShowMeMore = () => setToggleValue('showMeMore');
  return (
    <div>
      <Container >
        <ButtonGroup size="medium" color="secondary" aria-label="outlined button group" style={{ padding: '10px' }}>
          <Button onClick={setHealthLog} variant={toggleValue === 'myHealthLog' && "contained"}>My health log</Button>
          <Button onClick={setShowMeMore} variant={toggleValue === 'showMeMore' && "contained"}>Show me more</Button>
        </ButtonGroup>
      </Container>
      {toggleValue === 'myHealthLog' && <MyHealthLog />}
      {/* {toggleValue==='showMeMore'&&</>} */}
    </div>
  )
}
