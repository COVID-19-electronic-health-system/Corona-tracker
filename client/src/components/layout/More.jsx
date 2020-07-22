import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { Drawer, Typography, Grid, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WavesIcon from '@material-ui/icons/Waves';
import actions from 'redux/actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: theme.spacing(1),
    width: theme.spacing(32),
    height: theme.spacing(14),
    border: 0,
    margin: 'auto',
    marginBottom: theme.spacing(9),

    background: `linear-gradient(0deg, #4760ff, #82a4f8)`,
  },
  text: {
    color: 'white',
    marginTop: '10px',
  },
  pulse: {
    fontSize: '40px',
  },
  spirometer: {
    fontSize: '40px',
    width: '60px',
  },
  buttonSpirometer: {
    color: 'white',
    marginRight: '30px',
  },
  buttonPulse: {
    color: 'white',
    marginLeft: '30px',
  },
}));

const More = props => {
  const { moreToggle, setMoreToggle } = props;
  const classes = useStyles();
  const handleClose = () => {
    setMoreToggle(!moreToggle);
  };
  return (
    <div>
      <Drawer
        open={moreToggle}
        anchor="bottom"
        onClose={handleClose}
        transitionDuration={500}
        BackdropProps={{ invisible: true }}
        classes={{ paper: classes.paper }}
      >
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography align="center" variant="body2" className={classes.text}>
              Explor More Open Sources Softwares
            </Typography>
          </Grid>
          <Button className={classes.buttonSpirometer}>
            <Grid container direction="column">
              <WavesIcon className={classes.spirometer} onClick={handleClose} />
              <Typography variant="caption" align="center">
                Spirometer
              </Typography>
            </Grid>
          </Button>
          <Button component={Link} to="/pulse" className={classes.buttonPulse} onClick={handleClose}>
            <Grid container direction="column" alignContent="center">
              <FavoriteBorderIcon className={classes.pulse} />
              <Typography variant="caption" align="center">
                Pulse
              </Typography>
            </Grid>
          </Button>
        </Grid>
      </Drawer>
    </div>
  );
};
More.propTypes = {
  setMoreToggle: PropTypes.func.isRequired,
  moreToggle: PropTypes.bool.isRequired,
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
    setSettingsToggle: settingsToggle => dispatch(actions.setSettingsToggle(settingsToggle)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(More);
