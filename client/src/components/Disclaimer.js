import React, { Component } from 'react';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import Button from 'react-bootstrap/Button';

class Disclaimer extends Component {
  render() {
    return (
      <div className="DisclaimerPopUp">
        <div className="DisclaimerPopUpInner">
          <Logo className="LoginLogo" className="PopUpLogo" />
          <TextLogo className="TextLogo" className="PopUpLogo" />
          <p>
            The CoronaTracker is designed to help you navigate through the pandemic with accurate information, charting
            your wellbeing, and tracking your health. The CoronaTracker is not intended to be used or viewed as
            diagnosis or treatment of disease or other symptoms, including but not limited to COVID-19.
          </p>
          <p>
            This application was made by the community for the community. This application is made for you! You are in
            control of how you would like to contribute your data for public health and research.
          </p>
          <div>
            <Button className="theme-Palette-white-text">I agree</Button>
            <Button className="theme-Palette-white-text theme-Palette-red-bg">I don't agree</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
