import React from "react";
import "../css/Table.css";
import "../css/themePalette.css";
import { Table, Tabs, Tab } from "react-bootstrap";


import { ReactComponent as Logo } from "../img/Logo_CORONATRACKER_Logo.svg";
import { ReactComponent as TextLogo } from "../img/Logo_CORONATRACKER_Text_Logo.svg";


// The Table
class LogTable extends React.Component {
  constructor() {
    super();
// Made dummy data as state becuase it might be easier to change later
      this.state = {
        questionnaire: [
          "Date",
          "How Do you Feel?",
          "How Are My Symptoms?",
          "Difference From Yesterdsy",
          "Any Noted Symptoms",
          "Comments"
        ],
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
          {/* the start of the table */}
          <div className="">
                <Table responsive className="table">
                  <thead className="table-head">
                  <tr>
                  {this.state.questionnaire.map(question => (
                        <th>{question}</th>
                        ))}
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
          </div>
        </div>
      );
  }
}

export default LogTable;
