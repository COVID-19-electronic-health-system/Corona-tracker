export const SET_SURVEY_PAGE = 'SET_SURVEY_PAGE';
export const SET_COMPLETED = 'SET_COMPLETED';
export const SET_SURVEY_PAGE_1 = 'SET_SURVEY_PAGE_1';
export const SET_SURVEY_PAGE_2 = 'SET_SURVEY_PAGE_2';
export const SET_SURVEY_PAGE_3 = 'SET_SURVEY_PAGE_3';
export const SET_SURVEY_PAGE_4 = 'SET_SURVEY_PAGE_4';
export const CLEAR_SURVEY = 'CLEAR_SURVEY';
export const SET_REMINDER_STATUS = 'SET_REMINDER_STATUS';

export const setReminderStatus = status => ({
  type: SET_REMINDER_STATUS,
  status,
});

export const setCompleted = page => ({
  type: SET_COMPLETED,
  page,
});

export const setSurveyPage = page => ({
  type: SET_SURVEY_PAGE,
  page,
});

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

export const setSurveyPage4 = survey => ({
  type: SET_SURVEY_PAGE_4,
  survey,
});

export const clearSurvey = () => ({
  type: CLEAR_SURVEY,
});
