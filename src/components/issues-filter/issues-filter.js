import React from "react";
import "./issues-filter.css";
import "../icons/filter.png";

const IssuesFilter = () => {
  return (
    <div className="filter-container">
      <h4 className="table-title">Table of issues</h4>
      <div className="select-container">
        <select className="form-select" id="exampleSelect">
          <option>Label</option>
          <option>label 1</option>
          <option>label 2</option>
        </select>
        <select className="form-select" id="exampleSelect">
          <option>Assignee</option>
          <option>user 1</option>
          <option>user 2</option>
        </select>
        <select className="form-select" id="exampleSelect">
          <option>Sort by time</option>
          <option>of the newest</option>
          <option>of the oldest</option>
        </select>
        <button className="btn btn-secondary search-btn">Update Search</button>
      </div>
    </div>
  );
};

export default IssuesFilter;
