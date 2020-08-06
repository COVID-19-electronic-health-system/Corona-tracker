import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AvgTemperature from "components/showMeMore/AvgTemperature";
import chartType from "utils/chartType";
import buttonsCss from "styles/buttons";
import Observations from "../showMeMore/Observations";
import Chart from "../showMeMore/Chart";
import BehavioralChart from "../showMeMore/BehavioralChart";
import Download from "../showMeMore/Download";
import { Trans } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "15vh",
  },
  buttons: {
    "& > *": {
      ...buttonsCss.buttons,
      margin: theme.spacing(1),
      maxWidth: "100px",
    },
  },
  behaveDiv: {
    paddingBottom: "30vh",
    width: "100vw",
    height: "60vh",
    [theme.breakpoints.up("md")]: { width: "60vw", height: "70vh" },
  },
  feverDiv: {
    marginBottom: "5%",
    width: "100vw",
    height: "50vh",
    [theme.breakpoints.up("md")]: { width: "60vw" },
  },
  export: { ...buttonsCss.buttons, margin: theme.spacing(1) },
}));

const ShowMeMore = () => {
  const classes = useStyles();

  const [content, setContent] = useState("observations");
  return (
    <div className={classes.root}>
      <Grid>
        <Download className={classes.export} />
      </Grid>
      <Grid>
        <ButtonGroup
          className={classes.buttons}
          aria-label="contained primary button group"
        >
          <Button onClick={() => setContent("observations")}>
            <Trans i18nKey="showMeMoreSection.text.buttonObservations.observations" />{" "}
          </Button>
          <Button onClick={() => setContent("behavioralChart")}>
            <Trans i18nKey="showMeMoreSection.text.buttonBehavioral.behavioral" />
          </Button>
          <Button onClick={() => setContent("avgTemperature")}>
          <Trans i18nKey="showMeMoreSection.text.buttonTemperature.temperature" />
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid container justify="center">
        {content === "observations" && <Observations />}
        {content === "behavioralChart" && (
          <div className={classes.behaveDiv}>
            <BehavioralChart />
          </div>
        )}
        {content === "avgTemperature" && (
          <Grid container justify="center" className={classes.feverDiv}>
            <AvgTemperature />
            <Chart chartType={chartType.bar} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ShowMeMore;
