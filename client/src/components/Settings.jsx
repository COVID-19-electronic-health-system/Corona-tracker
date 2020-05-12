import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { Typography, Grid, Button } from '@material-ui/core';
import DeleteAllDataDialog from './DeleteAllDataDialog';
import DeletionDialog from './DeletionDialog';
import buttonsCss from '../css/buttons';
import TranslationsMenu from './Translations';

const useStyles = makeStyles(() => ({
  root: {
    paddingBottom: '15em',
    padding: '10px',
  },
  deleteButton: {
    ...buttonsCss.buttons,
    margin: '0px 8px 2px 8px',
    width: '300px',
    cursor: 'pointer',
    height: '3.5em',
    marginTop: '2em',
    background: `#f64141`,
    '&:hover': {
      boxShadow: '0px 1px 10px 0px #f64141',
      background: `#f64141`,
    },
  },
  updateButton: {
    ...buttonsCss.buttons,
    background: '#4760ff',
    margin: '0px 8px 2px 8px',
    width: '300px',
    cursor: 'pointer',
    height: '3.5em',
    marginTop: '2em',
    '&:hover': {
      boxShadow: '0px 1px 10px 0px #4760ff',
      background: '#4760ff',
      color: 'white',
    },
  },
}));

const Settings = props => {
  const { demographicsComorbidities } = props;
  const { age, gender, city, state, zip, isSmoker, isObese, isAsthmatic } = demographicsComorbidities;
  const classes = useStyles();
  const [showDeletionDialog, setShowDeletionDialog] = useState(false);
  const history = useHistory();
  return (
    <div>
      <Grid container justify="center" className={classes.root}>
        <Grid container alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h2" color="textPrimary">
              <b>My Information:</b>
            </Typography>
          </Grid>
          <Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Age (Years):
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {age}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Gender:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {gender}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  City:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {city}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  State:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {state}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Zip:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {zip}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Smoker:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {isSmoker}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Obese:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {isObese}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Asthmatic:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {isAsthmatic}
                </Typography>
              </Grid>
            </Grid>
            <Button className={classes.updateButton} onClick={() => history.push('/onboard')}>
              Update Information
            </Button>
          </Grid>

          <Button
            onClick={() => {
              setShowDeletionDialog(true);
            }}
            className={classes.deleteButton}
          >
            DELETE ALL OBSERVATION DATA
          </Button>
          {showDeletionDialog && <DeletionDialog setShowDeletionDialog={setShowDeletionDialog} />}

          <Button
            className={classes.deleteButton}
            onClick={() => {
              setShowDeletionDialog(true);
            }}
          >
            DELETE ALL DATA
          </Button>
          {showDeletionDialog && <DeleteAllDataDialog setShowDeletionDialog={setShowDeletionDialog} />}
        </Grid>
        <TranslationsMenu />
        <Grid container alignItems="center" direction="column">
          <Link href="https://coronatracker.me/privacy-policy" color="textPrimary">
            Privacy Policy
          </Link>
          <Link href="https://coronatracker.me/terms-of-use" color="textPrimary">
            Terms of Use
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

Settings.propTypes = {
  demographicsComorbidities: PropTypes.shape({
    age: PropTypes.string,
    gender: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    isSmoker: PropTypes.string,
    isObese: PropTypes.string,
    isAsthmatic: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  demographicsComorbidities: state.onboardingReducer.demographicsComorbidities,
});

export default connect(mapStateToProps, null)(Settings);
