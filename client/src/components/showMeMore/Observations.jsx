import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, styled } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid, TablePagination } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '60vw',
    },
  },

  expansionPanel: {
    borderBottom: '2px solid #b8b8b8',
  },
  summary: {
    backgroundColor: '#bbcef9',
  },
  detailed: { backgroundColor: '#82a4f8' },
}));
const RedFont = styled(Typography)({
  fontSize: '.9rem',
  textAlign: 'left',
  '& span': {
    color: '#f64141',
    fontWeight: 'bold',
  },
});
const WhiteFont = styled(Typography)({
  textAlign: 'left',
  fontSize: '.9rem',
  '& span': {
    color: 'White',
    fontWeight: 'bold',
  },
});

const Observations = props => {
  const classes = useStyles();

  const { detailData, observations } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className={classes.root}>
      {(detailData.length ? detailData : observations)
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map(observation => (
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="observation"
              id="observation"
              className={classes.summary}
            >
              <Grid container alignItems="center" justify="center" spacing={1}>
                <Grid item justify="center">
                  <RedFont>
                    <span>Date:</span> {new Date(observation.date).toLocaleDateString()}
                  </RedFont>
                </Grid>
                <Grid item>
                  <RedFont>
                    <span>Overall Feeling:</span> {`${observation.physical.dailyfeeling} /5`}
                  </RedFont>
                </Grid>
                <Grid item>
                  <RedFont>
                    <span>Temperature:</span> {observation.physical.feverSeverity} &#8457;
                  </RedFont>
                </Grid>
              </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detailed}>
              <Grid container alignItems="center" justify="center" spacing={2}>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Cough:</span> {observation.physical.coughSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Chills:</span> {observation.physical.chillsSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Shortness Of Breath:</span> {observation.physical.shortnessOfBreathSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Sore Throat:</span> {observation.physical.soreThroatSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Fatigue:</span> {observation.physical.fatigueSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Bluishness:</span> {observation.physical.bluishnessSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Gastrointestinnal Issues: </span>
                    {observation.physical.giIssueSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Headache: </span>
                    {observation.physical.headacheSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Loss of Smell:</span> {observation.physical.lostSmellSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <WhiteFont>
                    <span>Loss of Taste:</span> {observation.physical.lostTasteSeverity}
                  </WhiteFont>
                </Grid>
                <Grid item xs={12}>
                  <WhiteFont>
                    <span>Comments:</span>{' '}
                    {observation.nonPhysical.openComment ? observation.nonPhysical.openComment : 'N/A'}
                  </WhiteFont>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      <Grid container justify="center">
        <TablePagination
          rowsPerPageOptions={[2, 4, 8, 12]}
          component="div"
          count={observations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Grid>
    </div>
  );
};

Observations.propTypes = {
  detailData: PropTypes.arrayOf(Object).isRequired,
  observations: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => {
  return {
    detailData: state.healthToggleReducer.detailData,
    observations: state.observationsReducer.observations,
  };
};

export default connect(mapStateToProps)(Observations);
