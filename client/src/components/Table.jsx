import React, { useState } from 'react';
import '../css/Table.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import chartType from '../utils/chartType';
import BehavioralChart from './behavior/chart/BehavioralChart';
import AvgTemperature from './AvgTemperature';
import buttonsCss from '../css/buttons';

const useStyles = makeStyles(() => ({
  behaveDiv: {
    paddingBottom: '15%',
    height: 700,
    overflow: 'auto',
  },
  feverDiv: {
    overflow: 'auto',
    paddingBottom: '15%',
  },
  buttons: {
    ...buttonsCss.buttons,
    margin: '5px 8px 2px 8px',
    width: '150px',
  },
}));

const LogTable = props => {
  const classes = useStyles();
  const { detailData, observations } = props;
  const questions = [
    'Date',
    'Overall Feeling',
    'Cough',
    'Temperature',
    'Chills',
    'Shortness Of Breath',
    'Sore Throat',
    'Fatigue',
    'Bluishness',
    'Gastrointestinnal Issues',
    'Headache',
    'Loss of Smell',
    'Loss of Taste',
    'Comments',
  ];

  const [behaveClicked, setBehaveClicked] = useState(false);
  const [feverClicked, setFeverClicked] = useState(false);

  const renderBehavior = behaveClicked ? (
    <div className={classes.behaveDiv}>
      <BehavioralChart />
    </div>
  ) : null;
  const renderFever = feverClicked ? (
    <div className={classes.feverDiv}>
      <AvgTemperature />
      <Chart chartType={chartType.bar} />
    </div>
  ) : null;

  const handleChange = evt => {
    const targetName = evt.target.name;

    switch (targetName) {
      case 'Fever':
        setFeverClicked(!feverClicked);
        setBehaveClicked(false);
        break;
      case 'Behavioral':
        setBehaveClicked(!behaveClicked);
        setFeverClicked(false);
        break;
      default:
        break;
    }
  };

  const getDisplayValue = (value, suffix = '') => {
    if (!value) {
      return 'N/A';
    }
    return `${value}${suffix}`;
  };
  return (
    <>
      <div>
        <Button className={classes.buttons}>Export to Excel</Button>
        <div>
          <FormControlLabel
            control={<Checkbox checked={feverClicked} onChange={handleChange} color="secondary" name="Fever" />}
            label="Fever"
          />
          <FormControlLabel
            control={<Checkbox checked={behaveClicked} onChange={handleChange} name="Behavioral" color="secondary" />}
            label="Behavioral"
          />
        </div>
        {renderBehavior}
        <br />
        {renderFever}
        {!feverClicked && !behaveClicked ? (
          <TableContainer>
            <Table className="table">
              <TableHead className="table-head">
                <TableRow>
                  {questions.map(question => (
                    <TableCell key={question}>{question}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {(detailData.length ? detailData : observations).map(observation => (
                <TableBody key={observation.date}>
                  <TableRow>
                    <TableCell>{new Date(observation.date).toLocaleDateString()}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.dailyfeeling, '/5')}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.coughSeverity)}</TableCell>
                    <TableCell>
                      {getDisplayValue(observation.physical.feverSeverity, ` ${String.fromCharCode(176)}F`)}
                    </TableCell>
                    <TableCell>{getDisplayValue(observation.physical.chillsSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.shortnessOfBreathSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.soreThroatSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.fatigueSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.bluishnessSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.giIssueSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.headacheSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.lostTasteSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.physical.lostSmellSeverity)}</TableCell>
                    <TableCell>{getDisplayValue(observation.nonPhysical.openComment)}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </>
  );
};

LogTable.propTypes = {
  detailData: PropTypes.arrayOf(Object).isRequired,
  observations: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => {
  return {
    detailData: state.healthToggleReducer.detailData,
    observations: state.observationsReducer.observations,
  };
};

export default connect(mapStateToProps)(LogTable);
