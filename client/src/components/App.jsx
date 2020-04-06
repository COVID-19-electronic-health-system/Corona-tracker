import React, { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Connect } from '@blockstack/connect';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactBlockstack, { useBlockstack, didConnect, useFile } from 'react-blockstack';
import Container from '@material-ui/core/Container';
import Layout from './Layout';
import Map from './Map';
import DiagnosticContainer from './DiagnosticContainer';
import { appConfig } from '../utils/constants';
import setLoginLoading from '../redux/actions/actions';
import FactQuizContainer from './FactQuizContainer';
import PrivateRoute from './PrivateRoute';
import SymptomsTracker from './SymptomsTracker';
import OnboardUser from './OnboardUser';
import About from './About';
import Disclaimer from './Disclaimer';

ReactBlockstack({ appConfig });

function App() {
  const { userSession } = useBlockstack();
  const finished = useCallback(() => {
    didConnect({ userSession });
  }, [userSession]);
  const authOptions = {
    redirectTo: '/',
    finished,
    appDetails: {
      name: 'Corona Tracker',
      icon: `${window.location.origin}/icon.png`,
    },
    userSession,
  };

  const [disclaimerString] = useFile('disclaimer.json');

  // If the content is null, disclaimer was not found, show disclaimer
  let showDisclaimer = disclaimerString === null;

  if (disclaimerString) {
    const disclaimer = JSON.parse(disclaimerString);

    // If disclaimer was found, show disclaimer if user did not agree
    showDisclaimer = !disclaimer.answerChoice;
  }

  return (
    <BrowserRouter>
      <Connect authOptions={authOptions}>
        <Layout>
          {showDisclaimer && (
            <Container>
              <Disclaimer />
            </Container>
          )}
          <Switch>
            <PrivateRoute exact path="/" component={() => <DiagnosticContainer />} />

            {/* ADD/EDIT ROUTES WITH THEIR COMPONENTS HERE: */}
            <PrivateRoute path="/signup" />
            <PrivateRoute path="/symptomsurvey" component={() => <SymptomsTracker />} />
            <PrivateRoute path="/log" />
            <PrivateRoute path="/healthlog" />
            <PrivateRoute path="/education" component={() => <FactQuizContainer />} />
            <PrivateRoute path="/map" component={() => <Map />} />
            <PrivateRoute path="/settings" />
            <PrivateRoute path="/onboard" component={() => <OnboardUser />} />
            <PrivateRoute paht="/about" component={() => <About />} />
          </Switch>
        </Layout>
      </Connect>
    </BrowserRouter>
  );
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
