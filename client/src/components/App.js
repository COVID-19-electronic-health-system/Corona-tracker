import React, { Component } from 'react';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { appConfig } from '../utils/constants';
import { UserSession } from 'blockstack';
import { configure, User, getConfig } from 'radiks';
import { Connect } from '@blockstack/connect';
import DiagnosticContainer from './DiagnosticContainer';


const RADIKS_URL = process.env.REACT_APP_QA_URL || 'http://127.0.0.1:1260'; // TODO this will change to wherever our radiks server will be hosted in prod

const makeUserSession = () => {
  return new UserSession({ appConfig });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.userSession = new UserSession({ appConfig });
  }

  state = { url: '', userSession: undefined };

  async componentDidMount() {
    const userSession = makeUserSession();
    configure({
      apiServer: RADIKS_URL,
      userSession,
    });

    this.setState({ url: window.location.origin, userSession });
  }

  handleSignOut(e) {
    const { userSession } = getConfig();
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    const { userSession } = getConfig();

    const { url } = this.state;
    const authOptions = {
      redirectTo: '/',
      finished: async ({ userSession }) => {
        configure({
          apiServer: RADIKS_URL,
          userSession,
        });
        await User.createWithCurrentUser();

        this.setState({ url: window.location.origin });
      },
      appDetails: {
        name: 'Corona Tracker',
        icon: `${url}/icon.png`,
      },
      userSession,
    };

    return (
      <Connect authOptions={authOptions}>
        <div className="App">
          {!userSession || !userSession.isUserSignedIn() ? (
            <Login />
          ) : (
              <div>
                <DiagnosticContainer userSession={userSession} handleSignOut={this.handleSignOut} />
              </div>
            )}
        </div>
      </Connect>
    );
  }
}

export default App;
