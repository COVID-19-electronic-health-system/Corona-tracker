import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button, ButtonGroup } from '@material-ui/core'
import FlashCards from './FlashCards'
import NavBar from '../NavBar'
import Temperature from '../Temperature'
import { ReactComponent as Logo } from '../../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../../img/Logo_CORONATRACKER_Text_Logo.svg';
import { cardData, quizData } from '../../utils/fakeCardData'
import '../../css/DiagnosticContainer.css';


const FactQuizContainer = (props) => {
  const { handleSignOut } = props
  const [factsOrQuiz, setFactsQuiz] = useState('facts')
  const setQuiz = () => setFactsQuiz("quiz")
  const setFacts = () => setFactsQuiz("facts")

  return (
    <div className="DiagnosticContainer">
      <Container className="temp-singout">
        <Temperature />
        <Button onClick={handleSignOut} style={{ width: '100px' }}>
          Sign Out
        </Button>
      </Container>
      <Container >
        <div className="Education">
          <Logo className="DiagnosticLogo" style={{ width: "2rem", height: "2rem" }} />
          <TextLogo className="DiagnosticTextLogo" style={{ width: "15rem" }} />
        </div>
        <ButtonGroup size="medium" color="secondary" aria-label="outlined button group" style={{ padding: '10px' }}>
          <Button onClick={setFacts} variant={factsOrQuiz === 'facts' && "contained"}>Facts</Button>
          <Button onClick={setQuiz} variant={factsOrQuiz === 'quiz' && "contained"}>Quiz</Button>
        </ButtonGroup>
        <h4 className='FlashCardTitle'>
          {factsOrQuiz === 'facts' && `Swipe to the right or click on the TODOARROW to learn more about COVID-19`}
          {factsOrQuiz === 'quiz' && `QUIZ TIME!`}
        </h4>
      </Container>
      {factsOrQuiz === 'facts' && <FlashCards mode='facts' cardData={cardData} />}
      {factsOrQuiz === 'quiz' && <FlashCards mode='quiz' cardData={quizData} />}
      <NavBar />
    </div>
  )
}

export default FactQuizContainer
