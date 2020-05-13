import React, { useCallback, useEffect } from 'react';
import { Connect } from '@blockstack/connect';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactBlockstack, { useBlockstack, didConnect, useFile } from 'react-blockstack';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Layout from 'layout/Layout';
import Map from 'pages/Map';
import DiagnosticContainer from 'pages/HomePage';
import { appConfig } from 'utils/constants';
import FactQuizContainer from 'pages/Education';
import Survey from './pages/Survey';
import OnboardUser from 'pages/OnboardUser';
import About from 'pages/About';
import Disclaimer from './layout/Disclaimer';
import NotFoundPage from 'pages/NotFoundPage';
import actions from 'redux/actions/actions';
import ScrollToTop from './layout/ScrollToTop';
import Settings from 'pages/Settings';

ReactBlockstack({ appConfig });

const App = props => {
  const {
    fetchObservations,
    fetchDemographicsComorbidities,
    fetchSubscribedNumber,
    showOnboard,
    setReminderStatus,
  } = props;
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
  const hasSubmitted = () => {
    const date = window.localStorage.getItem('date');
    const todaysDate = new Date().toISOString().slice(0, 10);
    if (date === todaysDate) {
      if (window.localStorage.getItem('surveyCompleted') === 'false') {
        return false;
      }
      return true;
    }
    window.localStorage.setItem('date', todaysDate);
    window.localStorage.setItem('surveyCompleted', 'false');
    return false;
  };

  useEffect(() => {
    setReminderStatus(!hasSubmitted());
    document.body.style.zoom = '100%';
    if (authenticated) {
      fetchObservations(userSession);
      fetchDemographicsComorbidities(userSession);
      fetchSubscribedNumber(userSession);
    }
  }, [
    fetchObservations,
    fetchDemographicsComorbidities,
    fetchSubscribedNumber,
    authenticated,
    userSession,
    setReminderStatus,
  ]);

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
            <Route path="/onboard" component={OnboardUser} />
            {showOnboard && <Redirect to="/onboard" />}
            <Route exact path="/" component={DiagnosticContainer} />

            {/* ADD/EDIT ROUTES WITH THEIR COMPONENTS HERE: */}
            <Route path="/signup" />
            <Route path="/symptomsurvey" component={Survey} />
            <Route path="/log" />
            <Route path="/healthlog" />
            <Route path="/education" component={FactQuizContainer} />
            <Route path="/map" component={Map} />
            <Route path="/settings" component={Settings} />
            <Route path="/about" component={About} />
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
  setReminderStatus: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  showOnboard: state.onboardingReducer.showOnboard,
});

const mapDispatchToProps = dispatch => ({
  fetchObservations: (userSession, tempUnit) => dispatch(actions.fetchObservations(userSession, tempUnit)),
  fetchDemographicsComorbidities: userSession => dispatch(actions.fetchDemographicsComorbidities(userSession)),
  fetchSubscribedNumber: userSession => dispatch(actions.fetchSubscribedNumber(userSession)),
  setReminderStatus: status => dispatch(actions.setReminderStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
