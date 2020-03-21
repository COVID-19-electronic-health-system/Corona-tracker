import React, { Component } from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { appConfig } from '../utils/constants'
import { UserSession } from 'blockstack';

import { configure, User, getConfig } from 'radiks';
import Patient from '../models/patient'
import DiagnosticContainer from './DiagnosticContainer';



const userSession = new UserSession({
  appConfig: appConfig
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.userSession = new UserSession({ appConfig });
  }

  async componentDidMount() {
    if (!process.env.REACT_APP_QA_URL) {
      alert(
        "Developer Error: Please provide a url for radis as REACT_APP_QA_URL"
      );
      return;
    }
    configure({
      apiServer: process.env.REACT_APP_QA_URL, // TODO this will change to wherever our radiks server will be hosted in prod
      userSession: this.userSession
    });

    const { userSession } = getConfig();
    if (userSession.isUserSignedIn()) {
      // Creates a new Patient model associated with the user
      const patient = new Patient({
        doctor: "Test Doctor",
        location: ["123", "456"]
      });

      // Saves that patient in the user's associated Gaia storage, encrypted, and replicated in MongoDB
      await patient.save();

      // Radiks queries the encrypted MongoDB entry, decrypts the data
      const allPatients = await Patient.fetchOwnList();

      // Print the resulting
      console.log("ALL PATIENTS:", allPatients);

      // Delete the entry, to keep things clean for the purpose of example
      var p;
      for (p of allPatients) {
        p.destroy();
      }
    } else if (userSession.isSignInPending()) {
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      window.location = "/";
    }
  }

  async handleSignIn(e) {
    const { userSession } = getConfig();
    e.preventDefault();
    if (userSession.isSignInPending()) {
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      window.location = "/";
    }
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    const { userSession } = getConfig();
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="App">
        {!userSession.isUserSignedIn() ?
          <div><Login handleSignIn={this.handleSignIn} /></div>
          :
          <div><DiagnosticContainer userSession={userSession} handleSignOut={this.handleSignOut} /></div>
        }
      </div>
    );
  }
}
