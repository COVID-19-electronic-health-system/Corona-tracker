import React from 'react';
import AppSingleCheckGroupButton from './SingleCheckGroupButton';

class AppCheckGroupedButtons extends React.Component {
  constructor() {
    super()
    this.state = {
      symptoms: {
        cough: { checked: false, value: 'Moderate' },
        fever: { checked: false, value: 0 },
        dizziness: { checked: false, value: 'Moderate' },
        headache: { checked: false, value: 0 },
        soreThroat: { checked: false, value: 'Moderate' },
        congestion: { checked: false, value: 'Moderate' }
      }
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleButtonGroupChange = this.handleButtonGroupChange.bind(this);
  }

  // checks if symptom is checked
  handleCheckboxChange(event) {
    event.preventDefault();
    const symptomName = event.target.name;
    const symptomChecked = event.target.checked;
    this.setState({
      symptoms: {
        ...this.state.symptoms,
        [symptomName]: {
          ...this.state.symptoms[symptomName],
          checked: symptomChecked,
        }
      }
    })
  }

  // changes symptoms value
  handleButtonGroupChange(event) {
    event.preventDefault();
    const symptomName = event.currentTarget.name;
    const symptomValue = event.currentTarget.value;
    this.setState({
      symptoms: {
        ...this.state.symptoms,
        [symptomName]: {
          ...this.state.symptoms[symptomName],
          value: symptomValue,
        }
      }
    })
  }

  render() {
    // console.log(this.state.symptoms)
    return (
      <div className='checked-grouped-buttons'>
        <h4>
          <b>
            Q4: Which symptoms are you feeling or experiencing
          </b>
        </h4>
        {
          Object.entries(this.state.symptoms).map(([symptomName, value], key) => (
            <AppSingleCheckGroupButton key={key} symptomName={symptomName} symptomChecked={value.checked} symptomValue={value.value} handleCheckboxChange={this.handleCheckboxChange}
              handleButtonGroupChange={this.handleButtonGroupChange} />
          ))
        }
      </div>
    )
  }
}

export default AppCheckGroupedButtons;
