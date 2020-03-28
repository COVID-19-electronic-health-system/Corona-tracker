import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl'
import { TextField, Button, Slide } from '@material-ui/core';
import axios from 'axios';

const Subscribe = (props) => {
  const [number, setNumber] = useState('')

  function subscribe() {
    axios.post('https://m72j7fayxh.execute-api.us-east-1.amazonaws.com/api/subscribe', {
      "number": number
    }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(res => {
      console.log(res)
      alert(`Subscribed successfully! You will be automatically unsubscribed in one day, and will receive three texts in that timespan. If you enter again, you will receive double the notifications - so please do not! This is very early alpha :)`)
    }).catch(err => {
      console.log(err)
    })
  }

    return (
      <div className={"SubscribeContainer"}>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <FormControl>
            <TextField id="filled-phone" label="Enter Phone Number" onChange={(e) => setNumber(e.target.value)} variant="filled" />
            <Button onClick={() => subscribe()} variant="contained" color="secondary">
              Subscribe for alerts
            </Button>
          </FormControl>
        </Slide>
      </div>
    );
}

export default Subscribe;
