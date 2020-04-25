import {
  SET_SURVEY_PAGE,
  SET_SURVEY_PAGE_1,
  SET_SURVEY_PAGE_2,
  SET_SURVEY_PAGE_3,
  SET_SURVEY_PAGE_4,
  SET_COMPLETED,
  CLEAR_SURVEY,
} from '../actions/survey';

const initialState = {
  survey: {
    date: 0,
    physical: {},
    nonPhysical: {},
  },
  completedSteps: {},
  surveyPage: 1,
};

const surveyReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_SURVEY_PAGE:
      return { ...oldState, surveyPage: action.page };
    case SET_COMPLETED:
      return { ...oldState, completedSteps: { ...oldState.completedSteps, [action.page]: true } };
    case SET_SURVEY_PAGE_1:
      return {
        ...oldState,
        survey: {
          ...oldState.survey,
          date: Date.now(),
          physical: {
            ...oldState.survey.physical,
            ...action.survey,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
          },
        },
      };
    case SET_SURVEY_PAGE_2:
      return {
        ...oldState,
        survey: {
          ...oldState.survey,
          date: Date.now(),
          physical: {
            ...oldState.survey.physical,
            ...action.survey,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
          },
        },
      };
    case SET_SURVEY_PAGE_3:
      return {
        ...oldState,
        survey: {
          ...oldState.survey,
          date: Date.now(),
          physical: {
            ...oldState.survey.physical,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
            openComment: action.survey.openComment,
          },
        },
      };
    case SET_SURVEY_PAGE_4:
      return {
        ...oldState,
        survey: {
          ...oldState.survey,
          date: Date.now(),
          physical: {
            ...oldState.survey.physical,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
            ...action.survey,
          },
        },
      };

    case CLEAR_SURVEY:
      return {
        ...oldState,
        survey: {
          date: 0,
          physical: {},
          nonPhysical: {},
        },
        surveyPage: 0,
        completed: {},
      };
    default:
      return oldState;
  }
};

export default surveyReducer;
