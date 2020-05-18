import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const PopUpContactAlert = props => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'ALERT INFORMATION WITH A BAD CONDITION OF COVID-19'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If your symptoms are serious, but not an emergency, call your health care provider right away. Many
            providers can help you over the phone or through telemedicine visits. If you need a health care provider,
            contact NYC Health + Hospitals at 844-NYC-4NYC (844-692- 4692) or 311. You can get care regardless of
            immigration status or ability to pay.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} variant="outlined" color="secondary" className={props.styleButton}>
            Close
          </Button>
          <Button
            onClick={props.submitSurveyPage1}
            variant="outlined"
            color="secondary"
            className={props.styleButton}
            autoFocus
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUpContactAlert;
