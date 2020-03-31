import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Trans } from 'react-i18next';
import MyHealthLog from './MyHealthLog';

export default function HealthLogToggle() {
  const [toggleValue, setToggleValue] = useState('myHealthLog');
  const setHealthLog = () => setToggleValue('myHealthLog');
  const setShowMeMore = () => setToggleValue('showMeMore');
  return (
    <div>
      <Container>
        <ButtonGroup size="medium" color="secondary" aria-label="outlined button group" style={{ padding: '10px' }}>
          <Button onClick={setHealthLog} variant={toggleValue === 'myHealthLog' && 'contained'}>
            <Trans i18nKey="health.logButton" />
          </Button>
          <Button onClick={setShowMeMore} variant={toggleValue === 'showMeMore' && 'contained'}>
            <Trans i18nKey="health.showMoreButton" />
          </Button>
        </ButtonGroup>
      </Container>
      {toggleValue === 'myHealthLog' && <MyHealthLog />}
      {/* {toggleValue==='showMeMore'&&</>} */}
    </div>
  );
}
