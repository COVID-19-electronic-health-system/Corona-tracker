import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ReactExport from 'react-export-excel';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import { dataSet } from '../../utils/constants';

const { ExcelFile } = ReactExport;
const { ExcelSheet } = ReactExport.ExcelFile;

const useStyles = makeStyles(theme => ({
  export: { ...buttonsCss.buttons, margin: theme.spacing(1) },
}));

const Download = props => {
  const { observations } = props;
  const classes = useStyles();

  // Add all of our current observations to the data set
  useEffect(() => {
    observations.forEach(observation => {
      const temp = [
        new Date(observation.date).toISOString().slice(0, 10),
        observation.physical.dailyfeeling,
        observation.physical.dailySymptomsFeeling,
        observation.physical.dailyComparedToYesterday,
        observation.physical.feverSeverity,
        observation.physical.shortnessOfBreathSeverity,
        observation.physical.chillsSeverity,
        observation.physical.coughSeverity,
        observation.physical.fatigueSeverity,
        observation.physical.soreThroatSeverity,
        observation.physical.bluishnessSeverity,
        observation.physical.giIssueSeverity,
        observation.physical.headacheSeverity,
        observation.physical.lostSmellSeverity,
        observation.physical.lostTasteSeverity,
        observation.nonPhysical.appetite,
        observation.nonPhysical.energy,
        observation.nonPhysical.interest,
        observation.nonPhysical.sadness,
        observation.nonPhysical.sleep,
        observation.nonPhysical.openComment,
      ];
      dataSet[0].data.push(temp);
    });
  }, [observations]);

  // Download Excel file of our observations
  return (
    <ExcelFile element={<Button className={classes.export}>Export to Excel</Button>}>
      <ExcelSheet dataSet={dataSet} name="Observations" />
    </ExcelFile>
  );
};

Download.propTypes = {
  observations: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => {
  return {
    observations: state.observationsReducer.observations,
  };
};

export default connect(mapStateToProps)(Download);
