import {
  SET_SURVEY_PAGE_1,
  SET_SURVEY_PAGE_2,
  SET_SURVEY_PAGE_3,
  SET_SURVEY_PAGE_4,
  TO_SURVEY_PAGE_1,
  TO_SURVEY_PAGE_2,
  TO_SURVEY_PAGE_3,
  CLEAR_SURVEY,
} from '../actions/survey';

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
            giIssueSeverity: action.survey.giIssues,
            headacheSeverity: action.survey.headache,
            lostTasteSeverity: action.survey.lostTasteSeverity,
            lostSmellSeverity: action.survey.lostSmellSeverity,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
          },
        },
      };
    case SET_SURVEY_PAGE_3:
      return {
        ...oldState,
        surveyPage: 4,
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
        surveyPage: 1,
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
    case TO_SURVEY_PAGE_1:
      return {
        ...oldState,
        surveyPage: 1,
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
            lostTasteSeverity: action.survey.lostTasteSeverity,
            lostSmellSeverity: action.survey.lostSmellSeverity,
          },
          nonPhysical: {
            ...oldState.survey.nonPhysical,
          },
        },
      };
    case TO_SURVEY_PAGE_2:
      return {
        ...oldState,
        surveyPage: 2,
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
    case TO_SURVEY_PAGE_3:
      return {
        ...oldState,
        surveyPage: 3,
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
        surveyPage: 1,
      };
    default:
      return oldState;
  }
};

export default surveyReducer;
