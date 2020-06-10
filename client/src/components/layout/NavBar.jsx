import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography, Grid } from '@material-ui/core';

import { connect } from 'react-redux';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import PropTypes from 'prop-types';
import actions from 'redux/actions/actions';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  // making the style of NavBar
  appBar: {
    top: 'auto',
    bottom: 0,
    height: theme.spacing(8),
    background: `linear-gradient(0deg, #4760ff, #82a4f8)`,
  },
  toolBar: {
    justifyContent: 'center',
  },
  buttons: {
    transition: 'all .3s ease-in-out',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.1)',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(0, 5, 0, 5),
    },
    [theme.breakpoints.down('321px')]: {
      margin: theme.spacing(0),
    },
  },
  icons: {
    fontSize: '35px',
  },
}));

const NavBar = props => {
  const { setMoreToggle, setToggleValue, setSettingsToggle, moreToggle, settingsToggle } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    // added to buttons when:
    // use route to a page: component={Link} to="/foo"
    // trigger a componet: onClick and redux
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar centered className={classes.toolBar}>
          <Button component={Link} to="/" className={classes.buttons} onClick={() => setToggleValue('myHealthLog')}>
            <Grid container direction="column" alignItems="center">
              <FeaturedPlayListOutlinedIcon className={classes.icons} />
              <Typography variant="caption">{t('bottomNavMenu.text.log.log')}</Typography>
            </Grid>
          </Button>
          <Button component={Link} to="/education" className={classes.buttons}>
            <Grid container direction="column" alignItems="center">
              <StarBorderIcon className={classes.icons} />
              <Typography variant="caption">{t('bottomNavMenu.text.education.education')}</Typography>
            </Grid>
          </Button>
          <Button onClick={() => setMoreToggle(!moreToggle)} className={classes.buttons}>
            <Grid container direction="column" alignItems="center">
              <AddCircleOutlineIcon className={classes.icons} />
              <Typography variant="caption">more &#43;</Typography>
            </Grid>
          </Button>
          <Button component={Link} to="/map" className={classes.buttons}>
            <Grid container direction="column" alignItems="center">
              <LocationOnOutlinedIcon className={classes.icons} />
              <Typography variant="caption">{t('bottomNavMenu.text.map.map')}</Typography>
            </Grid>
          </Button>

          <Button onClick={() => setSettingsToggle(!settingsToggle)} className={classes.buttons}>
            <Grid container direction="column" alignItems="center">
              <MoreHorizIcon className={classes.icons} />
              <Typography variant="caption">{t('bottomNavMenu.text.more.more')}</Typography>
            </Grid>
          </Button>
        </Toolbar>
        <SettingsButton />
        <More />
      </AppBar>
    </div>
  );
};
NavBar.propTypes = {
  setMoreToggle: PropTypes.func.isRequired,
  setToggleValue: PropTypes.func.isRequired,
  setSettingsToggle: PropTypes.func.isRequired,
  moreToggle: PropTypes.bool.isRequired,
  settingsToggle: PropTypes.bool.isRequired,
};
const mapStateToProps = state => {
  return {
    moreToggle: state.navToggle.moreToggle,
    settingsToggle: state.navToggle.settingsToggle,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setMoreToggle: moreToggle => dispatch(actions.setMoreToggle(moreToggle)),
    setToggleValue: toggleValue => dispatch(actions.setToggleValue(toggleValue)),
    setSettingsToggle: settingsToggle => dispatch(actions.setSettingsToggle(settingsToggle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
