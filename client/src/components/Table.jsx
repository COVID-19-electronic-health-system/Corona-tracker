import React from 'react';
import '../css/Table.css';
import '../css/themePalette.css';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Chart from './Chart';
import chartType from '../utils/chartType';

const LogTable = props => {
  const { detailData } = props;
  const questions = [
    'Date',
    'Overall Feeling',
    'Cough',
    'Fever',
    'Chills',
    'Shortness Of Breath',
    'Sore Throat',
    'Chest Pain',
    'Fatigue',
    'Bluishness',
    'Comments',
  ];

  return (
    <div>
      <TableContainer>
        <Table responsive className="table">
          <TableHead className="table-head">
            <TableRow>
              {questions.map(question => (
                <TableCell>{question}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {detailData.map(observation => (
            <TableBody>
              <TableRow>
                <TableCell>{new Date(observation.date).toISOString().slice(0, 10)}</TableCell>
                <TableCell>{observation.physical.dailyfeeling}</TableCell>
                <TableCell>{observation.physical.coughSeverity}</TableCell>
                <TableCell>{observation.physical.feverSeverity}</TableCell>
                <TableCell>{observation.physical.chillsSeverity}</TableCell>
                <TableCell>{observation.physical.shortnessOfBreathSeverity}</TableCell>
                <TableCell>{observation.physical.soreThroatSeverity}</TableCell>
                <TableCell>{observation.physical.chestPainSeverity}</TableCell>
                <TableCell>{observation.physical.fatigueSeverity}</TableCell>
                <TableCell>{observation.physical.bluishnessSeverity}</TableCell>
                <TableCell>{observation.nonPhysical.openComment}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
      <Chart chartType={chartType.bar} />
    </div>
  );
};

LogTable.propTypes = {
  detailData: PropTypes.arrayOf(object).isRequired,
};

const mapStateToProps = state => {
  return {
    detailData: state.healthToggleReducer.detailData,
  };
};

export default connect(mapStateToProps)(LogTable);
