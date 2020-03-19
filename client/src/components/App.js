import React, { Component } from "react";
import NavBar from "./NavBar";
import Temperature from "./Temperature";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { appConfig } from "../utils/constants";
import { UserSession } from "blockstack";
import Button from "react-bootstrap/Button";
import { configure, User, getConfig } from "radiks";
import Patient from "../models/patient";

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
        {!userSession.isUserSignedIn() ? (
          <Login handleSignIn={this.handleSignIn} />
        ) : (
          <div>
            <NavBar />
            <Button onClick={this.handleSignOut}>Sign Out</Button>
            <div>
              <p>Welcome, {userSession.loadUserData().profile.name}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
