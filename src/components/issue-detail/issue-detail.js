import React from "react";
import { useParams, useOutletContext, Link } from "react-router-dom";
import "./issue-detail.css"

function IssueDetail() {
  const [issues] = useOutletContext();

  let params = useParams();
  let issue = issues.find(
    (issue) => issue.number === parseInt(params.issueNumber)
  );
  return (
    <div className="detail-container">
      <h4>Details of Issue</h4>
      <table className="table table-hover detail-table">
        <tbody>
        <tr>
          <th scope="row">Title</th>
          <td>{issue ? issue.title : "No title"}</td>
        </tr>
        <tr>
          <th scope="row">Labels</th>
          <td>
            {issue.labels.length !==0 ? issue.labels.map((label, key) => {
              return <div key={key}>{label.name}</div>;
            }): "No labels"}
          </td>
        </tr>
        <tr>
          <th scope="row">Assignee</th>
          <td>{issue.assignee ? issue.assignee.login : "No assignee"}</td>
        </tr>
        <tr>
          <th scope="row">Number of comments</th>
          <td>{issue.comments}</td>
        </tr>
        <tr>
          <th scope="row">Status</th>
          <td>{issue.state}</td>
        </tr>
        </tbody>
      </table>
      <div className="issue-detail-body">
      <div dangerouslySetInnerHTML={{__html: issue.body}} />
      </div>
      <div className="div-back-btn">
        <button className="btn btn-primary back-btn">
          <Link className="back-btn-link" to="/issues">Back to all issues</Link>
        </button></div>
    </div>
  );
}

export default IssueDetail;
