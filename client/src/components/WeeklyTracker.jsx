import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import WeeklyTrackerDay from './WeeklyTrackerDay';

// Example of date data being passed through redux
const dates = [
  {
    date: 11,
    day: 'Monday',
    status: '10',
    temp: 99.6,
    symptoms: 'headache',
    comments: 'Tired for the entire day',
  },
  {
    date: 12,
    day: 'Tuesday',
    status: '10',
    temp: 99.6,
    symptoms: 'headache',
    comments: 'Tired for the entire day',
  },
  {
    date: 13,
    day: 'Wednesday',
    status: '09',
    temp: 99.6,
    symptoms: 'headache',
    comments: 'Tired for the entire day',
  },
  {
    date: 14,
    day: 'Thursday',
    status: '09',
    temp: 99.6,
    symptoms: 'headache',
    comments: 'Tired for the entire day',
  },
];

const WeeklyTracker = () => {
  return (
    <div className="weekly-tracker-container">
      {dates.map(dayData =>
        toast(<WeeklyTrackerDay dayData={dayData} />, {
          draggable: true,
          closeOnClick: true,
          draggablePercent: 70,
        })
      )}
      <ToastContainer closeOnClick draggable draggablePercent closeButton={false} />
    </div>
  );
};

export default WeeklyTracker;
