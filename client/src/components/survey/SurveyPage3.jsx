import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Grid } from '@material-ui/core';
import { useBlockstack } from 'react-blockstack';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: theme.breakpoints.values.md,
    padding: '4px 32px',
  },
  additionalComments: {
    width: '100%',
    border: '2px solid #f64141',
  },
  continueButton: {
    ...buttonsCss.buttons,

    margin: '20px 8px 10px 8px',
    width: '160px',
  },
}));

const SurveyPage3 = props => {
  const { setSurveyPage3, survey, toSurveyPage2, addObservation, clearSurvey } = props;
  const { nonPhysical } = survey;
  const classes = useStyles();
  const [openComment, setOpenComment] = useState(nonPhysical.openComment || '');
  const history = useHistory();
  const { userSession } = useBlockstack();

  const handleopenComment = value => {
    setOpenComment(value);
  };

  const sendBackToPage2 = () => {
    toSurveyPage2({ openComment });
  };

  const submitSurveyPage3 = async () => {
    survey.nonPhysical.openComment = openComment;

    addObservation(userSession, survey);

    history.push('/');

    setSurveyPage3({
      openComment,
    });

    clearSurvey();

    window.localStorage.setItem('surveyCompleted', 'true');
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={12}>
          <Typography>
            <b>Q6: Anything else you want to add?</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            className={classes.additionalComments}
            defaultValue={openComment}
            onChange={e => handleopenComment(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={sendBackToPage2} variant="outlined" color="secondary" className={classes.continueButton}>
            BACK
          </Button>
          <Button onClick={submitSurveyPage3} color="secondary" className={classes.continueButton}>
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
SurveyPage3.propTypes = {
  setSurveyPage3: PropTypes.func.isRequired,
  survey: PropTypes.objectOf(Object).isRequired,
  toSurveyPage2: PropTypes.func.isRequired,
  addObservation: PropTypes.func.isRequired,
  clearSurvey: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    survey: state.surveyReducer.survey,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage3: survey => dispatch(actions.setSurveyPage3(survey)),
    toSurveyPage2: survey => dispatch(actions.toSurveyPage2(survey)),
    addObservation: (userSession, survey) => dispatch(actions.addObservation(userSession, survey)),
    clearSurvey: () => dispatch(actions.clearSurvey()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage3);
