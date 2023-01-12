import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import IssuesFilter from "../issues-filter/issues-filter";
import Loading from "../loading/loading";
import "./issues-table.css";


function IssuesTable() {
  const [issues, isLoading, repoLabels, repoAssignees,
         shownIssues, setShownIssues] = useOutletContext();

  const sortCreatedDateAsc = (a, b) => {
    const aCreatedDate = Date.parse(a.created_at);
    const bCreatedDate = Date.parse(b.created_at);
    if ( aCreatedDate < bCreatedDate ){
      return -1;
    }
    if ( aCreatedDate > bCreatedDate ){
      return 1;
    }
    return 0;
  }
  
  const sortCreatedDateDesc = (a, b) => {
    const aCreatedDate = Date.parse(a.created_at);
    const bCreatedDate = Date.parse(b.created_at);
    if ( aCreatedDate > bCreatedDate ){
      return -1;
    }
    if ( aCreatedDate < bCreatedDate ){
      return 1;
    }
    return 0;
  }
  const [sortDirection, setSortDirection] = React.useState('asc');
  return (
    <div className="table-container">
      <IssuesFilter repoLabels={repoLabels} repoAssignees={repoAssignees} 
                    setShownIssues={setShownIssues} shownIssues={shownIssues} issues={issues}
                    sortDirection={sortDirection} setSortDirection={setSortDirection}/>
      <table className="table table-hover table-issues">
        <thead>
          <tr className="table-primary">
            <th scope="col">Title</th>
            <th scope="col">Labels</th>
            <th scope="col">Assignee</th>
            <th scope="col">Number of comments</th> 
            </tr>
        </thead>
        <tbody>
            {shownIssues.length > 0 ? 
              shownIssues.sort(sortDirection === 'asc' ? sortCreatedDateAsc : sortCreatedDateDesc)
                         .map((issue, key) => {
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
            }): isLoading ? <Loading/> : 'No issues found...' }  
        </tbody>
      </table>
    </div>
  );
}

export default IssuesTable;
