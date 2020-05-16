/* eslint-disable no-console */

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import buttonsCss from 'styles/buttons';
import { TextLogo, Logo } from '../../utils/imgUrl';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles({
  logo: {
    width: '75px',
    height: '60px',
  },
  textLogo: {
    width: '250px',
    height: '50px',
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
    marginTop: '10px',
  },
  buttons: {
    ...buttonsCss.buttons,
    height: '8vh',
    minHeight: '50px',
  },
});

const QuizScoreDialog = props => {
  const classes = useStyles();
  const { score, quizSize, resetQuizScore } = props;

  return (
    <Dialog open aria-describedby="disclaimer">
      <DialogTitle align="center" id="alert-dialog-title" className={classes.text}>
        <object title="logo" className={classes.logo} data={Logo} type="image/svg+xml" />
        <object title="logoText" className={classes.textLogo} data={TextLogo} type="image/svg+xml" />
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText className={classes.descriptionText}>Here&apos;s how you did:</DialogContentText>
        <DialogContentText className={classes.descriptionText}>
          {score} out of {quizSize}
        </DialogContentText>
      </DialogContent>
      <Button
        className={classes.buttons}
        size="medium"
        color="secondary"
        variant="contained"
        onClick={() => resetQuizScore()}
      >
        Close
      </Button>
    </Dialog>
  );
};

QuizScoreDialog.propTypes = {
  score: PropTypes.number.isRequired,
  quizSize: PropTypes.number.isRequired,
  resetQuizScore: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    score: state.educationReducer.score,
    quizSize: state.educationReducer.quizSize,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetQuizScore: () => dispatch(actions.resetQuizScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScoreDialog);
