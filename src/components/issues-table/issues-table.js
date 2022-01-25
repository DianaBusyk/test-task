import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import IssuesFilter from "../issues-filter/issues-filter";
import "./issues-table.css";

function IssuesTable() {
  const [issues] = useOutletContext();

  return (
    <div className="table-container">
      <IssuesFilter />
      <table className="table table-hover table-issues">
        <thead>
          <tr className="table-primary">
            <th scope="col">Title</th>
            <th scope="col">Labels</th>
            <th scope="col">Assignee</th>
            <th scope="col">Number of comments</th>
          </tr>
        </thead>
        {issues.length !== 0 ? (
          <tbody>
            {issues.map((issue, key) => {
              return (
                <tr key={key}>
                  <td>
                    <Link to={`/issues/${issue.number}`}>{issue.title}</Link>
                  </td>
                  <td>
                    {issue.labels.length !== 0
                      ? issue.labels.map((label, key) => {
                          return <div key={key}>{label.name}</div>;
                        })
                      : "No labels"}
                  </td>
                  <td>
                    {issue.assignee ? issue.assignee.login : "No assignee"}
                  </td>
                  <td>{issue.comments}</td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          "No issues found"
        )}
      </table>
    </div>
  );
}

export default IssuesTable;
