import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WeeklyTrackerDay from './WeeklyTrackerDay';
class WeeklyTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //example of data that will be passed to it 
            dates: [
                {
                    "date": "2020-03-11T14:00:00-05:00",
                    "status": "10"
                },
                {
                    "date": "2020-03-12T15:00:00-05:00",
                    "status": "10"
                }, 
                {
                    "date": "2020-03-13T13:30:00-05:00",
                    "status": "09"
                }
            ]
        };

    }
    render() {
        return (
            <WeeklyTrackerDay/>
        );
    }
}

export default WeeklyTracker;