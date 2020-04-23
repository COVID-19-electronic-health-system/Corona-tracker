/* eslint-disable no-console */

import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import actions from '../redux/actions/actions';
import { TextLogo, Logo } from '../utils/imgUrl';

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
  const { t } = useTranslation();
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
              {/* WE CAN ADD THIS BACK ONCE LEGAL-APPROVED DISCLAIMER IS TRANSLATED */}
              {/* <DialogContentText>{t('disclaimer.text0')}</DialogContentText>
              <DialogContentText>{t('disclaimer.text1')}</DialogContentText> */}
              <Typography>
                By clicking &apos;I Accept&apos;, you confirm that you have read the Privacy Policy and Terms of Use,
                that you understand them, and that you agree to be bound by them.YOU SHOULD CAREFULLY READ THE LINKED
                TERMS OF USE AND PRIVACY POLICY BEFORE USING THE CORONATRACKER APP.
              </Typography>
              <Typography>
                BY CREATING AN ACCOUNT AND USING THE APP, YOU ARE CONSENTING TO BE BOUND BY THE TERMS OF USE AND PRIVACY
                POLICY. IF YOU DO NOT AGREE TO ALL OF THE TERMS, DO NOT LOG ON OR USE THE APP.
              </Typography>
              <Typography>By continuing to use the Services, You agree as follows:</Typography>
              <Typography>
                Any information that We collect through Your use of the Services is subject to the CoronaTracker Privacy
                Policy, which is part of these Terms of Use;
              </Typography>
              <Typography>You are at least 18 years old or have been legally emancipated;</Typography>
              <Typography>
                You understand and agree that these Terms are a legally binding agreement and the equivalent of a
                signed, written contract;
              </Typography>
              <Typography>
                You will use the Services in a manner consistent with applicable laws and regulations and these Terms of
                Use, as they may be amended by CoronaTracker from time to time;
              </Typography>
              <Typography>
                You are a resident of the United States and are not an EU data citizen for purposes of the EU General
                Data Protection Regulation; andYou understand, accept, and have received these Terms and the Privacy
                Policy, and acknowledge that You can access the Terms at any time here and the Privacy Policy at any
                time here.
              </Typography>
              <Typography>
                If you do not agree with and accept the terms and/or privacy policy, do not log into the App and
                immediately delete all files, if any, associated with the accompanying services and materials form your
                computer or mobile device.
              </Typography>
              <Typography>
                Medical Advice Disclaimer: THE CORONATRACKER APP AND CORONATRACKER ARE NOT PROVIDING YOU WITH MEDICAL
                ADVICE OF ANY KIND. THE APP CANNOT AND IS NOT DESIGNED, INTENDED, OR APPROPRIATE TO REPLACE THE
                RELATIONSHIP BETWEEN YOU AND A HEALTH CARE PROFESSIONAL OR TO ADDRESS SERIOUS, EMERGENT, OR
                LIFE-THREATENING MEDICAL CONDITIONS AND SHOULD NOT BE USED IN THOSE CIRCUMSTANCES. You should always
                check with your healthcare professional if you have any concerns about your condition or treatment and
                before taking, or not taking, any action on the basis of any content on the App.
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
                {t('disclaimer.agree')}
              </Button>
              <Button variant="outlined" onClick={() => storeAnswer(false)}>
                {t('disclaimer.disagree')}
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
