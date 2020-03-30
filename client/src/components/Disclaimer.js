import React from 'react';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useBlockstack } from 'react-blockstack';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from 'react-i18next';

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
export const Disclaimer = props => {
  const { userSession } = useBlockstack();

  const disclaimerAnswer = {
    answerChoice: null,
  };

  const storeAnswer = async answer => {
    props.setAnswer(answer);
    disclaimerAnswer.answerChoice = answer;

    await userSession
      .putFile(`disclaimer.json`, JSON.stringify(disclaimerAnswer))
      .then(res => 200)
      .catch(err => console.error(err));
  };

  const classes = useStyles()
  return (
    <div>
      {!props.answer ? (
        <Dialog open={true} aria-describedby="disclaimer">
          <DialogTitle align='center' id="alert-dialog-title">
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
                <Trans i18nKey="disclaimer.disagree" />
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return { answer: state.disclaimerReducer.answer };
};

const mapDispatchToProps = dispatch => {
  return {
    setAnswer: answer => dispatch(actions.setDisclaimerAnswer(answer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);
