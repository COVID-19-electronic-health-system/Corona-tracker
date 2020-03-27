import { HANDLE_CHECKBOX_CHANGE, HANDLE_BUTTON_GROUP_CHANGE, HANDLE_FEVER, HANDLE_HOURS, HANDLE_MINUTES, GET_CHECKBOX_BUTTON_STATE } from '../constants'

// ACTION CREATORS
// checks if symptom is checked
export const handleCheckboxChange = event => ({
  type: HANDLE_CHECKBOX_CHANGE,
  event
});

// changes symptoms value
export const handleButtonGroupChange = event => ({
  type: HANDLE_BUTTON_GROUP_CHANGE,
  event
});

export const handleFever = (event, value) => ({
  type: HANDLE_FEVER,
  event, value
});

//Splited in two functions to handle time value
export const handleHours = (event, value) => ({
  type: HANDLE_HOURS,
  event, value
});

export const handleMinutes = (event, value) => ({
  type: HANDLE_MINUTES,
  event, value
})

export const getCheckboxButtonState = () => ({
  type: GET_CHECKBOX_BUTTON_STATE
})
