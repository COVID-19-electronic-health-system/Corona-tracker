import React from 'react'
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';

class Education extends React.Component {

    render() {
        return (
            <div>
                <Logo className="DiagnosticLogo" />
                <TextLogo className="DiagnosticTextLogo" />
                <p>Education</p>
            </div>
        )
    }
}

export default Education;