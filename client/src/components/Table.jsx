import React /* , { useState } */ from 'react';
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
  // FormControlLabel,
  // Checkbox,
  // Typography,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Chart from './Chart';
import chartType from '../utils/chartType';
// import BehavioralChart from './behavior/chart/BehavioralChart';

// const useStyles = makeStyles(() => ({
//   tagLine: {
//     marginTop: '40px',
//   },
//   behaveDiv: {
//     height: 700,
//   },
//   feverDiv: {
//     height: 500,
//   },
// }));

const LogTable = props => {
  // const classes = useStyles();
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

  // const [behaveClicked, setBehaveClicked] = useState(false);
  // const [feverClicked, setFeverClicked] = useState(false);
  // const renderBehavior = behaveClicked ? (
  //   <div className={classes.behaveDiv}>
  //     <BehavioralChart />
  //   </div>
  // ) : null;
  // const renderFever = feverClicked ? (
  //   <div className={classes.feverDiv}>
  //     <Chart chartType={chartType.bar} />
  //   </div>
  // ) : null;

  // const handleChange = evt => {
  //   const targetName = evt.target.name;

  //   switch (targetName) {
  //     case 'Fever':
  //       setFeverClicked(!feverClicked);
  //       break;
  //     case 'Behavioral':
  //       setBehaveClicked(!behaveClicked);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <div>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
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
                  <TableCell>{observation.physical.dailyfeeling}/5</TableCell>
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
