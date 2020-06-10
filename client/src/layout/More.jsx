/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import { useTranslation, Trans } from 'react-i18next';
import { DialogContent, DialogContentText, TextField, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import buttonsCss from 'styles/buttons';
import actions from 'redux/actions/actions';

const useStyle = makeStyles(theme => ({
  root: {
    width: '80px',
    marginTop: '8px',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      width: '93px',
    },
  },
  grow: {
    color: 'white',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  dialog: {
    width: '100vw',
    textAlign: 'center',
  },
  text: {
    backgroundImage: 'linear-gradient(40deg, #4760ff 0%, #82a4f8 100%)',
    color: 'white',
  },
  dialogContent: {
    backgroundImage: 'linear-gradient(40deg, #7a9cf9 0%, #97b9f7 100%)',
  },
  descriptionText: {
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center',
    marginTop: '10px',
  },
  subscribeContainer: {
    align: 'center',
  },
  subtitleText: {
    marginTop: '1em',
    color: 'white',
    margin: '0 auto',
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
  },
  icon: {
    fontSize: '40px',
  },
  buttons: {
    ...buttonsCss.buttons,
    width: '33vw',
    height: '8vh',
    minHeight: '50px',
  },
  link: {
    height: '100%',
    width: '100vw',
    textDecoration: 'none',
    color: 'white',
    alignContent: 'center',
  },
}));

function Alert(props) {
  const { severity, children, onClose } = props;
  return (
    <MuiAlert elevation={6} variant="filled" severity={severity} onClose={onClose}>
      {children}
    </MuiAlert>
  );
}

Alert.propTypes = {
  severity: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

Alert.defaultProps = {
  severity: '',
  children: '',
};

const More = props => {
  const {
    setReminderStatus,
    setSubscribedNumber,
    unsubscribeNumber,
    subscribedNumber,
    clearResponse,
    error,
    success,
    setMoreToogle,
    moreToggel,
  } = props;
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbar, setSnackbar] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const classes = useStyle();
  const { signOut, userSession } = useBlockstack();
  const { t } = useTranslation();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (success || error.response) {
      clearResponse();
    }
    setOpenSnackbar(false);
  };

  const handleSubmitSubscribe = () => {
    if (!/^\+[1-9]\d{1,14}$/.test(phoneNumber)) {
      setSnackbar({
        severity: 'error',
        message: <Trans i18nKey="moreSection.text.invalidPhone.invalidPhoneNumberPleaseTryAgain" />,
      });
      setOpenSnackbar(true);
    } else {
      setSubscribedNumber(userSession, phoneNumber);
    }
    setPhoneNumber('');
  };

  useEffect(() => {
    let message;
    let severity;
    if (error.response) {
      severity = 'error';
      if (error.response.status === 409) {
        message = <Trans i18nKey="moreSection.text.subscribeDuplicate.thisPhoneNumberWasAlreadySubscribed" />;
      } else {
        message = <Trans i18nKey="moreSection.text.subscribeError.somethingWentWrongPleaseTryAgain" />;
      }
    }
    if (success) {
      severity = 'success';
      message =
        success === 'subscribed' ? (
          <Trans i18nKey="moreSection.text.subscribeSuccess.subscribedSuccessfullyYouWillBeAutomaticallyUnsubscribedInOneDayAndWillReceiveThreeTextsInThatTimespanIfYouEnterAgainYouWillReceiveDoubleTheNotificationsSoPleaseDoNotThisIsVeryEarlyAlpha" />
        ) : (
          <Trans i18nKey="moreSection.text.unsubscribeSuccess.unsubscribedSuccessfully" />
        );
    }
    setSnackbar({
      message,
      severity,
    });
  }, [error, success]);

  return (
    <div>
      <Dialog
        className={classes.dialog}
        open={moreToggel}
        onClose={() => setMoreToogle(!moreToggel)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.text}>
          {t('moreSection.text.buttonSettings.settings')}
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContent>
            <DialogContentText className={classes.descriptionText}>
              {t(
                'moreSection.text.enterYourPhone.enterYourPhoneNumberToSubscribeUnsubscribeToTheOccasionalQuestionSurveyToAnswerOverText'
              )}
            </DialogContentText>
            <a
              className={classes.descriptionText}
              href="https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers"
            >
              <Trans i18nKey="moreSection.text.countryCode.pleaseAddYourCountryCodeBeforeEntering" />
            </a>
            {subscribedNumber ? (
              <DialogContentText className={classes.descriptionText}>
                {`You are subscribed to text alerts at phone number: ${subscribedNumber}`}
              </DialogContentText>
            ) : (
              <TextField
                className={classes.subtitleText}
                onChange={e => setPhoneNumber(e.target.value)}
                autoFocus
                margin="dense"
                id="filled-phone"
                label={t('moreSection.text.inputLabel.enterPhoneNumber')}
                type="email"
                fullWidth
              />
            )}
          </DialogContent>
          <DialogActions className={classes.subscribeContainer}>
            {!subscribedNumber && (
              <Button
                onClick={() => {
                  handleSubmitSubscribe();
                }}
                color="primary"
                className={classes.subtitleText}
              >
                {t('moreSection.text.buttonSubscribe.subscribe')}
              </Button>
            )}
            {subscribedNumber && (
              <Button
                onClick={() => {
                  unsubscribeNumber(userSession, subscribedNumber);
                }}
                color="secondary"
                className={classes.subtitleText}
              >
                {t('moreSection.text.buttonUnsubscribe.unsubscribe')}
              </Button>
            )}
          </DialogActions>
          <DialogActions>
            <Button
              component={Link}
              to="/settings"
              size="medium"
              onClick={() => {
                setMoreToogle(!moreToggel);
              }}
              variant="contained"
              className={classes.buttons}
            >
              {t('moreSection.text.buttonSettings.settings')}
            </Button>
            <Button
              component={Link}
              to="/about"
              size="medium"
              onClick={() => {
                setMoreToogle(!moreToggel);
              }}
              variant="contained"
              className={classes.buttons}
            >
              {t('moreSection.text.buttonAbout.about')}
            </Button>
            <Button
              size="medium"
              color="secondary"
              variant="contained"
              className={classes.buttons}
              onClick={() => {
                setMoreToogle(!moreToggel);
                setReminderStatus(true);
                signOut();
              }}
            >
              {t('moreSection.text.buttonSignOut.signOut')}
            </Button>
          </DialogActions>
        </DialogContent>
        <Snackbar
          open={openSnackbar || success || error.response}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Dialog>
    </div>
  );
};

More.propTypes = {
  setSubscribedNumber: PropTypes.func.isRequired,
  unsubscribeNumber: PropTypes.func.isRequired,
  error: PropTypes.shape({
    response: PropTypes.shape({
      status: PropTypes.number,
    }),
  }).isRequired,
  success: PropTypes.string.isRequired,
  clearResponse: PropTypes.func.isRequired,
  subscribedNumber: PropTypes.string,
  setReminderStatus: PropTypes.func.isRequired,
  setMoreToogle: PropTypes.func.isRequired,
  moreToggel: PropTypes.bool.isRequired,
};

More.defaultProps = {
  subscribedNumber: null,
};

const mapState = state => {
  return {
    subscribedNumber: state.onboardingReducer.phoneNumber.subscribedNumber,
    error: state.onboardingReducer.phoneNumber.error,
    success: state.onboardingReducer.phoneNumber.success,
    moreToggel: state.navToggle.moreToggel,
  };
};

const mapDispatch = dispatch => {
  return {
    setSubscribedNumber: (userSession, number) => dispatch(actions.setSubscribedNumber(userSession, number)),
    unsubscribeNumber: (userSession, number) => dispatch(actions.unsubscribeNumber(userSession, number)),
    clearResponse: () => dispatch(actions.clearResponse()),
    setReminderStatus: status => dispatch(actions.setReminderStatus(status)),
    setMoreToogle: moreToggel => dispatch(actions.setMoreToogle(moreToggel)),
  };
};

export default connect(mapState, mapDispatch)(More);
