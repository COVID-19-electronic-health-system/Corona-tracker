import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button, ButtonGroup } from '@material-ui/core'
import FlashCards from './FlashCards'
import NavBar from './NavBar'
import Temperature from './Temperature'
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import '../css/DiagnosticContainer.css';

const FactQuizContainer = (props) => {
  const { handleSignOut } = props
  const [factsOrQuiz, setFactsQuiz] = useState('facts')
  const setQuiz = () => setFactsQuiz("quiz")
  const setFacts = () => setFactsQuiz("facts")
  console.log(factsOrQuiz)
  return (
    <div className="DiagnosticContainer">
      <NavBar />
      <Container className="temp-singout">
        <Temperature />
        <Button onClick={handleSignOut} style={{ width: '100px' }}>
          Sign Out
        </Button>
      </Container>
      <Container >
        <div className="Education">
          <Logo className="DiagnosticLogo" style={{width:"2rem", height:"2rem"}}/>
          <TextLogo className="DiagnosticTextLogo" style={{width:"15rem"}}/>
        </div>
        <ButtonGroup size="medium" color="secondary" aria-label="outlined button group" style={{padding:'10px'}}>
          <Button onClick={setFacts}>Facts</Button>
          <Button onClick={setQuiz}>Quiz</Button>
        </ButtonGroup>
        <h4 className='FlashCardTitle'>
          Swipe to the right or click on the TODOARROW to learn more about COVID-19
        </h4>
      </Container>
      {factsOrQuiz==='facts'&&<FlashCards/>}
      {factsOrQuiz==='quiz'&&<div/>}
    </div>
  )
}

export default FactQuizContainer