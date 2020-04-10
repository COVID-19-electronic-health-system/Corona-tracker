import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// Destructure props
const Confirm = ({
  handleNext,
  handleBack,
  values
}) => {

console.log(values)  
  return (
    <Fragment>
       <List disablePadding>
        <ListItem>
          <ListItemText primary="Interest" secondary={values[0]["interest"]}/>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Sadness" secondary={values[1]["sadness"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Sleep" secondary={values[2]["sleep"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Energy" secondary={values[3]["energy"]} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Appetite" secondary={values[4]["appetite"]} />
        </ListItem>

        <Divider />

      

      </List> 

      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={handleNext}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  );
};

export default Confirm;