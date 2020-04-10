/* eslint-disable no-console */

import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import actions from '../redux/actions/actions';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';

const useStyles = makeStyles({
  logo: {
    width: '75px',
    height: '60px',
  },
  textLogo: {
    width: '250px',
    height: '50px',
  },
});
const Disclaimer = props => {
  const { userSession } = useBlockstack();
  const { answer } = props;
  const { t } = useTranslation();
  const history = useHistory();

  const disclaimerAnswerJSON = {
    answerChoice: null,
  };

  const storeAnswer = ans => {
    disclaimerAnswerJSON.answerChoice = ans;
    props.setAnswer(ans, disclaimerAnswerJSON, userSession);

    // Navigate to onboarding screen if user agrees to disclaimer
    if (ans) {
      history.push('/onboard');
    }
  };

  const classes = useStyles();
  return (
    <div>
      {!answer ? (
        <Dialog open aria-describedby="disclaimer">
          <DialogTitle align="center" id="alert-dialog-title">
            <Logo className={classes.logo} />
            <TextLogo className={classes.textLogo} />
          </DialogTitle>
          <DialogContent>
            <DialogContent align="left" id="disclaimer-text">
              <DialogContentText>{t('disclaimer.text0')}</DialogContentText>
              <DialogContentText>{t('disclaimer.text1')}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={() => storeAnswer(true)}>
                {t('disclaimer.agree')}
              </Button>
              <Button variant="outlined" onClick={() => storeAnswer(false)}>
                {t('disclaimer.disagree')}
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};

Disclaimer.propTypes = {
  answer: PropTypes.bool.isRequired,
  setAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { answer: state.disclaimerReducer.answer };
};

const mapDispatchToProps = dispatch => {
  return {
    setAnswer: (answer, disclaimerAnswerJSON, userSession) =>
      dispatch(actions.setDisclaimerAnswerThunk(answer, disclaimerAnswerJSON, userSession)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);
