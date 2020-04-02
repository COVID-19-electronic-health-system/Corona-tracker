/* eslint-disable no-unused-vars */

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import actions from '../redux/actions/actions';

const useStyles = makeStyles({
  appCalendar: {
    margin: '0 auto',
    maxWidth: '50%',
    maxheight: '50%',
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
  const history = useHistory();

  // select date function
  const handleDateClick = date => {
    dispatch(actions.selectDate(JSON.stringify(date).slice(0, 11)));

    const todaysDate = new Date().toISOString().slice(0, 10);
    if (date.dateStr === todaysDate) {
      history.push('/symptomsurvey');
    }
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
    </div>
  );
};

export default AppCalendar;
