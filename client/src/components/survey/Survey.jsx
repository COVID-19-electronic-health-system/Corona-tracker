import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import StepButton from '@material-ui/core/StepButton';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import SurveyPage1 from './SurveyPage1';
import SurveyPage2 from './SurveyPage2';
import SurveyPage3 from './SurveyPage3';
import SurveyPage4 from './SurveyPage4';
import actions from '../../redux/actions/actions';

const SurveyConnector = withStyles({
  lineHorizontal: {
    alignContent: 'center',
  },
  alternativeLabel: {
    top: 19,
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient(45deg, #667aff, #4760ff)',
    },
  },
  completed: {
    '& $line': {
      backgroundColor: '#667aff',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#8EAEFB',
    borderRadius: 1,
  },
})(StepConnector);

const useSurveyStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#8EAEFB',
    zIndex: 1,
    color: '#505050',
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  active: {
    backgroundImage: 'linear-gradient(45deg, #4760ff, #82a4f8)',
    boxShadow: '0px 1px 5px 0px #4760ff',
    color: '#fff',
  },
  completed: {
    backgroundColor: '#667aff',
  },
});

function SurveyStepIcon(props) {
  const classes = useSurveyStepIconStyles();
  const { active, completed, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icon}
    </div>
  );
}

SurveyStepIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  icon: PropTypes.number.isRequired,
};

const useStyles = makeStyles(() => ({
  stepper: {
    backgroundColor: 'transparent',
    padding: 0,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const Survey = props => {
  const { surveyPage, setSurveyPage, requiredStep } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(surveyPage);
  const [open, setOpen] = useState(false);
  const contentEl = document.getElementById('content');

  const handleStep = index => {
    const pageToStepTo = index;
    if (pageToStepTo > 1 && !requiredStep) {
      setOpen(true);
    } else {
      setActiveStep(pageToStepTo);
      setSurveyPage(pageToStepTo);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (contentEl) contentEl.scrollTop = 0;
    setActiveStep(surveyPage);
  }, [surveyPage, contentEl]);

  return (
    <div>
      <Stepper
        alternativeLabel
        nonLinear
        activeStep={activeStep}
        connector={<SurveyConnector />}
        className={classes.stepper}
      >
        {[0, 1, 2, 3].map(step => {
          return (
            <Step key={step}>
              <StepButton
                onClick={() => {
                  handleStep(step);
                }}
              >
                <StepLabel StepIconComponent={SurveyStepIcon} />
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && <SurveyPage1 />}
      {activeStep === 1 && <SurveyPage2 />}
      {activeStep === 2 && <SurveyPage3 />}
      {activeStep === 3 && <SurveyPage4 />}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Complete Step 2 before moving on</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Survey.propTypes = {
  surveyPage: PropTypes.number.isRequired,
  setSurveyPage: PropTypes.func.isRequired,
  requiredStep: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    surveyPage: state.surveyReducer.surveyPage,
    requiredStep: state.surveyReducer.completedSteps[1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage: page => dispatch(actions.setSurveyPage(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
