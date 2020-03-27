import React, { createRef, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../css/Calendar.css";


const AppCalendar = () => { 

  // state emulation, store all events user created
  const [calendarEvents, setCalendarEvents] = useState([])

  // create new event function
  const handleCreateEventClick = (arg) => {
    let arrayObject = {
      title: 'new event',
      start: arg.date,
      allDay: arg.allDay
    }
    setCalendarEvents([...calendarEvents, arrayObject])
  }

  const calendarComponentRef = createRef()
  
  return (
      <div>
        <div className="app-calendar">
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={calendarComponentRef}
            events={calendarEvents}
            dateClick={handleCreateEventClick}
          />
        </div>
      </div>
    );
}

export default AppCalendar;