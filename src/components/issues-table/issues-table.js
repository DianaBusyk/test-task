import React from "react";
import "./issues-table.css";

function IssuesTable(props) {
  console.log(props.issues)
  return (
    <div className="table-container">
      {/* <p>Issues of {username !== "" ? username + "/" + repo : ""}:</p> */}

      <table className="table table-hover table-issues">
        <thead>
          <tr className="main-tr">
            <th scope="col">Title</th>
            <th scope="col">Labels</th>
            <th scope="col">Assignee</th>
            <th scope="col">Number of comments</th>
          </tr>
        </thead>
        <tbody>
          {props.issues.map((issue, key) => {
            return (
              <tr key={key}>
                <td>{issue.title}</td>
                <td>
                  {issue.labels.map((label, key) => {
                    console.log(label.color)
                    return <div key={key}>{label.name}</div>;
                  })}
                </td>
                <td>{issue.assignee ? issue.assignee.login : "No assignee"}</td>
                <td>{issue.comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default IssuesTable;
