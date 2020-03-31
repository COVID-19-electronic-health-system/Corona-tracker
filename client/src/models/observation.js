import { Model } from 'radiks';

// Observation models all observational questions we ask users
export default class Observation extends Model {
  static className = 'Observation';

  static schema = {
    date: Date,
    coronavirus: {
      closeContactSuspected: Boolean,
      hasCoronaVirus: Boolean,
      closeContactConfirmedCase: Boolean,
    },
    clinicalStatus: {
      clinicalComorbidties: Array,
      clinicalComorbidtiesAll: String, // we will have to parse this string delimited by spaces
      height: Number, // we should parse this on the client side into inches
      weight: Number,
      isCurrentSmoker: Boolean,
      clinicalMedications: Array,
      clinicalMedicationsAll: String, // we will have to parse this string delimited by spaces
      bloodType: String,
      healthcareSeekingLimitations: Array,
      healthcareSeekingPreference: Array,
      hasLookedForHealthcareInfoAny: Boolean,
      hasLookedForHealthcareInfoInternet: Boolean,
      lookedForHealthcareFirstChoice: String,
      lookedForHealthcareFirstPerson: String,
      internetUse: Array,
      hasSentTextToDoctor: Boolean,
      covidConfidence: String,
      hasHighRiskJob: Boolean,
      hasObesity: Boolean,
      isPregnant: Boolean,
      takesImmunodepressants: Boolean,
      hasFluShot: Boolean,
    },
    physical: {
      dailyFeeling: Number,
      dailySymptomsFeeling: Number,
      dailyComparedToYesterday: Number,
      temperature: Number,
      hasFever: Boolean,
      feverSeverity: String,
      hasChills: Boolean,
      hasWeakness: Boolean,
      hasLimbPain: Boolean,
      hasCough: Boolean,
      coughSeverity: String,
      hasSniffling: Boolean,
      hasDiarrhea: Boolean,
      hasSoreThroat: Boolean,
      soreThroatSeverity: String,
      hasHeadache: Boolean,
      headacheSeverity: String,
      hasShortnessOfBreath: Boolean,
      hasDizziness: Boolean,
      dizzinessSeverity: String,
      hasCongestion: Boolean,
      congestionSeverity: String,
    },
    nonPhysical: {
      topConcerns: Array,
      openComment: String,
    },
  };
}
