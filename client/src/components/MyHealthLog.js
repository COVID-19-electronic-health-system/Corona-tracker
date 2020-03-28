import React from 'react';
import Button from '@material-ui/core/Button';
import Calendar from './Calendar';

export default function MyHealthLog() {
  return (
    <Button color="secondary" variant='contained' href='/symptomsurvey'>Take a survey</Button>
    <Calendar />
  )
}
