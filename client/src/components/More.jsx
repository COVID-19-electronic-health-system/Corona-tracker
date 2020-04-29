/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-useless-escape */

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import { DialogContent, DialogContentText, TextField, Grid, Typography, Snackbar, Link } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import buttonsCss from '../css/buttons';

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
  severity: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

const More = () => {
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbar, setSnackbar] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const classes = useStyle();
  const { signOut } = useBlockstack();
  const { t } = useTranslation();
  const history = useHistory();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  let errorMessage = '';

  const subscribe = () => {
    if (!/^\+[1-9]\d{1,14}$/.test(phoneNumber)) {
      errorMessage = 'Invalid phone number. Please try again';
      setSnackbar({
        severity: 'error',
        message: errorMessage,
      });
      setOpenSnackbar(true);
    } else {
      axios
        .post(
          'https://kplh25sfce.execute-api.us-east-1.amazonaws.com/default/coronalert-subscribe',
          {
            phoneNumber,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(res => {
          console.log(res);
          handleClose();
          errorMessage = `Subscribed successfully! You will be automatically unsubscribed in one day, and will receive three texts in that timespan. If you enter again, you will receive double the notifications - so please do not! This is very early alpha :)`;
          setSnackbar({
            severity: 'success',
            message: errorMessage,
          });
          setOpenSnackbar(true);
        })
        .catch(err => {
          if (err.response && err.response.status === 409) {
            errorMessage = 'This phone number was already subscribed';
          } else {
            errorMessage = 'Something went wrong. Please try again';
          }
          setSnackbar({
            severity: 'error',
            message: errorMessage,
          });
          setOpenSnackbar(true);
        });
    }
  };

  const unsubscribe = async () => {
    const url = 'https://kplh25sfce.execute-api.us-east-1.amazonaws.com/default/coronalert-unsubscribe';
    const data = { phoneNumber };
    try {
      await axios.post(url, data);
      alert('Unsubscribed successfully!');
      handleClose();
    } catch (err) {
      if (err.response && err.response.status === 404) {
        errorMessage = 'This phone number was not subscribed';
      } else {
        errorMessage = 'Something went wrong. Please try again';
      }
      setSnackbar({
        severity: 'error',
        message: errorMessage,
      });
      setOpenSnackbar(true);
    }
  };

  const navigateTo = href => {
    history.push(href);
  };

  return (
    <div>
      <Grid container alignContent="center" className={classes.root} onClick={handleClickOpen}>
        <Grid container className={classes.grow} alignContent="center" justify="center">
          <Grid container style={{ width: '100%' }} alignContent="center" justify="center">
            <MoreHorizIcon className={classes.icon} />
          </Grid>

          <Grid container alignContent="center" justify="center">
            <Typography variant="caption">more</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.text}>
          More
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContent>
            <DialogContentText className={classes.descriptionText}>
              Enter your phone number to subscribe/unsubscribe to the occasional question/survey to answer over text.
            </DialogContentText>
            <Link
              className={classes.descriptionText}
              href="https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers"
            >
              Please add your +country code before entering
            </Link>
            <TextField
              className={classes.subtitleText}
              onChange={e => setPhoneNumber(e.target.value)}
              autoFocus
              margin="dense"
              id="filled-phone"
              label={t('phoneNumber')}
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions className={classes.subscribeContainer}>
            <Button
              onClick={() => {
                subscribe();
              }}
              color="primary"
              className={classes.subtitleText}
            >
              Subscribe
            </Button>
            <Button
              onClick={() => {
                unsubscribe();
              }}
              color="secondary"
              className={classes.subtitleText}
            >
              Unsubscribe
            </Button>
          </DialogActions>
          <DialogActions>
            <Button
              size="medium"
              onClick={() => {
                handleClose();
                navigateTo('/settings');
              }}
              variant="contained"
              className={classes.buttons}
            >
              Settings
            </Button>
            <Button
              size="medium"
              onClick={() => {
                navigateTo('/about');
                handleClose();
              }}
              variant="contained"
              className={classes.buttons}
            >
              About
            </Button>
            <Button
              size="medium"
              color="secondary"
              variant="contained"
              className={classes.buttons}
              onClick={() => {
                handleClose();
                signOut();
              }}
            >
              {t('signoutButtonText')}
            </Button>
          </DialogActions>
        </DialogContent>
        <Snackbar
          open={openSnackbar}
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

export default More;
