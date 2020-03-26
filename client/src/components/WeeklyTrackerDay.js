import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import CalendarThreeLines from '../img/Calendar_Three-Lines.svg';
import '../css/WeeklyTrackerDay.css';

const styles = {
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

const WeeklyTrackerDay = props => {
  const { dayData } = props;
  console.log(dayData.day);
  return (
    <Container className="day-container">
      <Row style={styles.row}>
        <Col xs lg="1" style={styles.col}>
          <img src={CalendarThreeLines} />
        </Col>
        <Col xs lg="1" style={styles.col}>
          <strong>{dayData.date.toDateString()}</strong>
        </Col>
        <Col style={styles.col}>
          <p>You said you felt: {dayData.status} / 10</p>
          <p>{dayData.day}, 12:00pm</p>
        </Col>
        <Col style={styles.col}>
          <p>
            Fever: <strong>{dayData.temp}</strong>
          </p>
          <p>
            Symptoms: <strong>{dayData.symptoms}</strong>
          </p>
          <p>
            Comments: <strong>{dayData.comments}</strong>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default WeeklyTrackerDay;
