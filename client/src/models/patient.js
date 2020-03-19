import { Model } from 'radiks';

export default class Patient extends Model {
    static className = 'Patient';
    static schema = { // all fields are encrypted by default
        doctor: String,
        location: Array,
    }
};