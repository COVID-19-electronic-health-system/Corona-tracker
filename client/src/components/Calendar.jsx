import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
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

  // create new event function
  const handleCreateEventClick = args => {
    dispatch(actions.selectDate(args.dateStr));

    const todaysDate = new Date().toISOString().slice(0, 10);
    if (args.dateStr === todaysDate) {
      history.push('/symptomsurvey');
    }
  };

  const calendarComponentRef = useRef(null);

  return (
    <div>
      <div className={classes.appCalendar}>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          ref={calendarComponentRef}
          events={calendarEvents}
          dateClick={args => {
            handleCreateEventClick(args);
          }}
        />
      </div>
    </div>
  );
};

export default AppCalendar;
