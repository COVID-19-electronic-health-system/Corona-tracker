/* eslint-disable no-await-in-loop */

import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useBlockstack } from 'react-blockstack';
import { makeStyles } from '@material-ui/core';
import MyHealthLog from './MyHealthLog';
import Table from './Table';
import actions from '../redux/actions/actions';
import buttonsCss from '../css/buttons';

const useStyles = makeStyles({
  buttons: {
    ...buttonsCss.buttons,
    margin: '2px 15px',
  },
});

const HealthLogToggle = props => {
  const classes = useStyles();
  const { setDetailData } = props;
  const data = [];
  const { userSession } = useBlockstack();
  let files = [];

  const getDetailData = async () => {
    files = [];
    await userSession
      .listFiles(file => {
        files.push(file);
        return true;
      })
      .then(async () => {
        for (let i = 0; i < files.length; i += 1) {
          if (files[i].includes('observation/')) {
            const curr = await userSession.getFile(files[i]);
            data.push(JSON.parse(curr));
          }
        }
      });
  };

  const { toggleValue, setToggleValue } = props;
  return (
    <div>
      <Container>
        <ButtonGroup size="medium" aria-label="outlined button group">
          <Button onClick={() => setToggleValue('showMeMore')} className={classes.buttons}>
            <Trans i18nKey="health.logButton" />
          </Button>
          <Button
            onClick={() => {
              getDetailData().then(() => {
                setDetailData(data);
                setToggleValue('myHealthLog');
              });
            }}
            className={classes.buttons}
          >
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
};

const mapStateToProps = state => {
  return {
    toggleValue: state.healthToggleReducer.toggleValue,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToggleValue: toggleValue => dispatch(actions.setToggleValue(toggleValue)),
    setDetailData: detailData => dispatch(actions.setDetailData(detailData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HealthLogToggle);
