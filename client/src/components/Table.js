import React from "react";
import "../css/Table.css";
import "../css/themePalette.css";
import { Table, Tabs, Tab } from "react-bootstrap";


import { ReactComponent as Logo } from "../img/Logo_CORONATRACKER_Logo.svg";
import { ReactComponent as TextLogo } from "../img/Logo_CORONATRACKER_Text_Logo.svg";

// Show the current date, this might should be put in App.js or as a permint layout
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date(),
  date = today.toLocaleDateString(undefined, options);

// The Table
class LogTable extends React.Component {
  constructor() {
    super();
// Made dummy data as state becuase it might be easier to change later
    this.state = {
      log: [
        {
          date: "03/11",
          feel: "10",
          symptoms: "10",
          yesterdsy: "the same",
          notedSymptoms: "none",
          comments: "Felt great!"
        },
        {
          date: "03/11",
          feel: "10",
          symptoms: "10",
          yesterdsy: "the same",
          notedSymptoms: "none",
          comments: "Felt great!"
        },
        {
          date: "03/11",
          feel: "10",
          symptoms: "10",
          yesterdsy: "the same",
          notedSymptoms: "none",
          comments: "Felt great!"
        },
        {
          date: "03/11",
          feel: "10",
          symptoms: "10",
          yesterdsy: "the same",
          notedSymptoms: "none",
          comments: "Felt great!"
        },
        {
          date: "03/11",
          feel: "10",
          symptoms: "10",
          yesterdsy: "the same",
          notedSymptoms: "none",
          comments: "Felt great Felt great!Felt great"
        }
      ]
    };
  }

  render() {
      return (
        <div>
          {/* this is added to make it like the wirefram pic, could be added to periment layout*/}
          <Logo className="table-logo" />
          <TextLogo className="table-text-logo" />
          <h4>
            Hello, <b>Anthony!</b>
          </h4>
          <h5>
            Today is <b>{date}</b>{" "}
          </h5>
          <hr className="hr" />

          {/* the start of the table */}
          <div className="">
            <Tabs className="tabs">
              <Tab title="My Health Log" eventKey="My Health Log" className="">
                <Table responsive className="table">
                  <thead className="table-head">
                    <tr>
                      <th>Date</th>
                      <th>How Do I Feel</th>
                      <th>How Are My Symptoms</th>
                      <th>Difference From Yesterdsy</th>
                      <th>Any Noted Symptoms</th>
                      <th>Comments</th>
                    </tr>
                  </thead>

                  {this.state.log.map(
                    ({
                      date,
                      feel,
                      symptoms,
                      yesterdsy,
                      notedSymptoms,
                      comments
                    }) => (
                      <tbody className="table-body">
                        <tr>
                          <td>{date}</td>
                          <td>{feel}</td>
                          <td>{symptoms}</td>
                          <td>{yesterdsy}</td>
                          <td>{notedSymptoms}</td>
                          <td>{comments}</td>
                        </tr>
                      </tbody>
                    )
                  )}
                </Table>
              </Tab>
              <Tab title="Show Me More" eventKey="Show Me More"></Tab>
            </Tabs>
          </div>
        </div>
      );
  }
}

export default LogTable;
