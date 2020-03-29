import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import { temperature, minutes, hours } from './constants';

// handles fever symptom
function TemperatureAutocomplete(props) {
  return (
    <Autocomplete
      size='small'
      id="temperature"
      options={temperature}
      renderOption={option => (
        <React.Fragment>
          {option}°F
        </React.Fragment>
      )}
      onChange={props.symptomChecked ? props.handleFever : () => { }}
      value={props.feverValue}
      renderInput={params => <TextField {...params} variant="outlined" />}
    />
  )
}

// headah
// handle minutes part for headache
function MinutesAutocomplete(props) {
  // slicing minutes part of time and setting to empty string if value is null
  const value = props.minutesValue ? props.minutesValue.match(/:.*/)[0].replace(/:/, '') : '';
  return (
    <Autocomplete
      size='small'
      id="minutes"
      options={minutes}
      onChange={props.symptomChecked ? props.handleMinutes : () => { }}
      value={value}
      renderInput={params => <TextField {...params} variant="outlined" />}
    />
  )
}

// handle hours part for headache
function HoursAutocomplete(props) {
  // slicing hours part of time and setting to empty string if value is null
  const value = props.hoursValue ? props.hoursValue.match(/\d*(?=:)/)[0] : '';
  return (<Autocomplete
    size='small'
    id="hours"
    options={hours}
    onChange={props.symptomChecked ? props.handleHours : () => { }}
    value={value}
    renderInput={params => <TextField {...params} variant="outlined" />}
  />)
}

// main functional component
export default function SingleCheckboxButton(props) {

  // creating appropriate label name
  let label = props.symptomName;
  label = label.replace(new RegExp('(?=[A-Z])', 'g'), ' ');
  label = label.replace(/^./, label[0].toUpperCase());

  return (
    <div>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox checked={props.symptomChecked} onChange={props.handleCheckboxChange} name={props.symptomName} />
          }
          label={label}
        />
      </FormControl>

      {props.symptomName === 'fever' ? (
        <ButtonGroup color="secondary">
          <Button disabled variant="contained" color="primary">
            What is your temperature:
          </Button>

          <TemperatureAutocomplete
            handleFever={props.handleFever}
            feverValue={props.symptomValue}
            symptomChecked={props.symptomChecked}
          />
          <Button disabled variant="contained" color="primary">
            °F
          </Button>
        </ButtonGroup>
      ) : props.symptomName === 'headache' ? (
        <ButtonGroup color="secondary">
        <Button disabled variant="contained" color="primary" id="Text" name="Text">
        How long has it lasted for:
        </Button>

            <HoursAutocomplete
              handleHours={props.handleHours}
              hoursValue={props.symptomValue}
              symptomChecked={props.symptomChecked}
            />
            <Button disabled variant="contained" color="primary" id="Hrs" name="Hrs">
              Hrs
            </Button>

            <MinutesAutocomplete
              handleMinutes={props.handleMinutes}
              minutesValue={props.symptomValue}
              symptomChecked={props.symptomChecked}
            />
            <Button disabled variant="contained" color="primary" id="Mins" name="Mins">
              Mins
            </Button>

          </ButtonGroup>
      ) : (
        <ButtonGroup color="secondary" variant="outlined">
          <Button
            variant="contained"
            name={props.symptomName}
            onClick={props.symptomChecked ? props.handleButtonGroupChange : () => {}}
            color={props.symptomValue === 'Minimal' ? 'secondary' : 'primary'}
            value="Minimal"
          >
            Minimal
          </Button>

          <Button
            variant="contained"
            name={props.symptomName}
            onClick={props.symptomChecked ? props.handleButtonGroupChange : () => {}}
            color={props.symptomValue === 'Moderate' ? 'secondary' : 'primary'}
            value="Moderate"
          >
            Moderate
          </Button>

          <Button
            variant="contained"
            name={props.symptomName}
            onClick={props.symptomChecked ? props.handleButtonGroupChange : () => {}}
            color={props.symptomValue === 'Severe' ? 'secondary' : 'primary'}
            value="Severe"
          >
            Severe
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}

