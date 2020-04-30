import React, { useCallback, useEffect } from 'react';
import { Connect } from '@blockstack/connect';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactBlockstack, { useBlockstack, didConnect, useFile } from 'react-blockstack';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Layout from './Layout';
import Map from './Map';
import DiagnosticContainer from './DiagnosticContainer';
import { appConfig } from '../utils/constants';
import FactQuizContainer from './FactQuizContainer';
import PrivateRoute from './PrivateRoute';
import Survey from './survey/Survey';
import OnboardUser from './OnboardUser';
import About from './About';
import Disclaimer from './Disclaimer';
import NotFoundPage from './NotFoundPage';
import actions from '../redux/actions/actions';
import ScrollToTop from './ScrollToTop';
import Settings from './Settings';

ReactBlockstack({ appConfig });

const App = props => {
  const { fetchObservations, fetchDemographicsComorbidities, fetchSubscribedNumber, showOnboard } = props;
  const { userSession, authenticated } = useBlockstack();
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

  useEffect(() => {
    document.body.style.zoom = '100%';
    if (authenticated) {
      fetchObservations(userSession);
      fetchDemographicsComorbidities(userSession);
      fetchSubscribedNumber(userSession);
    }
  }, [fetchObservations, fetchDemographicsComorbidities, fetchSubscribedNumber, authenticated, userSession]);

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
      <ScrollToTop />
      <Connect authOptions={authOptions}>
        <Layout>
          {showDisclaimer && (
            <Container>
              <Disclaimer />
            </Container>
          )}
          <Switch>
            <PrivateRoute path="/onboard" component={() => <OnboardUser />} />
            {showOnboard && <Redirect to="/onboard" />}
            <PrivateRoute exact path="/" component={() => <DiagnosticContainer />} />

            {/* ADD/EDIT ROUTES WITH THEIR COMPONENTS HERE: */}
            <PrivateRoute path="/signup" />
            <PrivateRoute path="/symptomsurvey" component={() => <Survey />} />
            <PrivateRoute path="/log" />
            <PrivateRoute path="/healthlog" />
            <PrivateRoute path="/education" component={() => <FactQuizContainer />} />
            <PrivateRoute path="/map" component={() => <Map />} />
            <PrivateRoute path="/settings" component={() => <Settings />} />
            <PrivateRoute path="/about" component={() => <About />} />
            <Route path="/404" component={NotFoundPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Layout>
      </Connect>
    </BrowserRouter>
  );
};

App.propTypes = {
  fetchObservations: PropTypes.func.isRequired,
  fetchDemographicsComorbidities: PropTypes.func.isRequired,
  fetchSubscribedNumber: PropTypes.func.isRequired,
  showOnboard: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  showOnboard: state.onboardingReducer.showOnboard,
});

const mapDispatchToProps = dispatch => ({
  fetchObservations: userSession => dispatch(actions.fetchObservations(userSession)),
  fetchDemographicsComorbidities: userSession => dispatch(actions.fetchDemographicsComorbidities(userSession)),
  fetchSubscribedNumber: userSession => dispatch(actions.fetchSubscribedNumber(userSession)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
