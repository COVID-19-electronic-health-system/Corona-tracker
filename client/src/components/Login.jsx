import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useConnect } from '@blockstack/connect';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TranslationsMenu from './Translations';
import actions from '../redux/actions/actions';
import Loding from './Loding';
import buttonsCss from '../css/buttons';
import { FullLogo } from '../utils/imgUrl';

const useStyles = makeStyles(theme => ({
  Login: {
    textAlign: 'center',
    height: '100vh',
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
  },
  Button: {
    ...buttonsCss.buttons,
    fontSize: '28px',
    height: '50px',
    lineHeight: '10px',
    margin: '20px',
  },
  logo: {
    width: '40vw',
    height: '40vh',
    [theme.breakpoints.down('xs')]: {
      height: '20vh',
    },
  },
  fullLogo: {
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
          <object title="fullLogo" className={classes.fullLogo} data={FullLogo} type="image/svg+xml" />
          <Typography variant="h6">{t('login.text')} </Typography>
          <Button variant="login" className={classes.Button} onClick={onClick}>
            {t('login.buttonText')}
          </Button>
          <TranslationsMenu />
          <Typography>If on mobile, please disable popups for best use!</Typography>
        </div>
      )}
    </div>
  );
};

Login.propTypes = {
  loginLoading: PropTypes.objectOf(Object).isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = ({ loginLoading }) => ({
  loginLoading,
});

const mapDispatchToProps = dispatch => ({
  setLoading: isLoading => dispatch(actions.setLoginLoading(isLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
