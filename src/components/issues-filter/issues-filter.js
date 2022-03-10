import React from "react";
import "./issues-filter.css";
import img from "../icons/filter.png";

const IssuesFilter = (props) => {
  const { issues,repoLabels, repoAssignees,  setShownIssues, 
            setSortDirection, sortDirection } = props;

  const filterIssues = (field, id) => {
    const filteredIssues = issues.filter((issue) => {
      return issue[field].some((item) => item.id === id);
    });
    setShownIssues(filteredIssues);
  };

  const setSortingDirection = (e) => {
    const direction = e.target.value;
    setSortDirection(direction);
  };

  return (
    <div className="filter-container">
      <h4 className="table-title">Table of issues</h4>
      <div className="select-container">
        <img src={img} alt="img" />

        <select
          className="form-select"
          onChange={(e) => filterIssues("labels", parseInt(e.target.value))}
        >
          {repoLabels.map((label, key) => (
            <option key={key} value={label.id}>
              {label.name}
            </option>
          ))}
        </select>
        <select
          className="form-select"
          onChange={(e) => filterIssues("assignees", parseInt(e.target.value))}
        >
          {repoAssignees.map((assignee, key) => (
            <option key={key} value={assignee.id}>
              {assignee.login}
            </option>
          ))}
        </select>
        <select
          className="form-select"
          onChange={setSortingDirection}
          value={sortDirection}
        >
          <option value="desc">of the newest</option>
          <option value="asc">of the oldest</option>
        </select>
      </div>
    </div>
  );
};

export default IssuesFilter;
