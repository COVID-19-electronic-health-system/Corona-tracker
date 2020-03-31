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
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
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

  const disclaimerAnswerJSON = {
    answerChoice: null,
  };

  const storeAnswer = ans => {
    disclaimerAnswerJSON.answerChoice = ans;
    props.setAnswer(ans, disclaimerAnswerJSON, userSession);
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
              <DialogContentText>
                <Trans i18nKey="disclaimer.text0" />
              </DialogContentText>
              <DialogContentText>
                <Trans i18nKey="disclaimer.text1" />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={() => storeAnswer(true)}>
                <Trans i18nKey="disclaimer.agree" />
              </Button>
              <Button variant="outlined" onClick={() => storeAnswer(false)}>
                <Trans i18nKey="disclaimer.disagree" />I don&apos;t agree
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
