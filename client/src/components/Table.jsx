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
    'Dizziness',
    'Headache',
    'Sore Throat',
    'Congestion',
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
                <TableCell>
                  {observation.physical.hasCough.toString()} ({observation.physical.coughSeverity})
                </TableCell>
                <TableCell>
                  {observation.physical.hasfever.toString()} ({observation.physical.feverSeverity})
                </TableCell>
                <TableCell>
                  {observation.physical.hasDizziness.toString()} ({observation.physical.dizzinessSeverity})
                </TableCell>
                <TableCell>
                  {observation.physical.hasHeadache.toString()} ({observation.physical.headacheSeverity})
                </TableCell>
                <TableCell>
                  {observation.physical.hasSoreThroat.toString()} ({observation.physical.soreThroatSeverity})
                </TableCell>
                <TableCell>
                  {observation.physical.hasCongestion.toString()} ({observation.physical.congestionSeverity})
                </TableCell>
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
