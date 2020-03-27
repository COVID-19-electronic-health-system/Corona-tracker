import React from 'react';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import { connect } from 'react-redux';
import actions from '../redux/actions/actions';
//material UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const Disclaimer = props => {
  const [open] = React.useState(true);

  return (
    <div>
      {!props.answer ? (
        <Dialog open={open} aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">CoronaTracker</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              The CoronaTracker is designed to help you navigate through the pandemic with accurate information,
              charting your wellbeing, and tracking your health. The CoronaTracker is not intended to be used or viewed
              as diagnosis or treatment of disease or other symptoms, including but not limited to COVID-19. This
              application was made by the community for the community. This application is made for you! You are in
              control of how you would like to contribute your data for public health and research.
            </DialogContentText>
            <DialogActions>
              <Button color="primary" autofocus onClick={() => props.setAnswer(true)}>
                I agree
              </Button>
              <Button color="primary" onClick={() => props.setAnswer(false)}>
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
