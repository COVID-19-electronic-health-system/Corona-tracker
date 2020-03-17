import React, { Component } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { appConfig } from '../utils/constants'
import { UserSession } from 'blockstack';
import Button from 'react-bootstrap/Button';
import { configure, User, getConfig } from 'radiks';

const userSession = new UserSession({
  appConfig: appConfig
})

configure({
  apiServer: 'http://localhost:1260', // TODO this will change to wherever our MongoDB cluster will be hosted in prod
  userSession
})

export default class App extends Component {

  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
  }

  componentDidMount = async() => {
    configure({
      apiServer: 'http://localhost:1260',
      userSession: this.userSession,
    });
    const { userSession } = getConfig();
    if (userSession.isSignInPending()) {
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      window.location = '/';
    }
  }

  handleSignIn = async(e) => {
    const { userSession } = getConfig()
    e.preventDefault()
    if (userSession.isSignInPending()) {
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      window.location = '/';
    }
    userSession.redirectToSignIn()
  }

  handleSignOut = (e) => {
    const { userSession } = getConfig();
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="App">
        {!userSession.isUserSignedIn() ?
          <Login handleSignIn={this.handleSignIn} />
          :
          <div>
            <NavBar />
            <Button onClick={this.handleSignOut}>Sign Out</Button>
            <div>
              <p>Welcome, { userSession.loadUserData().profile.name}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}
