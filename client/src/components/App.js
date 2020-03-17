import React, { Component } from 'react';
import NavBar from './NavBar';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { appConfig } from '../utils/constants'
import { UserSession } from 'blockstack';
import Button from 'react-bootstrap/Button';
import { configure, User, getConfig } from 'radiks';
import Location from '../models/location';

const userSession = new UserSession({
  appConfig: appConfig
})

export default class App extends Component {

  constructor(props) {
    super(props)
    this.userSession = new UserSession({ appConfig })
  }

  async componentDidMount() {
    configure({
      apiServer: 'http://localhost:1260',
      userSession: this.userSession,
    });
    const { userSession } = getConfig();
    if (userSession.isSignInPending()) {
      // TODO we should have a loading screen here so as to not confuse users...
      // todo it might look like they're still logged out for a second before processing 
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      alert('PENDING')
      window.location = '/';
    } else if (userSession.isUserSignedIn()) {
      // Get location
      const currLocation = window.navigator && window.navigator.geolocation
      if (currLocation) {
        console.log('currlocation:', currLocation)
        currLocation.getCurrentPosition(async (position) => {
          console.log('position', position)
          const location = new Location({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
          await location.save()
          console.log('saved')
          const l = await Location.fetchOwnList()
          console.log('LOCATION:', l)
          var x;
          for (x of l) {
            x.destroy()
          }
        })
      }
    }
  }

  async handleSignIn(e) {
    const { userSession } = getConfig();
    e.preventDefault();
    if (userSession.isSignInPending()) {
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      window.location = '/';
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
          <Login handleSignIn={this.handleSignIn} />
          :
          <div>
            <NavBar />
            <Button onClick={this.handleSignOut}>Sign Out</Button>
            <div>
              <p>Welcome, {userSession.loadUserData().profile.name}</p>
            </div>
          </div>
        }
      </div>
    );
  }
}
