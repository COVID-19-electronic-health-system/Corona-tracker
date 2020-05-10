import { AppConfig } from 'blockstack';

export const appConfig = new AppConfig(['store_write', 'publish_data']);

/**
 * Available languages. The first language will be the default language. Keep
 * the following languages in alphabetical order by `language`.
 */
export const languages = [
  {
    language: 'English',
    abbreviation: 'en',
  },
  {
    language: 'Dutch',
    abbreviation: 'nl',
  },
  {
    language: 'French',
    abbreviation: 'fr',
  },
  {
    language: 'Italian',
    abbreviation: 'it',
  },
  {
    language: 'Russian',
    abbreviation: 'ru',
  },
  {
    language: 'Spanish',
    abbreviation: 'es',
  },
];

export const defaultLanguage = languages[0];

export const states = [
  {
    name: 'Alabama',
    abbreviation: 'AL',
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
  },
  {
    name: 'Arizona ',
    abbreviation: 'AZ',
  },
  {
    name: 'California ',
    abbreviation: 'CA',
  },
  {
    name: 'Colorado ',
    abbreviation: 'CO',
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
  },
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
  },
  {
    name: 'New York',
    abbreviation: 'NY',
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
  },
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
  },
  {
    name: 'Virginia ',
    abbreviation: 'VA',
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
  },
];

export const dataSet = [
  {
    columns: [
      'Date',
      'Daily Feeling',
      'Daily Symptoms Feeling',
      'Daily Compared to Yesterday',
      'Fever Severity',
      'Shortness of Breath Severity',
      'Chills Severity',
      'Cough Severity',
      'Fatigue Severity',
      'Sore Throat Severity',
      'Bluishness Severity',
      'Gastrointestinnal Issues Severity',
      'Headache Severity',
      'Loss of Smell Severity',
      'Loss of Taste Severity',
      'Appetite Level',
      'Energy Level',
      'Level of Interest',
      'Depression Level',
      'Trouble Sleeping',
      'Open Comment',
    ],
    data: [],
  },
];

export default appConfig;
