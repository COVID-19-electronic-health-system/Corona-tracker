import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Observations from './observations';
import AvgTemperature from '../AvgTemperature';
import Chart from '../Chart';
import chartType from '../../utils/chartType';
import BehavioralChart from '../behavior/chart/BehavioralChart';
import buttonsCss from '../../css/buttons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '15vh',
  },
  buttons: {
    '& > *': {
      ...buttonsCss.buttons,
      margin: theme.spacing(1),
    },
  },
  behaveDiv: {
    paddingBottom: '15vh',
    width: '100vw',
    height: '60vh',
    [theme.breakpoints.up('md')]: { width: '60vw' },
  },
  feverDiv: {
    paddingBottom: '15%',
    width: '100vw',
    [theme.breakpoints.up('md')]: { width: '60vw' },
  },
  export: {
    ...buttonsCss.buttons,
    marginTop: '5px',
  },
}));

const ShowMeMore = () => {
  const classes = useStyles();
  const [value, setValue] = useState('observations');
  return (
    <div className={classes.root}>
      <Grid>
        <ButtonGroup className={classes.buttons} aria-label="contained primary button group">
          <Button onClick={() => setValue('observations')}>Observations</Button>
          <Button onClick={() => setValue('behavioralChart')}>Behavioral</Button>
          <Button onClick={() => setValue('avgTemperature')}>Temperature</Button>
        </ButtonGroup>
      </Grid>
      <Grid container justify="center">
        {value === 'observations' ? <Observations /> : null}
        {value === 'behavioralChart' ? (
          <div className={classes.behaveDiv}>
            <BehavioralChart />
          </div>
        ) : null}
        {value === 'avgTemperature' ? (
          <Grid container justify="center" className={classes.feverDiv}>
            <AvgTemperature />
            <Chart chartType={chartType.bar} />
          </Grid>
        ) : null}
      </Grid>

      <Button className={classes.export}>Export to Excel</Button>
    </div>
  );
};

export default ShowMeMore;
