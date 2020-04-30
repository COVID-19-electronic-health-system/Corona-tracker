/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */
import React, { useRef, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import Calendar from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import actions from '../redux/actions/actions';
import WeeklyTracker from './WeeklyTracker';
import WeeklyTrackerDay from './WeeklyTrackerDay';
import '../css/Calendar.css';
import { calendarDotSvg } from '../utils/imgUrl';

const useStyles = makeStyles(theme => ({
  appCalendar: {
    margin: '0 auto',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '60vw',
    },
    maxheight: '30%',
    backgroundColor: '#97b9f7',
    color: 'white',
    fontWeight: 'bold',

    transition: 'box-shadow 0.75s',
    boxShadow: '-10px 0 10px 0 #aaaaaa',
  },
  reactCalendar: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '60vw',
    },
  },
  calendarTile: {
    paddingTop: '15px',
  },
  today: {
    color: 'white',
    backgroundColor: '#97b9f7',
  },
  completedSurvey: {
    backgroundImage: `url(${calendarDotSvg})`,
    backgroundPosition: '50% 10%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '8px',
  },
  item: {
    backgroundColor: '#97b9f7',
    fontSizeAdjust: '16vh',
    color: 'white',
    width: '100vw',
    height: '5vh',
    border: 'none',
  },
}));

const AppCalendar = props => {
  const { observations } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [today] = useState(new Date().toLocaleDateString());
  const [currentObservations, setCurrentObservations] = useState([]);
  const { i18n } = useTranslation();

  // select date function
  const handleDateClick = date => {
    const dateClickedString = date.toLocaleDateString();
    setCurrentObservations([]);
    dispatch(actions.selectDate(JSON.stringify(date).slice(0, 11)));

    observations.forEach(observation => {
      const dateString = new Date(observation.date).toLocaleDateString();
      if (dateString === dateClickedString) {
        setCurrentObservations(currentObservations => [...currentObservations, observation]);
      }
    });
  };

  // eslint-disable-next-line
  const calendarComponentRef = useRef(null);

  return (
    <>
      <div className={classes.appCalendar}>
        <Calendar
          className={classes.reactCalendar}
          locale={i18n.language}
          onChange={handleDateClick}
          tileClassName={({ date, view }) => {
            const dateString = date.toLocaleDateString();
            const tileClasses = [classes.calendarTile];

            if (dateString === today) {
              tileClasses.push(classes.today);
            }

            if (observations.find(observation => new Date(observation.date).toLocaleDateString() === dateString)) {
              tileClasses.push(classes.completedSurvey);
            }

            return tileClasses;
          }}
        />
        {currentObservations.map((observation, index) => {
          return (
            <div key={observation.date} className={classes.day}>
              <WeeklyTracker>
                <WeeklyTrackerDay dayData={observation} />
              </WeeklyTracker>
            </div>
          );
        })}
      </div>
    </>
  );
};

AppCalendar.propTypes = {
  observations: PropTypes.arrayOf(Object).isRequired,
};

function mapStateToProps(state) {
  return { observations: state.observationsReducer.observations };
}

export default connect(mapStateToProps)(AppCalendar);
