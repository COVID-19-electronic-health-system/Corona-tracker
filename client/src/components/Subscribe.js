import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import { TextField, Button, Slide } from '@material-ui/core';

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

class Subscribe extends React.Component {

  render() {
    return (
      <div className={"SubscribeContainer"}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <FormControl>
            <TextField id="filled-phone" label="Phone Number" value={''} onChange={() => {}} variant="filled" />
            <Button variant="contained" color="secondary">
              Subscribe for alerts
            </Button>
          </FormControl>
        </Slide>
      </div>
    );
  }
}

export default withStyles(styles)(Subscribe);
