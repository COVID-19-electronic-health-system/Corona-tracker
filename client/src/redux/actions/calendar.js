export const SELECT_DATE = 'DATE_LOAD';

export function selectDate(selectedDate) {
  // here we should send request to database and select servey data for this day
  // right now it just select the date from the calendar
  return {
    type: SELECT_DATE,
    date: selectedDate,
  };
}
