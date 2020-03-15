import React, { Component } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import '../css/App.css';
import { appConfig } from '../utils/constants'
import { UserSession } from 'blockstack';

const userSession = new UserSession({ appConfig: appConfig })

export default class App extends Component {

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData })
      });
    }
  }

  handleSignIn(e) {
    e.preventDefault()
    userSession.redirectToSignIn()
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="App">
        {!userSession.isUserSignedIn() ?
          <Login handleSignIn={this.handleSignIn} />
          : <div>
            <NavBar />
            <button onClick={this.handleSignOut}>Sign Out</button>
          </div>
        }
      </div>
    );
  }
}
