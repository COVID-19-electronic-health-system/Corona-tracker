/* eslint-disable no-console */
/* eslint-disable no-alert */

import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { TextField, Button, Slide } from '@material-ui/core';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  SubscribeContainer: {
    bottom: '20vh',
    position: 'fixed',
    height: '8.5vh',
  },
});

const Subscribe = () => {
  const [number, setNumber] = useState('');
  const { t } = useTranslation();
  const classes = useStyles();
  function subscribe() {
    axios
      .post(
        'https://m72j7fayxh.execute-api.us-east-1.amazonaws.com/api/subscribe',
        {
          number,
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
  }

  return (
    <div className={classes.SubscribeContainer}>
      <Slide direction="right" in mountOnEnter unmountOnExit>
        <FormControl>
          <TextField
            id="filled-phone"
            label={t('phoneNumber')}
            onChange={e => setNumber(e.target.value)}
            variant="filled"
          />
          <Button onClick={() => subscribe()} variant="contained" color="secondary">
            {t('subscribe')}
          </Button>
        </FormControl>
      </Slide>
    </div>
  );
};

export default Subscribe;
