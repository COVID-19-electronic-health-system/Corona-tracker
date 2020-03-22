import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


function TextInput() {
  return (
    <TextField id="outlined-basic" size='small' variant="outlined" />)
}

//props: symptomName, symptomChecked, handleCheckboxChange, symptomValue
export default function AppSingleCheckGroupButton(props) {

  // creating appropriate label name
  let label = props.symptomName;
  label = label.replace(new RegExp('(?=[A-Z])', 'g'), ' ');
  label = label.replace(/^./, label[0].toUpperCase());

  return (
    <div>
      <FormControl>
        <FormControlLabel
          control={<Checkbox checked={props.symptomChecked} onChange={props.handleCheckboxChange} name={props.symptomName} />}
          label={label}
        />
      </FormControl>
      {props.symptomName === 'fever' ?
        <ButtonGroup color='secondary'>
          <Button disabled variant='contained' color='primary'>Enter your temperature here:</Button>
          <TextInput />
        </ButtonGroup> :
        (props.symptomName === 'headache' ?
          <ButtonGroup color='secondary'>
            <Button disabled variant='contained' color='primary'>How long has it lasted for:</Button>
            <TextInput />
          </ButtonGroup> :

          <ButtonGroup color='secondary'
            variant='outlined'
          >
            <Button variant='contained'
              name={props.symptomName}
              onClick={props.symptomChecked ? props.handleButtonGroupChange : () => { }}
              color={props.symptomValue === 'Minimal' ? 'secondary' : 'primary'} value='Minimal'
            >Minimal</Button>
            <Button variant='contained'
              name={props.symptomName}
              onClick={props.symptomChecked ? props.handleButtonGroupChange : () => { }}
              color={props.symptomValue === 'Moderate' ? 'secondary' : 'primary'} value='Moderate'
            >Moderate</Button>
            <Button variant='contained'
              name={props.symptomName}
              onClick={props.symptomChecked ? props.handleButtonGroupChange : () => { }}
              color={props.symptomValue === 'Severe' ? 'secondary' : 'primary'} value='Severe'
            >Severe</Button>
          </ButtonGroup>
        )
      }


    </div >
  )
}

