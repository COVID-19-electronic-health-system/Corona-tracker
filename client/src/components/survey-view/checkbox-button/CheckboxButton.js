import React from 'react';
import SingleCheckboxButton from './SingleCheckboxButton';

class CheckboxButton extends React.Component {
  constructor() {
    super()
    this.state = {
      cough: { checked: false, value: 'Moderate' },
      fever: { checked: false, value: '' },
      dizziness: { checked: false, value: 'Moderate' },
      headache: { checked: false, value: '' },
      soreThroat: { checked: false, value: 'Moderate' },
      congestion: { checked: false, value: 'Moderate' }
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleButtonGroupChange = this.handleButtonGroupChange.bind(this);
    this.handleFever = this.handleFever.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handleMinutes = this.handleMinutes.bind(this);
  }

  // checks if symptom is checked
  handleCheckboxChange(event) {
    event.preventDefault();
    const symptomName = event.target.name;
    const symptomChecked = event.target.checked;
    this.setState({
      ...this.state,
      [symptomName]: {
        ...this.state[symptomName],
        checked: symptomChecked,
      }
    })
  }

  // changes symptoms value
  handleButtonGroupChange(event) {
    event.preventDefault();
    const symptomName = event.currentTarget.name;
    const symptomValue = event.currentTarget.value;
    this.setState({
      ...this.state,
      [symptomName]: {
        checked: true,
        value: symptomValue,
      }
    })
  }

  handleFever(event, value) {
    event.preventDefault();
    // console.log(value)
    this.setState({
      ...this.state,
      fever: {
        checked: true,
        value: value,
      }
    })
  }


  //Splited in two methods to handle time value
  handleHours(event, value) {
    event.preventDefault();

    value = value ? value : '0';
    // console.log(value)
    this.setState({
      ...this.state,
      headache: {
        checked: true,
        value: this.state['headache'].value ? this.state['headache'].value.replace(/\d*(?=:)/, value) : value + ':00',
      }
    })
  }

  handleMinutes(event, value) {
    event.preventDefault();
    value = value ? value : '00';
    // console.log(value)
    this.setState({
      ...this.state,
      headache: {
        checked: true,
        value: this.state['headache'].value ? this.state['headache'].value.replace(/:.*/, ':' + value) : '0:' + value,
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className='checked-grouped-buttons'>
        <h4>
          <b>
            Q4: Which symptoms are you feeling or experiencing
          </b>
        </h4>
        {
          Object.entries(this.state).map(([symptomName, value], key) => (
            <SingleCheckboxButton key={key} symptomName={symptomName} symptomChecked={value.checked} symptomValue={value.value} handleCheckboxChange={this.handleCheckboxChange}
              handleButtonGroupChange={this.handleButtonGroupChange} handleFever={this.handleFever} handleHours={this.handleHours}
              handleMinutes={this.handleMinutes} />
          ))
        }
      </div>
    )
  }
}

export default CheckboxButton;
