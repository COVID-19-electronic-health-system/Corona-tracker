import React, { useRef } from 'react';
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
});

const AppCalendar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  // select date function
  const handleDateClick = date => {
    dispatch(actions.selectDate(JSON.stringify(date).slice(0, 11)));

    const todaysDate = new Date().toISOString().slice(0, 10);
    if (date.dateStr === todaysDate) {
      history.push('/symptomsurvey');
    }
  };

  const calendarComponentRef = useRef(null);

  return (
    <div className={classes.appCalendar}>
      <Calendar onChange={handleDateClick} />
    </div>
  );
};

export default AppCalendar;
