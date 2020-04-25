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
  surveyPage: 0,
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
            giIssueSeverity: action.survey.giIssues,
            headacheSeverity: action.survey.headache,
            lostTasteSeverity: action.survey.lostTaste,
            lostSmellSeverity: action.survey.lostSmell,
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
            interest: action.survey.interestAnswer,
            sadness: action.survey.sadAnswer,
            sleep: action.survey.sleepAnswer,
            energy: action.survey.energyAnswer,
            appetite: action.survey.appetiteAnswer,
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
