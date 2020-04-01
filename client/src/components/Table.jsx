import React from 'react';
import '../css/Table.css';
import '../css/themePalette.css';
import { Table } from 'react-bootstrap';

// The Table
const LogTable = () => {
  // Made dummy data as state becuase it might be easier to change later
  const state = {
    questionnaire: [
      'Date',
      'How Do you Feel?',
      'How Are My Symptoms?',
      'Difference From Yesterdsy',
      'Any Noted Symptoms',
      'Comments',
    ],
    log: [
      {
        date: '03/11',
        feel: '10',
        symptoms: '10',
        yesterdsy: 'the same',
        notedSymptoms: 'none',
        comments: 'Felt great!',
      },
      {
        date: '03/11',
        feel: '10',
        symptoms: '10',
        yesterdsy: 'the same',
        notedSymptoms: 'none',
        comments: 'Felt great!',
      },
      {
        date: '03/11',
        feel: '10',
        symptoms: '10',
        yesterdsy: 'the same',
        notedSymptoms: 'none',
        comments: 'Felt great!',
      },
      {
        date: '03/11',
        feel: '10',
        symptoms: '10',
        yesterdsy: 'the same',
        notedSymptoms: 'none',
        comments: 'Felt great!',
      },
      {
        date: '03/11',
        feel: '10',
        symptoms: '10',
        yesterdsy: 'the same',
        notedSymptoms: 'none',
        comments: 'Felt great Felt great!Felt great',
      },
    ],
  };

  return (
    <div>
      {/* the start of the table */}
      <div className="">
        <Table responsive className="table">
          <thead className="table-head">
            <tr>
              {state.questionnaire.map(question => (
                <th>{question}</th>
              ))}
            </tr>
          </thead>
          {state.log.map(({ date, feel, symptoms, yesterdsy, notedSymptoms, comments }) => (
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
          ))}
        </Table>
      </div>
    </div>
  );
};

export default LogTable;
