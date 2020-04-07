import expect from 'expect';
import reducer from '../../../redux/reducers/survey';
import { setSurveyPage1, setSurveyPage2, setSurveyPage3 } from '../../../redux/actions/survey';

const date = Date.now();

describe('survey reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      survey: {
        date: 0,
        nonPhysical: {},
        physical: {},
      },
      surveyPage: 1,
    });
  });

  it('should handle SET_SURVEY_PAGE_1', () => {
    expect(
      reducer(
        {
          survey: {
            date,
            nonPhysical: {},
            physical: {
              dailyComparedToYesterday: 'worse',
              dailySymptomsFeeling: 0,
              dailyfeeling: 0,
            },
          },
          surveyPage: 2,
        },
        setSurveyPage1
      )
    ).toEqual({
      surveyPage: 2,
      survey: {
        date,
        physical: {
          dailyfeeling: 0,
          dailySymptomsFeeling: 0,
          dailyComparedToYesterday: 'worse',
        },
        nonPhysical: {},
      },
    });
  });

  it('should handle SET_SURVEY_PAGE_2', () => {
    expect(
      reducer(
        {
          survey: {
            date,
            nonPhysical: {},
            physical: {
              feverSeverity: 'none',
              shortnessOfBreathSeverity: 'none',
              chillsSeverity: 'none',
              coughSeverity: 'none',
              chestPainSeverity: 'none',
              fatigueSeverity: 'none',
              soreThroatSeverity: 'none',
              bluishnessSeverity: 'none',
            },
          },
          surveyPage: 3,
        },
        setSurveyPage2
      )
    ).toEqual({
      surveyPage: 3,
      survey: {
        date,
        physical: {
          feverSeverity: 'none',
          shortnessOfBreathSeverity: 'none',
          chillsSeverity: 'none',
          coughSeverity: 'none',
          chestPainSeverity: 'none',
          fatigueSeverity: 'none',
          soreThroatSeverity: 'none',
          bluishnessSeverity: 'none',
        },
        nonPhysical: {},
      },
    });
  });

  it('should handle SET_SURVEY_PAGE_3', () => {
    expect(
      reducer(
        {
          survey: {
            date,
            nonPhysical: {
              openComment: '',
            },
            physical: {},
          },
          surveyPage: 1,
        },
        setSurveyPage3
      )
    ).toEqual({
      surveyPage: 1,
      survey: {
        date,
        physical: {},
        nonPhysical: {
          openComment: '',
        },
      },
    });
  });
});
