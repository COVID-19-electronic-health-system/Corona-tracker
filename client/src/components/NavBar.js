import React from 'react';
import '../css/themePalette.css';
import '../css/NavBar.css';
import { withStyles } from '@material-ui/core/styles';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core/';

import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
//import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';

const styles = {
  root: {
    width: '100%',
    backgroundColor: '#f64141',
    position: 'fixed',
    height: '15%',
    bottom: 0,
  },
  actionItem: {
    color: 'white',
    '&$selected': {
      color: 'white',
    },
  },
  selected: {},
  buttons: {
    fontSize: '40px',
  },
};

class NavBar extends React.Component {
  state = {
    value: 'log',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root} showLabels>
        <BottomNavigationAction
          label="Log"
          value="log"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<FeaturedPlayListOutlinedIcon className={classes.buttons} />}
        />
        <BottomNavigationAction
          label="Education"
          value="education"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<StarBorderIcon className={classes.buttons} />}
        />
        {/*<BottomNavigationAction
          label="Chat"
          value="chat"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<VideocamOutlinedIcon className={classes.buttons} />}
        />*/}
        <BottomNavigationAction
          label="Map"
          value="map"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<LocationOnOutlinedIcon className={classes.buttons} />}
        />
        <BottomNavigationAction
          label="Settings"
          value="settings"
          classes={{
            root: classes.actionItem,
            selected: classes.selected,
          }}
          icon={<SettingsOutlinedIcon className={classes.buttons} />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(NavBar);
