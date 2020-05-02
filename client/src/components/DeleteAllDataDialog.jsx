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
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
const DeleteAllDataDialog = props => {
  const { userSession } = useBlockstack();
  const { setShowDeletionDialog, deleteUserData, setReminderStatus } = props;
  const history = useHistory();

  const deleteAllData = () => {
    // deletes all data including observation data
    deleteUserData(userSession);
    history.push('/');
  };

  const classes = useStyles();
  return (
    <div>
      <Dialog open aria-describedby="disclaimer">
        <DialogTitle align="center" id="alert-dialog-title">
          <object title="logo" className={classes.logo} data={Logo} type="image/svg+xml" />
          <object title="logoText" className={classes.textLogo} data={TextLogo} type="image/svg+xml" />
        </DialogTitle>
        <DialogContent>
          <DialogContent align="left" id="disclaimer-text">
            <DialogContentText>Are you sure you want to delete all of your user data?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => {
                deleteAllData();
                window.localStorage.setItem('surveyCompleted', 'false');
                setReminderStatus(true);
              }}
            >
              Yes
            </Button>
            <Button variant="outlined" onClick={() => setShowDeletionDialog(false)}>
              No
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

DeleteAllDataDialog.propTypes = {
  setShowDeletionDialog: PropTypes.func.isRequired,
  deleteUserData: PropTypes.func.isRequired,
  setReminderStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    setShowDeletionDialog: ownProps.setShowDeletionDialog,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUserData: userSession => dispatch(actions.deleteUserDataThunk(userSession)),
    setReminderStatus: status => dispatch(actions.setReminderStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAllDataDialog);
