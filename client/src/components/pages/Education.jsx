import React, { useState } from "react";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FlashCards from "../cards/FlashCards";
import { cardData, quizData } from "../../utils/fakeCardData";
import buttonsCss from "../../styles/buttons";
import { Trans } from "react-i18next";

const useStyles = makeStyles({
  buttonGroup: {
    ...buttonsCss.buttons,

    margin: "20px 8px 10px 8px",
    width: "160px",
  },
});

const FactQuizContainer = () => {
  const [factsOrQuiz, setFactsQuiz] = useState("facts");
  const setQuiz = () => setFactsQuiz("quiz");
  const setFacts = () => setFactsQuiz("facts");
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <ButtonGroup>
          <Button
            className={classes.buttonGroup}
            onClick={setFacts}
            variant={factsOrQuiz === "facts" && "contained"}
          >
            Facts
          </Button>
          <Button
            className={classes.buttonGroup}
            onClick={setQuiz}
            variant={factsOrQuiz === "quiz" && "contained"}
          >
            Quiz
          </Button>
        </ButtonGroup>
        <Typography variant="body1" color="textSecondary">
          {factsOrQuiz === "facts" && (
            <Trans i18nKey="educationSection.text.swipe.swipeToTheRightOrLeftToLearnMoreAboutCovid19" />
          )}
          {factsOrQuiz === "quiz" &&
            `QUIZ TIME! Swipe right if true and left if false`}
        </Typography>
      </Grid>
      {factsOrQuiz === "facts" && (
        <FlashCards mode="facts" cardData={cardData} />
      )}
      {factsOrQuiz === "quiz" && <FlashCards mode="quiz" cardData={quizData} />}
    </Grid>
  );
};

export default FactQuizContainer;
