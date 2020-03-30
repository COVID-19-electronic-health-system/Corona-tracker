import { Model } from 'radiks';

export default class Demographics extends Model {
  static className = 'Demographics';

  static schema = {
    age: Number,
    gender: String,
    race: String,
    isHispanicOrLatino: Boolean,
    educationLevel: String,
    householdSize: Number,
    essentialJobsInHouseholdNumber: Number,
    childrenInHouseholdNumber: Number,
    elderlyInHouseholdNumber: Number,
    assisstanceHouseholdNumber: Number,
    livesAlone: Boolean,
    lastTravelDate: Date,
  };
}
