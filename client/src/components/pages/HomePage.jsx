import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogActions, DialogContent, DialogContentText, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import HealthLogToggle from 'components/homePage/HealthLogToggle';
import actions from '../../redux/actions/actions';
import buttonsCss from '../../styles/buttons';

const useStyles = makeStyles(theme => ({
  hr: {
    width: '100px',
    border: '1px black solid',
  },
  button: {
    width: theme.spacing(20),
    ...buttonsCss.buttons,
  },
  dialog: {
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
  },
}));

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function DiagnosticContainer(props) {
  const { reminderStatus, setReminderStatus } = props;
  const handleClose = () => {
    setReminderStatus(false);
  };
  const classes = useStyles();
  const { userSession } = useBlockstack();
  const today = new Date();
  const { i18n } = useTranslation();
  const history = useHistory();

  return (
    <div>
      <Typography variant="h5">
        <Trans i18nKey="logSection.text.hello.hello " />
        <b>{userSession.loadUserData().profile.name}</b>
      </Typography>
      <Typography variant="h6">
        <Trans i18nKey="logSection.text.todayIs.todayIs" />:{' '}
        <b>{today.toLocaleDateString(i18n.languages, dateOptions)}</b>{' '}
      </Typography>
      <hr className={classes.hr} />
      <HealthLogToggle />
      <Dialog
        open={reminderStatus}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.dialog}>
          <DialogContentText id="alert-dialog-description">
            <Trans i18nKey="logSection.text.takeSurvey.takeASurvey" />{' '}
          </DialogContentText>
          <DialogActions className={classes.buttonContainer}>
            <Button
              className={classes.button}
              color="default"
              onClick={() => {
                handleClose();
                history.push('/symptomsurvey');
              }}
            >
              <Trans i18nKey="logSection.text.takeSurvey.takeASurvey" />
            </Button>
            <Button onClick={handleClose} color="default">
              <Trans i18nKey="surveySection.text.close.close" />
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}

DiagnosticContainer.propTypes = {
  reminderStatus: PropTypes.bool.isRequired,
  setReminderStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  reminderStatus: state.surveyReducer.reminderStatus,
});

const mapDispatchToProps = dispatch => ({
  setReminderStatus: status => dispatch(actions.setReminderStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiagnosticContainer);
