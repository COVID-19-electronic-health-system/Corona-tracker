import React, { useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import FlashCards from './FlashCards';
import { cardData, quizData } from '../utils/fakeCardData';
import buttonsCss from '../css/buttons';
import { makeStyles } from '@material-ui/core/styles';

const FactQuizContainer = () => {
  const [factsOrQuiz, setFactsQuiz] = useState('facts');
  const setQuiz = () => setFactsQuiz('quiz');
  const setFacts = () => setFactsQuiz('facts');

  const useStyles = makeStyles({
    buttons: {
      ...buttonsCss.buttons,
      margin: '2px 15px',
    },
  });

  return (
    <Grid>
      <Grid>
        <ButtonGroup size="medium" color={'primary'} aria-label="outlined button group" style={{...buttonsCss.buttons}}>
          <Button onClick={setFacts} variant={factsOrQuiz === 'facts' && 'contained'}>
            Facts
          </Button>
          <Button onClick={setQuiz} variant={factsOrQuiz === 'quiz' && 'contained'}>
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
