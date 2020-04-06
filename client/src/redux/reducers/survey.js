import { SET_SURVEY_PAGE_1, SET_SURVEY_PAGE_2, SET_SURVEY_PAGE_3 } from '../actions/survey';

const initialState = {
  survey: {
    date: 0,
    physical: {},
    nonPhysical: {},
  },
  surveyPage: 1,
};

const surveyReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_SURVEY_PAGE_1:
      return {
        ...oldState,
        surveyPage: 2,
        survey: {
          ...oldState.survey,
          date: Date.now(),
          physical: {
            ...oldState.survey.physical,
            dailyfeeling: action.survey.todayFeeling,
            dailySymptomsFeeling: action.survey.todaySymptoms,
            dailyComparedToYesterday: action.survey.comparedFeeling,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
          },
        },
      };
    case SET_SURVEY_PAGE_2:
      return {
        ...oldState,
        surveyPage: 3,
        survey: {
          ...oldState.survey,
          date: Date.now(),
          physical: {
            ...oldState.survey.physical,
            feverSeverity: action.survey.fever,
            shortnessOfBreathSeverity: action.survey.shortnessOfBreath,
            chillsSeverity: action.survey.chills,
            coughSeverity: action.survey.dryCough,
            chestPainSeverity: action.survey.chestPain,
            fatigueSeverity: action.survey.fatigue,
            soreThroatSeverity: action.survey.soreThroat,
            bluishnessSeverity: action.survey.bluish,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
          },
        },
      };
    case SET_SURVEY_PAGE_3:
      return {
        ...oldState,
        surveyPage: 1,
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
    default:
      return oldState;
  }
};

export default surveyReducer;
