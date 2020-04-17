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
import Link from '@material-ui/core/Link';
import actions from '../redux/actions/actions';
import { TextLogo, Logo } from '../utils/imgUrl';

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
            <object title="logo" className={classes.logo} data={Logo} type="image/svg+xml" />
            <object title="logoText" className={classes.textLogo} data={TextLogo} type="image/svg+xml" />
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
            <Link href="https://coronatracker.me/privacy-policy">Privacy Policy</Link>
            <Link href="https://coronatracker.me/terms-of-use">Terms of Use</Link>
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
