import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function MyHealthLog() {
  return (
    <Button color="secondary" variant='contained' component={Link} to='/symptomsurvey'>Take a survey</Button>
  )
}
