/* eslint-disable no-console */

import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import { Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import actions from '../../redux/actions/actions';
import { TextLogo, Logo } from '../../utils/imgUrl';

const useStyles = makeStyles({
  logo: {
    width: '75px',
    height: '60px',
  },
  textLogo: {
    width: '250px',
    height: '50px',
  },
});
const Disclaimer = props => {
  const { userSession } = useBlockstack();
  const { answer } = props;
  const history = useHistory();

  const disclaimerAnswerJSON = {
    answerChoice: null,
  };

  const storeAnswer = ans => {
    disclaimerAnswerJSON.answerChoice = ans;
    props.setAnswer(ans, disclaimerAnswerJSON, userSession);

    // Navigate to onboarding screen if user agrees to disclaimer
    if (ans) {
      history.push('/onboard');
    }
  };

  const classes = useStyles();
  return (
    <div>
      {!answer ? (
        <Dialog open aria-describedby="disclaimer">
          <DialogTitle align="center" id="alert-dialog-title">
            <object title="logo" className={classes.logo} data={Logo} type="image/svg+xml" />
            <object title="logoText" className={classes.textLogo} data={TextLogo} type="image/svg+xml" />
          </DialogTitle>
          <DialogContent>
            <DialogContent align="left" id="disclaimer-text">
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.byClickingIAgreeYouConfirmThatYouHaveReadThePrivacyPolicyAndTermsOfUseThatYouUnderstandThemAndThatYouAgreeToBeBoundByThemYouShouldCarefullyReadTheLinkedTermsOfUseAndPrivacyPolicyBeforeUsingTheCoronatrackerApp" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.byCreatingAnAccountAndUsingTheAppYouAreConsentingToBeBoundByTheTermsOfUseAndPrivacyPolicyIfYouDoNotAgreeToAllOfTheTermsDoNotLogOnOrUseTheApp" />
              </Typography>
              <Trans i18nKey="disclaimerSection.text.disclaimerValue.byContinuingToUseTheServicesYouAgreeAsFollows" />
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.anyInformationThatWeCollectThroughYourUseOfTheServicesIsSubjectToTheCoronatrackerPrivacyPolicyWhichIsPartOfTheseTermsOfUse" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.youAreAtLeast18YearsOldOrHaveBeenLegallyEmancipated" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.youUnderstandAndAgreeThatTheseTermsAreALegallyBindingAgreementAndTheEquivalentOfASignedWrittenContract" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.youWillUseTheServicesInAMannerConsistentWithApplicableLawsAndRegulationsAndTheseTermsOfUseAsTheyMayBeAmendedByCoronatrackerFromTimeToTimes" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.youAreAResidentOfTheUnitedStatesAndAreNotAnEuDataCitizenForPurposesOfTheEuGeneralDataProtectionRegulationAndYouUnderstandAcceptAndHaveReceivedTheseTermsAndThePrivacyPolicyAndAcknowledgeThatYouCanAccessTheTermsAtAnyTimeHereAndThePrivacyPolicyAtAnyTimeHere" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.ifYouDoNotAgreeWithAndAcceptTheTermsAndOrPrivacyPolicyDoNotLogIntoTheAppAndImmediatelyDeleteAllFilesIfAnyAssociatedWithTheAccompanyingServicesAndMaterialsFormYourComputerOrMobileDevice" />
              </Typography>
              <Typography>
                <Trans i18nKey="disclaimerSection.text.disclaimerValue.medicalAdviceDisclaimerTheCoronatrackerAppAndCoronatrackerAreNotProvidingYouWithMedicalAdviceOfAnyKindTheAppCannotAndIsNotDesignedIntendedOrAppropriateToReplaceTheRelationshipBetweenYouAndAHealthCareProfessionalOrToAddressSeriousEmergentOrLifeThreateningMedicalConditionsAndShouldNotBeUsedInThoseCircumstancesYouShouldAlwaysCheckWithYourHealthcareProfessionalIfYouHaveAnyConcernsAboutYourConditionOrTreatmentAndBeforeTakingOrNotTakingAnyActionOnTheBasisOfAnyContentOnTheApp" />
              </Typography>
              <Typography>
                ARBITRATION NOTICE: EXCEPT IF YOU OPT-OUT AND EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE
                ARBITRATION SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND MAWI HEALTH WILL BE RESOLVED BY
                BINDING, INDIVIDUAL ARBITRATION. BY CONTINUING TO USE THE SERVICES, AND UNLESS YOU OPT-OUT, YOU WAIVE
                YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. YOU CAN OPT-OUT OF THE
                ARBITRATION AGREEMENT BY CONTACTING carterklein13@gmail.com WITHIN 30 DAYS OF ACCEPTING THESE TERMS.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button variant="outlined" onClick={() => storeAnswer(true)}>
                <Trans i18nKey="disclaimerSection.text.buttonAgree.iAgree" />
              </Button>
              <Button variant="outlined" onClick={() => storeAnswer(false)}>
                <Trans i18nKey="disclaimerSection.text.disagree.iDonTAgree" />
              </Button>
            </DialogActions>
            <Link href="https://coronatracker.me/privacy-policy">Privacy Policy</Link>
            <Link href="https://coronatracker.me/terms-of-use">Terms of Use</Link>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};

Disclaimer.propTypes = {
  answer: PropTypes.bool.isRequired,
  setAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { answer: state.onboardingReducer.disclaimerAnswer };
};

const mapDispatchToProps = dispatch => {
  return {
    setAnswer: (answer, disclaimerAnswerJSON, userSession) =>
      dispatch(actions.setDisclaimerAnswerThunk(answer, disclaimerAnswerJSON, userSession)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Disclaimer);
