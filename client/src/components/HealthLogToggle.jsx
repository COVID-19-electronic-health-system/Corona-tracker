import React, { useCallback } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import MyHealthLog from './MyHealthLog';
import Table from './Table';
import actions from '../redux/actions/actions';
import buttonsCss from '../css/buttons';

const useStyles = makeStyles({
  buttons: {
    ...buttonsCss.buttons,
    margin: '0px 8px 2px 8px',
    width: '160px',
  },
});

const HealthLogToggle = props => {
  const { toggleValue, setToggleValue, setDetailData, observations } = props;
  const classes = useStyles();

  const onShowMeMoreClick = useCallback(() => {
    setDetailData(observations);
    setToggleValue('myHealthLog');
  }, [observations, setDetailData, setToggleValue]);

  return (
    <div>
      <Container>
        <ButtonGroup size="medium" aria-label="outlined button group">
          <Button onClick={() => setToggleValue('showMeMore')} className={classes.buttons}>
            <Trans i18nKey="health.logButton" />
          </Button>
          <Button onClick={onShowMeMoreClick} className={classes.buttons}>
            <Trans i18nKey="health.showMoreButton" />
          </Button>
        </ButtonGroup>
      </Container>
      {toggleValue === 'myHealthLog' && <MyHealthLog />}
      {toggleValue === 'showMeMore' && <Table />}
    </div>
  );
};

HealthLogToggle.propTypes = {
  toggleValue: PropTypes.string.isRequired,
  setToggleValue: PropTypes.func.isRequired,
  setDetailData: PropTypes.func.isRequired,
  observations: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = state => {
  return {
    toggleValue: state.healthToggleReducer.toggleValue,
    observations: state.observationsReducer.observations,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleValue: toggleValue => dispatch(actions.setToggleValue(toggleValue)),
    setDetailData: detailData => dispatch(actions.setDetailData(detailData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HealthLogToggle);
