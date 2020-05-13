/* eslint-disable no-console */

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
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

const QuizScoreDialog = ({ score, quizSize, setShowQuizScoreDialog, setScore }) => {
  const classes = useStyles();

  const resetDialog = () => {
    setScore(0);
    setShowQuizScoreDialog(false);
  };

  return (
    <Dialog open aria-describedby="disclaimer">
      <DialogTitle align="center" id="alert-dialog-title">
        <object title="logo" className={classes.logo} data={Logo} type="image/svg+xml" />
        <object title="logoText" className={classes.textLogo} data={TextLogo} type="image/svg+xml" />
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Her&apos;s how you did:</DialogContentText>
        <DialogContentText>
          {score} out of {quizSize}
        </DialogContentText>
      </DialogContent>
      <Button variant="outlined" onClick={() => resetDialog()}>
        Close
      </Button>
    </Dialog>
  );
};

QuizScoreDialog.propTypes = {
  score: PropTypes.number.isRequired,
  quizSize: PropTypes.number.isRequired,
  setShowQuizScoreDialog: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default QuizScoreDialog;
