import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, TextField, Grid } from '@material-ui/core';
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
  const { setSurveyPage, surveyPage, setSurveyPage3, survey, setCompleted } = props;
  const { nonPhysical } = survey;
  const classes = useStyles();
  const [openComment, setOpenComment] = useState(nonPhysical.openComment || '');

  useEffect(() => {
    setSurveyPage3({ openComment });
    setCompleted(surveyPage);
  }, [openComment, setSurveyPage3, setCompleted, surveyPage]);

  const handleopenComment = value => {
    setOpenComment(value);
    setSurveyPage3({ openComment: value });
  };

  const goBack = () => {
    setSurveyPage(surveyPage - 1);
  };

  const submitButton = () => {
    setSurveyPage(surveyPage + 1);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Typography>
          <b>Q6: Anything other symptoms or comments you want to add?</b>
        </Typography>
        <Grid container justify="center" spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              placeholder="e.g. loss of smell or taste"
              className={classes.additionalComments}
              defaultValue={openComment}
              onChange={e => handleopenComment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={goBack} variant="outlined" color="secondary" className={classes.continueButton}>
              BACK
            </Button>
            <Button onClick={submitButton} color="secondary" className={classes.continueButton}>
              CONTINUE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
SurveyPage3.propTypes = {
  setSurveyPage3: PropTypes.func.isRequired,
  survey: PropTypes.objectOf(Object).isRequired,
  setSurveyPage: PropTypes.func.isRequired,
  surveyPage: PropTypes.number.isRequired,
  setCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    survey: state.surveyReducer.survey,
    surveyPage: state.surveyReducer.surveyPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage3: survey => dispatch(actions.setSurveyPage3(survey)),
    setSurveyPage: page => dispatch(actions.setSurveyPage(page)),
    setCompleted: page => dispatch(actions.setCompleted(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage3);
