import React, { Component } from 'react';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import { appConfig } from '../utils/constants';
import { UserSession } from 'blockstack';
import { configure, User, getConfig } from 'radiks';
import { Connect } from '@blockstack/connect';
import DiagnosticContainer from './DiagnosticContainer';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import setLoginLoading from '../redux/actions/actions';
import FactQuizContainer from './FactQuizContainer';
import PrivateRoute from './PrivateRoute';
import SymptomsTracker from './SymptomsTracker';

const RADIKS_URL = process.env.REACT_APP_QA_URL || 'http://127.0.0.1:1260'; // TODO this will change to wherever our radiks server will be hosted in prod

const makeUserSession = () => {
  return new UserSession({ appConfig });
};

class App extends Component {
  state = { authed: false, checkingAuth: true };

  async componentDidMount() {
    const userSession = makeUserSession();
    configure({
      apiServer: RADIKS_URL,
      userSession,
    });
    this.setState({ authed: userSession.isUserSignedIn(), checkingAuth: userSession.isSignInPending() });
    if (userSession.isSignInPending()) {
      await userSession.handlePendingSignIn();
      await User.createWithCurrentUser();
      this.setState({ authed: userSession.isUserSignedIn(), checkingAuth: userSession.isSignInPending() });
    }
  }

  handleSignOut(e) {
    const { userSession } = getConfig();
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    const { userSession } = getConfig();
    const authOptions = {
      redirectTo: '/',
      finished: async ({ userSession }) => {
        configure({
          apiServer: RADIKS_URL,
          userSession,
        });
        await User.createWithCurrentUser();
        this.setState({ authed: true, checkingAuth: false });
      },
      appDetails: {
        name: 'Corona Tracker',
        icon: `${window.location.origin}/icon.png`,
      },
      userSession,
    };

    const { authed } = this.state;
    return (
      <BrowserRouter>
        <Connect authOptions={authOptions}>
          <Layout authed={authed} userSession={userSession} handleSignOut={this.handleSignOut}>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                authed={authed}
                component={() => <DiagnosticContainer userSession={userSession} />}
              />

              {/* ADD/EDIT ROUTES WITH THEIR COMPONENTS HERE: */}
              <PrivateRoute path="/signup" authed={authed} />
              <PrivateRoute path="/symptomsurvey" authed={authed} component={() => <SymptomsTracker />} />
              <PrivateRoute path="/log" authed={authed} />
              <PrivateRoute path="/healthlog" authed={authed} />
              <PrivateRoute
                path="/education"
                authed={authed}
                component={() => <FactQuizContainer handleSignOut={this.handleSignOut} />}
              />
              <PrivateRoute path="/map" authed={authed} />
              <PrivateRoute path="/settings" authed={authed} />
            </Switch>
          </Layout>
        </Connect>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ loginLoading }) => ({
  loginLoading,
});

const mapDispatchToProps = dispatch => ({
  setLoading(isLoading) {
    return () => {
      dispatch(setLoginLoading(isLoading));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
