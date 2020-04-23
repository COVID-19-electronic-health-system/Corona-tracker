import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { useConnect } from '@blockstack/connect';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TranslationsMenu from './Translations';
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
    marginTop: '8%',
    animation: `$glowing 1075ms infinite`,
  },
  '@keyframes glowing': {
    '0% ': { backgroundColor: '#2ba805', boxShadow: '0px 1px 10px 0px #4760ff' },
    '50%': { backgroundColor: '#49e819', boxShadow: '0px 1px 13px 3px #4760ff' },
    '100%': { backgroundColor: '#2ba805', boxShadow: '0px 1px 10px 0px #4760ff' },
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
const Login = () => {
  const classes = useStyles();
  const { doOpenAuth } = useConnect();
  const { t } = useTranslation();
  const onClick = () => {
    doOpenAuth();
  };

  return (
    <div className={classes.Login}>
      <div>
        <object title="fullLogo" className={classes.fullLogo} data={FullLogo} type="image/svg+xml" />
        <Typography variant="h6">{t('login.text')} </Typography>
        <Button variant="login" className={classes.Button} onClick={onClick}>
          {t('login.buttonText')}
        </Button>
        <TranslationsMenu />
        <Typography>If on mobile, please disable popups for best use!</Typography>
      </div>
    </div>
  );
};

export default Login;
