/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import { useBlockstack } from 'react-blockstack';
import actions from '../redux/actions/actions';
import WeeklyTracker from './WeeklyTracker';
import WeeklyTrackerDay from './WeeklyTrackerDay';

const useStyles = makeStyles({
  appCalendar: {
    margin: '0 auto',
    maxWidth: '50%',
    maxheight: '30%',
    backgroundColor: '#f64141',
    color: 'white',
  },
  today: {
    color: 'white',
    backgroundColor: '#f64141',
  },
});

const AppCalendar = () => {
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
          <div>
            <WeeklyTracker key={tracker.date}>
              <WeeklyTrackerDay dayData={tracker} />
            </WeeklyTracker>
          </div>
        );
      })}
    </div>
  );
};

export default AppCalendar;
