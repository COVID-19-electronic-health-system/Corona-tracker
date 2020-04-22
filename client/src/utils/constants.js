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

export default appConfig;
