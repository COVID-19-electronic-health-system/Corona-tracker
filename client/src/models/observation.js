// Observation models all observational questions we ask users
export default class Observation {
  constructor() {
    this.date = null;
    this.coronavirus = {
      closeContactSuspected: false,
      hasCoronaVirus: false,
      closeContactConfirmedCase: false,
    };
    this.clinicalStatus = {
      clinicalComorbidties: [],
      clinicalComorbidtiesAll: '',
      height: 0,
      weight: 0,
      isCurrentSmoker: false,
      clinicalMedications: [],
      clinicalMedicationsAll: '',
      bloodType: '',
      healthcareSeekingLimitations: [],
      healthcareSeekingPreference: [],
      hasLookedForHealthcareInfoAny: false,
      hasLookedForHealthcareInfoInternet: false,
      lookedForHealthcareFirstChoice: '',
      lookedForHealthcareFirstPerson: '',
      internetUse: [],
      hasSentTextToDoctor: false,
      covidConfidence: '',
      hasHighRiskJob: false,
      hasObesity: false,
      isPregnant: false,
      takesImmunodepressants: false,
      hasFluShot: false,
    };
    this.physical = {
      dailyFeeling: 0,
      dailySymptomsFeeling: 0,
      dailyComparedToYesterday: 0,
      temperature: 0,
      hasFever: false,
      feverSeverity: '',
      hasChills: false,
      hasWeakness: false,
      hasLimbPain: false,
      hasCough: false,
      coughSeverity: '',
      hasSniffling: false,
      hasDiarrhea: false,
      hasSoreThroat: false,
      soreThroatSeverity: '',
      hasHeadache: false,
      headacheSeverity: '',
      hasShortnessOfBreath: false,
      hasDizziness: false,
      dizzinessSeverity: '',
      hasCongestion: false,
      congestionSeverity: '',
    };
    this.nonPhysical = {
      topConcerns: [],
      openComment: '',
      interest: 0,
      sadness: 0,
      sleep: 0,
      energy: 0,
      appetite: 0,
    };
  }
}
