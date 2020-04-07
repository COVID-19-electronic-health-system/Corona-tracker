import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SurveyPage1 from './SurveyPage1';
import SurveyPage2 from './SurveyPage2';
import SurveyPage3 from './SurveyPage3';

const Survey = props => {
  const { surveyPage } = props;
  return (
    <div>
      {surveyPage === 1 && <SurveyPage1 />}
      {surveyPage === 2 && <SurveyPage2 />}
      {surveyPage === 3 && <SurveyPage3 />}
    </div>
  );
};

Survey.propTypes = {
  surveyPage: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  return {
    surveyPage: state.surveyReducer.surveyPage,
  };
};

export default connect(mapStateToProps)(Survey);
