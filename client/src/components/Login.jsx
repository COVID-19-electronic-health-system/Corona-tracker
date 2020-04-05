import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { useConnect } from '@blockstack/connect';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TranslationsMenu from './Translations';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import setLoginLoading from '../redux/actions/actions';
import Loding from './Loding';
import buttonsCss from '../css/buttons';

const useStyles = makeStyles(theme => ({
  Login: {
    textAlign: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
  },
  Button: {
    ...buttonsCss.buttons,
    marginTop: '5vh',
  },
  logo: {
    width: '40vw',
    height: '40vh',
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
    },
  },
  textLogo: {
    width: '70vw',
    height: '30vh',

    [theme.breakpoints.down('xs')]: {
      height: '20vh',
    },
  },
}));
const Login = props => {
  const { loginLoading, setLoading } = props;
  const classes = useStyles();
  const { doOpenAuth } = useConnect();
  const { t } = useTranslation();
  const onClick = () => {
    setLoading(true);
    doOpenAuth();
  };

  return (
    <div className={classes.Login}>
      {loginLoading.isLoading ? (
        <Loding />
      ) : (
        <div>
          <Grid item xs={12}>
            <Logo className={classes.logo} />{' '}
          </Grid>
          <TextLogo className={classes.textLogo} />
          <Typography variant="h6">{t('login.text')} </Typography>
          <Button variant="login" className={classes.Button} onClick={onClick}>
            {t('login.buttonText')}
          </Button>
          <TranslationsMenu />
        </div>
      )}
    </div>
  );
};

Login.propTypes = {
  loginLoading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = ({ loginLoading }) => ({
  loginLoading,
});

const mapDispatchToProps = dispatch => ({
  setLoading(isLoading) {
    // return () => {
    dispatch(setLoginLoading.setLoginLoading(isLoading));
    // }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
