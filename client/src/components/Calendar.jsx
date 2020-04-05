/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */
import { red } from '@material-ui/core/colors';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import PropTypes from 'prop-types';
import actions from '../redux/actions/actions';
import WeeklyTracker from './WeeklyTracker';
import WeeklyTrackerDay from './WeeklyTrackerDay';
import '../css/Calendar.css';

const useStyles = makeStyles({
  appCalendar: {
    margin: '0 auto',
    width: '100vw',
    maxheight: '30%',
    backgroundColor: '#97b9f7',
    color: 'white',
    fontWeight: 'bold',
  },
  reactCalendar: {
    width: '100vw',
  },
  today: {
    color: 'white',
    backgroundColor: '#97b9f7',
  },
  item: {
    backgroundColor: '#97b9f7',
    fontSizeAdjust: '16vh',
    color: 'white',
    width: '100vw',
    height: '5vh',
    border: 'none',
  },
});

const AppCalendar = props => {
  const { setToggleValue } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [today] = useState(new Date().toISOString().slice(0, 10));
  let files = [];
  const { userSession } = useBlockstack();
  const [trackers, setTrackers] = useState([]);

  // select date function
  const handleDateClick = async date => {
    files = [];
    setTrackers([]);
    dispatch(actions.selectDate(JSON.stringify(date).slice(0, 11)));

    await userSession
      .listFiles(file => {
        files.push(file);
        return true;
      })
      .then(async () => {
        for (let i = 0; i < files.length; i += 1) {
          if (files[i].includes('observation/')) {
            const curr = await userSession.getFile(files[i]);
            if (new Date(JSON.parse(curr).date).setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)) {
              setTrackers(trackers => [...trackers, curr]);
            }
          }
        }
      });
  };

  // eslint-disable-next-line
  const calendarComponentRef = useRef(null);

  return (
    <div className={classes.appCalendar}>
      <Calendar
        className={classes.reactCalendar}
        onChange={handleDateClick}
        tileClassName={({ date, view }) => {
          if (date.toISOString().slice(0, 10) === today) {
            return classes.today;
          }
          return null;
        }}
      />
      {trackers.map(tracker => {
        return (
          <div className={classes.day}>
            <WeeklyTracker key={tracker.date}>
              <WeeklyTrackerDay dayData={tracker} />
            </WeeklyTracker>
          </div>
        );
      })}
    </div>
  );
};

AppCalendar.propTypes = {
  setToggleValue: PropTypes.func.isRequired,
};

export default AppCalendar;
