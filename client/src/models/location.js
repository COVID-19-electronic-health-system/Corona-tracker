import { Model } from 'radiks';

export default class Location extends Model {
    static className = 'Location';
    static schema = {
        latitude: Number,
        longitude: Number,
    }
};