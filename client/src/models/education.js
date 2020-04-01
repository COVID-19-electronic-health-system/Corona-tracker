import { Model } from 'radiks';

export default class Education extends Model {
  static className = 'Education';

  static schema = {
    education_type: String,
    content_english: String,
    content_spanish: String,
    answer_english: String,
    answer_spanish: String,
    source: String,
  };
}
