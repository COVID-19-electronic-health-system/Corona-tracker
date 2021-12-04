import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import { Typography, Grid, Button } from "@material-ui/core";
import DeleteAllDataDialog from "../deleteComponents/DeleteAllDataDialog";
import DeletionDialog from "../deleteComponents/DeletionDialog";
import buttonsCss from "../../styles/buttons";
import TranslationsMenu from "../common/Translations";
import { Trans } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(12),
    padding: "10px",
  },
  deleteButton: {
    ...buttonsCss.buttons,
    margin: "0px 8px 2px 8px",
    width: "300px",
    cursor: "pointer",
    height: "3.5em",
    marginTop: "2em",
    background: `#f64141`,
    "&:hover": {
      boxShadow: "0px 1px 10px 0px #f64141",
      background: `#f64141`,
    },
  },
  updateButton: {
    ...buttonsCss.buttons,
    background: "#4760ff",
    margin: "0px 8px 2px 8px",
    width: "300px",
    cursor: "pointer",
    height: "3.5em",
    marginTop: "2em",
    "&:hover": {
      boxShadow: "0px 1px 10px 0px #4760ff",
      background: "#4760ff",
      color: "white",
    },
  },
}));

const Settings = (props) => {
  const { demographicsComorbidities, tempUnit } = props;
  const {
    age,
    gender,
    city,
    state,
    zip,
    isSmoker,
    isObese,
    isAsthmatic,
  } = demographicsComorbidities;
  const classes = useStyles();
  const [showDeletionDialog, setShowDeletionDialog] = useState(false);
  const history = useHistory();
  return (
    <div>
      <Grid container justify="center" className={classes.root}>
        <Grid container alignItems="center" direction="column">
          <Grid item>
            <Typography variant="h2" color="textPrimary">
              <b>
                <Trans i18nKey="settingsSection.text.myInfo.myInformation" />{" "}
              </b>
            </Typography>
          </Grid>
          <Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.ageLabel.ageYears" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {age}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.genderLabel.gender" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {gender}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.cityLabel.city" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {city}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.stateLabel.state" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {state}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.zipLabel.zip" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {zip}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.smokerLabel.smoker" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {isSmoker}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.obeseLabel.obese" />:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {isObese}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  <Trans i18nKey="settingsSection.text.asthmaticLabel.asthmatic" />
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {isAsthmatic}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="space-between">
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  Preferred Temperature Units:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" color="textPrimary">
                  {tempUnit}
                </Typography>
              </Grid>
            </Grid>
            <Button
              className={classes.updateButton}
              onClick={() => history.push("/onboard")}
            >
              <Trans i18nKey="settingsSection.text.updateSaveResponse.updateInformation" />
            </Button>
          </Grid>

          <Button
            onClick={() => {
              setShowDeletionDialog(true);
            }}
            className={classes.deleteButton}
          >
            <Trans i18nKey="settingsSection.text.deleteObservations.deleteAllObservationData" />
          </Button>
          {showDeletionDialog && (
            <DeletionDialog setShowDeletionDialog={setShowDeletionDialog} />
          )}

          <Button
            className={classes.deleteButton}
            onClick={() => {
              setShowDeletionDialog(true);
            }}
          >
            <Trans i18nKey="settingsSection.text.deleteAll.deleteAllData" />
          </Button>
          {showDeletionDialog && (
            <DeleteAllDataDialog
              setShowDeletionDialog={setShowDeletionDialog}
            />
          )}
        </Grid>
        <TranslationsMenu />
        <Grid container alignItems="center" direction="column">
          <Link
            href="https://coronatracker.me/privacy-policy"
            color="textPrimary"
          >
            <Trans i18nKey="settingsSection.text.privacyPolicy.privacyPolicy" />
          </Link>
          <Link
            href="https://coronatracker.me/terms-of-use"
            color="textPrimary"
          >
            <Trans i18nKey="settingsSection.text.termsOfUse.termsOfUse" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

Settings.propTypes = {
  demographicsComorbidities: PropTypes.shape({
    age: PropTypes.string,
    gender: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    isSmoker: PropTypes.string,
    isObese: PropTypes.string,
    isAsthmatic: PropTypes.string,
  }).isRequired,
  tempUnit: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  demographicsComorbidities: state.onboardingReducer.demographicsComorbidities,
  tempUnit: state.onboardingReducer.tempUnit,
});

export default connect(mapStateToProps, null)(Settings);
