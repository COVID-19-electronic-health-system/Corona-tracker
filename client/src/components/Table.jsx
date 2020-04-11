import React from 'react';
import '../css/Table.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import Chart from './Chart';
import chartType from '../utils/chartType';

const LogTable = props => {
  const { detailData, observations } = props;
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
