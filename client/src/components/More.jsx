/* eslint-disable no-console */
/* eslint-disable no-alert */

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
import { DialogContent, DialogContentText, TextField, Grid, Typography } from '@material-ui/core';
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
    color: 'white',
    textAlign: 'left',
  },
  subscribeContainer: {
    align: 'center',
  },
  subtitleText: {
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

const More = () => {
  const [open, setOpen] = useState(false);
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

  const subscribe = () => {
    axios
      .post(
        'https://m72j7fayxh.execute-api.us-east-1.amazonaws.com/api/subscribe',
        {
          number: phoneNumber,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(res => {
        console.log(res);
        alert(
          `Subscribed successfully! You will be automatically unsubscribed in one day, and will receive three texts in that timespan. If you enter again, you will receive double the notifications - so please do not! This is very early alpha :)`
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  const unsubscribe = async () => {
    const url = 'https://kplh25sfce.execute-api.us-east-1.amazonaws.com/default/coronalert-unsubscribe';
    const data = { phoneNumber };
    try {
      await axios.post(url, data);
      alert('Unsubscribed successfully!');
    } catch (err) {
      console.error(err);
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
                handleClose();
              }}
              color="primary"
              className={classes.subtitleText}
            >
              Subscribe
            </Button>
            <Button
              onClick={() => {
                unsubscribe();
                handleClose();
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
                navigateTo('/onboard');
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
      </Dialog>
    </div>
  );
};

export default More;
