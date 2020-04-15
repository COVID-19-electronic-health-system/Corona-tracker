import React,  { useState } from 'react';
import '../css/Table.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import Chart from './Chart';
import chartType from '../utils/chartType';
import BehavioralChart from './behavior/chart/BehavioralChart'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tagLine: {
    marginTop:"40px"
  }, 
  behaveDiv: {
    height:700
  },
  feverDiv: {
    height:500
  }

})
)

const LogTable = props => {
  const classes = useStyles();
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

  const[behaveClicked, setBehaveClicked] = useState(false)
  const [feverClicked, setFeverClicked] = useState(false)
  const renderBehavior = behaveClicked ? <div className={classes.behaveDiv}><BehavioralChart/></div> : null
  const renderFever = feverClicked ? <div className={classes.feverDiv}><Chart chartType={chartType.bar}/></div> : null

  const handleChange = evt => {
    const targetName = evt.target.name;

    switch(targetName){
      case "Fever":
        setFeverClicked(!feverClicked)
        break
      case "Behavioral":
        setBehaveClicked(!behaveClicked)
        break
        default:
          break
    }
  }

  return (
    <>
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
      <div>
      <FormControlLabel
        control={<Checkbox checked={feverClicked} onChange={handleChange} color="primary" name="Fever" />}
        label="Fever"
      />
       <FormControlLabel
        control={<Checkbox checked={behaveClicked} onChange={handleChange} name="Behavioral" color="primary" />}
        label="Behavioral"
      />
      </div>
    </div>
        { behaveClicked ? <Typography variant="h2">Your Behavioral Health Progress</Typography>:null}
        {renderBehavior}
        {behaveClicked ? <div className={classes.tagLine}><Typography variant="h6">See this past week's daily progress. Hover over the chart to see individual scores.</Typography></div>:null }
        {renderFever} 
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
