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

export const Disclaimer = props => {
  const { userSession } = useBlockstack();

  const disclaimerAnswer = {
    answerChoice: null,
  };

  const storeAnswer = async answer => {
    props.setAnswer(answer);
    disclaimerAnswer.answerChoice = answer;

    try {
      userSession.putFile(`disclaimer.json`, JSON.stringify(disclaimerAnswer));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!props.answer ? (
        <Dialog open={true} aria-describedby="alert-dialog-description">
          <DialogTitle align="center" id="alert-dialog-title">
            <Logo width="75px" height="60px" />
            <TextLogo width="350px" height="55px" />
          </DialogTitle>
          <DialogContent>
            <DialogContent align="left" id="alert-dialog-description">
              <DialogContentText>
                The CoronaTracker is designed to help you navigate through the pandemic with accurate information,
                charting your wellbeing, and tracking your health. The CoronaTracker is not intended to be used or
                viewed as diagnosis or treatment of disease or other symptoms, including but not limited to COVID-19.
              </DialogContentText>
              <DialogContentText>
                This application was made by the community for the community. This application is made for you! You are
                in control of how you would like to contribute your data for public health and research.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={() => storeAnswer(true)}>
                I agree
              </Button>
              <Button variant="outlined" onClick={() => storeAnswer(false)}>
                I don't agree
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
