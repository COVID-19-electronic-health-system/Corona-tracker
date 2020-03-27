import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import { TextField, Button, Slide } from '@material-ui/core';

const Subscribe = (props) => {
    return (
      <div className={"SubscribeContainer"}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <FormControl>
            <TextField id="filled-phone" label="Enter Phone Number" value={''} onChange={() => {}} variant="filled" />
            <Button variant="contained" color="secondary">
              Subscribe for alerts
            </Button>
          </FormControl>
        </Slide>
      </div>
    );
}

export default Subscribe;
