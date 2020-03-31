import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { temperature, minutes, hours } from './constants';

const useStyles = makeStyles( {
  checkbox: {
  },
  MuiFocused: {
    backgroundImage: 'none',
    backgroundColor: '#f64141'
  },
  form: {
    backgroundColor: '#ebebeb',
    margin: '30px auto',
    padding: '0 0 30px',
    borderRadius: '10px',
    boxShadow: '0px 10px 22px -8px rgba(0,0,0,0.45)',
  },
  formControl: {
    width: '100%'
  },
  label: {
    backgroundImage: 'linear-gradient(40deg, #4760ff 0%, #82a4f8 100%)',
    color: '#ebebeb',
    display: 'block',
    height: '5vh',
    lineHeight: '5vh',
    margin: '0 auto 20px',
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  labelOnClick: {
    backgroundImage: 'none',
    backgroundColor: '#f64141'
  }
});

// handles fever symptom
function TemperatureAutocomplete(props) {
  return (
    <TextField
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

  const styles = useStyles();

  // creating appropriate label name
  let label = props.symptomName;
  label = label.replace(new RegExp('(?=[A-Z])', 'g'), ' ');
  label = label.replace(/^./, label[0].toUpperCase());

  return (
    <div className={styles.form}>
      <FormControl className={styles.formControl}>
        <FormControlLabel
          className={styles.label}
          control={
            <Checkbox
              className = {styles.checkbox}
              checked={props.symptomChecked}
              onChange={props.handleCheckboxChange}
              name={props.symptomName}
            />
          }
          label={label}
        />
      </FormControl>

      {props.symptomName === 'fever' ? (
        <ButtonGroup color="secondary">
          <Button disabled variant="contained" color="primary">
            Temperature:
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
            Duration:
        </Button>

        <Button disabled variant="contained" color="primary" id="Text" name="Text">
        How long has it lasted for:
        </Button>
        <ButtonGroup orientation="vertical">
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
          </ButtonGroup>

      ) : (
            <ButtonGroup color="secondary" variant="outlined" className={styles.buttonTest}>
              <Button
                variant="contained"
                name={props.symptomName}
                onClick={props.symptomChecked ? props.handleButtonGroupChange : () => { }}
                color={props.symptomValue === 'Minimal' ? 'secondary' : 'primary'}
                value="Minimal"
              >
                Minimal
          </Button>

              <Button
                variant="contained"
                name={props.symptomName}
                onClick={props.symptomChecked ? props.handleButtonGroupChange : () => { }}
                color={props.symptomValue === 'Moderate' ? 'secondary' : 'primary'}
                value="Moderate"
              >
                Moderate
          </Button>

              <Button
                variant="contained"
                name={props.symptomName}
                onClick={props.symptomChecked ? props.handleButtonGroupChange : () => { }}
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
