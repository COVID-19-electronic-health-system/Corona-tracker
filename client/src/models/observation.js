import { Model } from 'radiks';

// Observation models all observational questions we ask users
export default class Observation extends Model {
    static className = 'Observation';
    static schema = {
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
            hasFluShot: Boolean
        },
        physical: {
            dailyFeeling: Number,
            temperature: Number,
            hasFever: Boolean,
            hasChills: Boolean,
            hasWeakness: Boolean,
            hasLimbPain: Boolean,
            hasCough: Boolean,
            hasSniffling: Boolean,
            hasDiarrhea: Boolean,
            hasSoreThroat: Boolean,
            hasHeadache: Boolean,
            hasShortnessOfBreath: Boolean
        },
        nonPhysical: {
            topConcerns: Array,
            openComment: String,
        }
    }
};
