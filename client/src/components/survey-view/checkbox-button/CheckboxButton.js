import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import SingleCheckboxButton from './SingleCheckboxButton';
import { handleCheckboxChange, handleButtonGroupChange, handleFever, handleHours, handleMinutes } from '../../../redux/actions/checkbox-button-survey'

function CheckboxButton() {
  const state = useSelector(state => state.checkboxButtonSurveyReducer);
  const dispatch = useDispatch()
  return (
    <div className='checked-grouped-buttons'>
      <h4>
        <b>Which symptoms are you feeling or experiencing?</b>
      </h4>
      {Object.entries(state).map(([symptomName, value], key) => (
        <SingleCheckboxButton key={key} symptomName={symptomName} symptomChecked={value.checked} symptomValue={value.value}
          handleCheckboxChange={event => dispatch(handleCheckboxChange(event))}
          handleButtonGroupChange={event => dispatch(handleButtonGroupChange(event))}
          handleFever={(event, value) => dispatch(handleFever(event, value))}
          handleHours={(event, value) => dispatch(handleHours(event, value))}
          handleMinutes={(event, value) => dispatch(handleMinutes(event, value))}
        />
      ))}
    </div>
  )
}

export default CheckboxButton;
