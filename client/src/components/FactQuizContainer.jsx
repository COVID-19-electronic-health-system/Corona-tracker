import React, { useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FlashCards from './FlashCards';
import { cardData, quizData } from '../utils/fakeCardData';
import buttonsCss from '../css/buttons';

const useStyles = makeStyles({
  buttonGroup: {
    ...buttonsCss.buttons,
  },
});

const FactQuizContainer = () => {
  const [factsOrQuiz, setFactsQuiz] = useState('facts');
  const setQuiz = () => setFactsQuiz('quiz');
  const setFacts = () => setFactsQuiz('facts');
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <ButtonGroup>
          <Button className={classes.buttonGroup} onClick={setFacts} variant={factsOrQuiz === 'facts' && 'contained'}>
            Facts
          </Button>
          <Button className={classes.buttonGroup} onClick={setQuiz} variant={factsOrQuiz === 'quiz' && 'contained'}>
            Quiz
          </Button>
        </ButtonGroup>
        <Typography variant="subtitle1">
          {factsOrQuiz === 'facts' && `Swipe to the right or click on the TODOARROW to learn more about COVID-19`}
          {factsOrQuiz === 'quiz' && `QUIZ TIME!`}
        </Typography>
      </Grid>
      {factsOrQuiz === 'facts' && <FlashCards mode="facts" cardData={cardData} />}
      {factsOrQuiz === 'quiz' && <FlashCards mode="quiz" cardData={quizData} />}
    </Grid>
  );
};

export default FactQuizContainer;
