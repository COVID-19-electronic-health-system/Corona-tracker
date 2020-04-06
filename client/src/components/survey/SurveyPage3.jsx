/* eslint-disable no-console */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Grid } from '@material-ui/core';
import { useBlockstack } from 'react-blockstack';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  additionalComments: {
    margin: '3em',
    width: '80vw',
    border: '2px solid #f64141',
  },
  continueButton: {
    ...buttonsCss.buttons,
    width: '50vw',
  },
}));

const SurveyPage3 = props => {
  const { numObservations, setSurveyPage3, survey } = props;
  const classes = useStyles();
  const [openComment, setOpenComment] = useState('');
  const history = useHistory();
  const { userSession } = useBlockstack();

  const handleopenComment = value => {
    setOpenComment(value);
  };

  const submitSurveyPage3 = async () => {
    const surveyPage3 = {
      openComment,
    };

    setSurveyPage3(surveyPage3);

    window.localStorage.setItem('surveyCompleted', 'true');

    const observation = survey;
    const encryptOptions = { encrypt: true };
    const fileNumber = `${numObservations + 1}`.padStart(7, '0');

    userSession
      .putFile(`observation/${fileNumber}.json`, JSON.stringify(observation), encryptOptions)
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Typography>
          <b>Q6: Anything else you want to add?</b>
        </Typography>
        <Grid container justify="center" spacing={1} className={classes.grid}>
          <Grid item xs={12} xl={4}>
            <TextField
              variant="outlined"
              className={classes.additionalComments}
              onChange={e => handleopenComment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} xl={4}>
            <Button onClick={submitSurveyPage3} color="secondary" className={classes.continueButton}>
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
SurveyPage3.propTypes = {
  numObservations: PropTypes.number.isRequired,
  setSurveyPage3: PropTypes.func.isRequired,
  survey: PropTypes.objectOf(object).isRequired,
};

const mapStateToProps = state => {
  return {
    survey: state.surveyReducer.survey,
    numObservations: state.observationsReducer.numObservations,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage3: survey => dispatch(actions.setSurveyPage3(survey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage3);
