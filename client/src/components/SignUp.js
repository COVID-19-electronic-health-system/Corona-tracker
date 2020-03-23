import React from 'react'
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import { ReactComponent as ProfilePic } from '../img/profile.png';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     firstName: '',
        //     age: '',
        //     sex: false,
        //     city: '',
        //     state: '',
        //     zip: '',
        //     phone: '',
        //     email: ''
        // }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleChange(evt){
    //     this.setState({
    //         [evt.target.name]: evt.target.value
    //     })
    // }

    // async handleSubmit(evt){
    //     evt.preventDefault()
    //     this.props.createAStudent(this.state);
    //     this.setState({
    //         firstName: '',
    //         age: '',
    //         sex: false,
    //         city: '',
    //         state: '',
    //         zip: '',
    //         phone: '',
    //         email: ''
    //     })
    // }

    render() {
        return (
            <div className="SignUp">
                <Logo className="LoginLogo" />
                <TextLogo className="TextLogo" />
                <p className="ProfileDescription">
                    Let's get your profile set up with a few quick questions and start logging your health:
                </p>
                <ProfilePic className="ProfilePic" />
            </div>
        )
    }
}

export default SignUp