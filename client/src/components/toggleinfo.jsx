import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button, ButtonGroup } from '@material-ui/core';

const ToggleInfo = () => {
  const [tempOrSymptoms, setTempSymptoms] = useState('temperature');
  const setTemp = () => setTempSymptoms('temperature');
  const setSymptoms = () => setTempSymptoms('symptoms');

  return (
    <div>
      <Container>
        <ButtonGroup size="medium" color="secondary" aria-label="outlined button group" style={{ padding: '10px' }}>
          <Button onClick={setTemp} variant={tempOrSymptoms === 'temperature' && 'contained'}>
            Temperature
          </Button>
          <Button onClick={setSymptoms} variant={tempOrSymptoms === 'symptoms' && 'contained'}>
            Symptoms
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
};

export default ToggleInfo;
