import React from "react";
import'../css/Table.css'
import "../css/themePalette.css";
import { Table, Tabs, Tab } from "react-bootstrap";
import { ReactComponent as Logo } from "../img/Logo_CORONATRACKER_Logo.svg";
import { ReactComponent as TextLogo } from "../img/Logo_CORONATRACKER_Text_Logo.svg";

class LogTable extends React.Component {
    constructor() {
        super()
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        const today = new Date(),
            date = today.toLocaleDateString(undefined, options)
            
        this.state = {
            date: date,
            key: ''
        }
    }
    
    render() {
        return (
          <div>
            <Logo className="table-logo" />
            <TextLogo className="table-text" />
            <h3>
              Hello, <b>Anthony</b>
            </h3>
            <h4>
              Today is <b>{this.state.date}</b>{" "}
            </h4>
            <div className="table">
              <Tabs className="tabs">
                <Tab
                  title="My Health Log"
                  eventKey="My Health Log"
                  className=""
                >
                  <thead className="table-thead">
                    <th>Date</th>
                    <th>How Do I Feel</th>
                    <th>How Are My Symptoms</th>
                    <th>Difference From Yesterdsy</th>
                    <th>Any Noted Symptoms</th>
                    <th>Comments</th>
                  </thead>
                </Tab>
                <Tab title="Show Me More" eventKey="Show Me More"></Tab>
              </Tabs>
            </div>
          </div>
        );
    }
};

export default LogTable