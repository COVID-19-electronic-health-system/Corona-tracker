import React from 'react';
import '../css/Login.css';
import '../css/App.css';
import '../css/themePalette.css';
import TranslationsMenu from './Translations.js'
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import Button from 'react-bootstrap/Button';
import { useConnect } from '@blockstack/connect';
import { connect } from 'react-redux';
import setLoginLoading from '../redux/actions/actions'
import { useTranslation } from 'react-i18next';

const Login = ({ loginLoading, setLoading }) => {
  const { doOpenAuth } = useConnect();
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  const onClick = () => {
    setLoading(true)
    doOpenAuth()
  }

  return (
    <div className="Login">
      {loginLoading['isLoading'] ? (
        <div id="bowlG">
          <div id="bowl_ringG">
            <div className="ball_holderG">
              <div className="ballG">
              </div>
            </div>
          </div>
        </div>
      ) : (
          <div>

            <Logo className="LoginLogo" />
            <TextLogo className="TextLogo" />
            <p className="ShortDescriptionText">{t('login.text')} </p>
            <style type="text/css">
              {`
                .btn-login {
                    background-color: #f64141;
                    color: f64141;
                }
                `}
            </style>
            <Button variant="login" onClick={onClick}>
        {t('login.buttonText')}
            </Button>
          <TranslationsMenu/>
        </div>
        )}

    </div>
  );
}

const mapStateToProps = ({ loginLoading }) => ({
  loginLoading,
})

const mapDispatchToProps = dispatch => ({
  setLoading(isLoading) {
    // return () => {
      dispatch(setLoginLoading['setLoginLoading'](isLoading))
    // }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
