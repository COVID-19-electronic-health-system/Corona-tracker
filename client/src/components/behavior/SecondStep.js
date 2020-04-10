import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";

// Destructure props
const SecondStep = ({
  handleNext,
  handleBack,
  handleChange,
  value
}) => {

  console.log(value)

  const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);

  const marks = [
    {
      value: 1,
      label: "Not At All"
    },
    {
      value: 2,
      label: " "
    },
    {
      value: 3,
      label: "Somewhat"
    },
    {
      value: 4,
      label: " "
    },
    {
      value: 5,
      label: "A lot "
    }
  ];

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        Have you been feeling down, depressed, or hopeless?
        <Typography gutterBottom></Typography>
          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            defaultValue={3}
            max={5}
            min={1}
            value={value["sadness"]}
            marks={marks}
            onChange={handleChange}
            />
        </Grid>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={12}>
        
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default SecondStep