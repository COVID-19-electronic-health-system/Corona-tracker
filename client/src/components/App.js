import React, { Component } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { appConfig } from '../utils/constants'
import { UserSession } from 'blockstack';
import Button from 'react-bootstrap/Button';

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
            <Button onClick={this.handleSignOut}>Sign Out</Button>
          </div>
        }
      </div>
    );
  }
}
