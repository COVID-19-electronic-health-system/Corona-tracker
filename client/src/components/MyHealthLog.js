import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function MyHealthLog() {
  return (
    <Link to="/symptomsurvey">
      <Button color="secondary" variant='contained'>Take a survey</Button>
    </Link>
  )
}
