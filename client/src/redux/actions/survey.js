export const SET_SURVEY_PAGE_1 = 'SET_SURVEY_PAGE_1';
export const SET_SURVEY_PAGE_2 = 'SET_SURVEY_PAGE_2';
export const SET_SURVEY_PAGE_3 = 'SET_SURVEY_PAGE_3';

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
