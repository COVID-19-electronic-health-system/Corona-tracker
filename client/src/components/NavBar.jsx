import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core/';
import { connect } from 'react-redux';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PropTypes from 'prop-types';
import actions from '../redux/actions/actions';
import More from './More';

const styles = {
  root: {
    width: '100%',
    background: `linear-gradient(0deg, #4760ff, #82a4f8)`,
    position: 'fixed',
    height: '75px',
    bottom: 0,
  },
  actionItem: {
    color: 'white',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: 'white',
      transform: 'scale(1.1)',
    },
    '&$selected': {
      color: 'white',
      backgroundColor: 'red',
    },
  },
  selected: {},
  buttons: {
    fontSize: '40px',

    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
};

const NavBar = props => {
  const { setToggleValue, classes } = props;

  return (
    <div>
      <BottomNavigation className={classes.root} showLabels>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Log"
          value="log"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          onClick={() => setToggleValue('myHealthLog')}
          icon={<FeaturedPlayListOutlinedIcon className={classes.buttons} />}
        />
        <BottomNavigationAction
          component={Link}
          to="/education"
          label="Education"
          value="education"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<StarBorderIcon className={classes.buttons} />}
        />
        {/* <BottomNavigationAction
          label="Chat"
          value="chat"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<VideocamOutlinedIcon className={classes.buttons} />}
        /> */}
        <BottomNavigationAction
          component={Link}
          to="/map"
          label="Map"
          value="map"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<LocationOnOutlinedIcon className={classes.buttons} />}
        />
        <More />
      </BottomNavigation>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.objectOf(Object).isRequired,
  setToggleValue: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => {
  return {
    setToggleValue: toggleValue => dispatch(actions.setToggleValue(toggleValue)),
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(NavBar));
