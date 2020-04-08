export const SET_SURVEY_PAGE_1 = 'SET_SURVEY_PAGE_1';
export const SET_SURVEY_PAGE_2 = 'SET_SURVEY_PAGE_2';
export const SET_SURVEY_PAGE_3 = 'SET_SURVEY_PAGE_3';
export const TO_SURVEY_PAGE_1 = 'TO_SURVEY_PAGE_1';
export const TO_SURVEY_PAGE_2 = 'TO_SURVEY_PAGE_2';
export const CLEAR_SURVEY = 'CLEAR_SURVEY';

export const setSurveyPage1 = survey => ({
  type: SET_SURVEY_PAGE_1,
  survey,
});

export const setSurveyPage2 = survey => ({
  type: SET_SURVEY_PAGE_2,
  survey,
});

export const setSurveyPage3 = survey => ({
  type: SET_SURVEY_PAGE_3,
  survey,
});

export const toSurveyPage1 = survey => ({
  type: TO_SURVEY_PAGE_1,
  survey,
});

export const toSurveyPage2 = survey => ({
  type: TO_SURVEY_PAGE_2,
  survey,
});

export const clearSurvey = () => ({
  type: CLEAR_SURVEY,
});
