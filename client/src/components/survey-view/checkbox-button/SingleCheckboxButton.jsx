/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { temperature, minutes, hours } from './constants';

const useStyles = makeStyles({
  checkbox: {},
  MuiFocused: {
    backgroundImage: 'none',
    backgroundColor: '#f64141',
  },
  form: {
    backgroundColor: '#ebebeb',
    margin: '30px auto',
    padding: '0 0 30px',
    borderRadius: '10px',
    boxShadow: '0px 10px 22px -8px rgba(0,0,0,0.45)',
  },
  formControl: {
    width: '100%',
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
    backgroundColor: '#f64141',
  },
});

// handles fever symptom
const TemperatureAutocomplete = props => {
  const { symptomChecked, handleFever, feverValue } = props;

  return (
    <TextField
      size="small"
      id="temperature"
      options={temperature}
      renderOption={option => <>{option}°F</>}
      onChange={symptomChecked ? handleFever : () => {}}
      value={feverValue}
      renderInput={params => <TextField {...params} variant="outlined" />}
    />
  );
};

TemperatureAutocomplete.propTypes = {
  symptomChecked: PropTypes.bool.isRequired,
  handleFever: PropTypes.func.isRequired,
  feverValue: PropTypes.string.isRequired,
};

// handle minutes part for headache
function MinutesAutocomplete(props) {
  const { minutesValue, symptomChecked, handleMinutes } = props;
  // slicing minutes part of time and setting to empty string if value is null
  const value = minutesValue ? minutesValue.match(/:.*/)[0].replace(/:/, '') : '';
  return (
    <Autocomplete
      size="small"
      id="minutes"
      options={minutes}
      onChange={symptomChecked ? handleMinutes : () => {}}
      value={value}
      renderInput={params => <TextField {...params} variant="outlined" />}
    />
  );
}

MinutesAutocomplete.propTypes = {
  minutesValue: PropTypes.string.isRequired,
  symptomChecked: PropTypes.bool.isRequired,
  handleMinutes: PropTypes.func.isRequired,
};

// handle hours part for headache
function HoursAutocomplete(props) {
  const { hoursValue, symptomChecked, handleHours } = props;

  // slicing hours part of time and setting to empty string if value is null
  const value = hoursValue ? hoursValue.match(/\d*(?=:)/)[0] : '';
  return (
    <Autocomplete
      size="small"
      id="hours"
      options={hours}
      onChange={symptomChecked ? handleHours : () => {}}
      value={value}
      renderInput={params => <TextField {...params} variant="outlined" />}
    />
  );
}

HoursAutocomplete.propTypes = {
  hoursValue: PropTypes.string.isRequired,
  symptomChecked: PropTypes.bool.isRequired,
  handleHours: PropTypes.func.isRequired,
};

// main functional component
export default function SingleCheckboxButton(props) {
  const styles = useStyles();
  const {
    symptomChecked,
    handleCheckboxChange,
    symptomName,
    handleFever,
    symptomValue,
    handleMinutes,
    handleHours,
    handleButtonGroupChange,
  } = props;
  // creating appropriate label name
  let label = symptomName;
  label = label.replace(new RegExp('(?=[A-Z])', 'g'), ' ');
  label = label.replace(/^./, label[0].toUpperCase());

  return (
    <div className={styles.form}>
      <FormControl className={styles.formControl}>
        <FormControlLabel
          className={styles.label}
          control={
            <Checkbox
              className={styles.checkbox}
              checked={symptomChecked}
              onChange={handleCheckboxChange}
              name={symptomName}
            />
          }
          label={label}
        />
      </FormControl>

      {symptomName === 'fever' && (
        <ButtonGroup color="secondary">
          <Button disabled variant="contained" color="primary">
            Temperature:
          </Button>

          <TemperatureAutocomplete
            handleFever={handleFever}
            feverValue={symptomValue}
            symptomChecked={symptomChecked}
          />
          <Button disabled variant="contained" color="primary">
            °F
          </Button>
        </ButtonGroup>
      )}
      {symptomName === 'headache' && (
        <ButtonGroup color="secondary">
          <Button disabled variant="contained" color="primary" id="Text" name="Text">
            Duration:
          </Button>
          <ButtonGroup orientation="vertical">
            <HoursAutocomplete handleHours={handleHours} hoursValue={symptomValue} symptomChecked={symptomChecked} />
            <Button disabled variant="contained" color="primary" id="Hrs" name="Hrs">
              Hrs
            </Button>

            <MinutesAutocomplete
              handleMinutes={handleMinutes}
              minutesValue={symptomValue}
              symptomChecked={symptomChecked}
            />
            <Button disabled variant="contained" color="primary" id="Mins" name="Mins">
              Mins
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      )}
      {symptomName !== 'headache' && symptomName !== 'fever' && (
        <ButtonGroup color="secondary" variant="outlined" className={styles.buttonTest}>
          <Button
            variant="contained"
            name={symptomName}
            onClick={symptomChecked ? handleButtonGroupChange : () => {}}
            color={symptomValue === 'Minimal' ? 'secondary' : 'primary'}
            value="Minimal"
          >
            Minimal
          </Button>

          <Button
            variant="contained"
            name={symptomName}
            onClick={symptomChecked ? handleButtonGroupChange : () => {}}
            color={symptomValue === 'Moderate' ? 'secondary' : 'primary'}
            value="Moderate"
          >
            Moderate
          </Button>

          <Button
            variant="contained"
            name={symptomName}
            onClick={symptomChecked ? handleButtonGroupChange : () => {}}
            color={symptomValue === 'Severe' ? 'secondary' : 'primary'}
            value="Severe"
          >
            Severe
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
}

SingleCheckboxButton.propTypes = {
  symptomChecked: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  symptomName: PropTypes.string.isRequired,
  handleMinutes: PropTypes.func.isRequired,
  handleFever: PropTypes.func.isRequired,
  symptomValue: PropTypes.string.isRequired,
  handleHours: PropTypes.func.isRequired,
  handleButtonGroupChange: PropTypes.func.isRequired,
};
