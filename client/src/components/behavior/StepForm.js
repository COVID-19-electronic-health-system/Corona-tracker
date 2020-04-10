import React, { useState, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import FifthStep from "./FifthStep";
import Confirm from "./Confirm";
import Success from "./Success";

export default function StepForm() {

const labels = [
  "Interest",
  "Sadness",
  "Sleep",
  "Energy",
  "Appetite",
  "Confirmation"
];

// const StepForm = () => {
const [steps, setSteps] = useState(0);

const [answer, setAnswer] = useState("")
 
const [sadAnswer, setSadAnswer] = useState("")

const [sleepAnswer, setSleepAnswer] = useState("")

const [energyAnswer, setEnergyAnswer] = useState("")

const [appetiteAnswer, setAppetiteAnswer] = useState("")

const handleChange = (evt, value) => {
    setAnswer(value)
  }

 const handleChange2 =  (evt, value) => {
  setSadAnswer(value)
 }

 const handleChange3 = (evt, value) => {
  setSleepAnswer(value)
 }

 const handleChange4 = (evt, value) => {
  setEnergyAnswer(value)
 }

 const handleChange5 = (evt, value) => {
  setAppetiteAnswer(value)
 }
  
          const quesAnswers = [
              { "interest": answer }, 
              {"sadness": sadAnswer},
              {"sleep": sleepAnswer},
              {"energy": energyAnswer},
              {"appetite": appetiteAnswer}
          ]

          // console.log(quesAnswers[2])

 

  // Proceed to next step
  const handleNext = () => setSteps(steps + 1);
  // Go back to prev step
  const handleBack = () => setSteps(steps - 1)

 
  const handleSteps = step => {

    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            value={quesAnswers[0]}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange2}
            value={quesAnswers[1]}
          />
        );
      case 2:
        return (
          <ThirdStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange3}
            value={quesAnswers[2]}
          />
        );
      case 3:
        return (
          <FourthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange4}
            value={quesAnswers[3]}
          />
        );
      case 4:
        return (
          <FifthStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange5}
            value={quesAnswers[4]}
          />
        );
      case 5:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={quesAnswers} 
          />
        );
      default:
        break;
        }
      };

  // Handle components
  return (
    <Fragment>
      {steps === labels.length ? (
        <Success />
      ) : (
        <Fragment>
          <Stepper
            activeStep={steps}
            style={{ paddingTop: 30, paddingBottom: 50 }}
            alternativeLabel
          >
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(steps)}
        </Fragment>
      )}
    </Fragment>
  )
}