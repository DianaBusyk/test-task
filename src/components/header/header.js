import React from "react";
import "./header.css";
import getGithubIssues from "../api/api";
import { Link } from "react-router-dom";

const Header = (props) => {
  let searchIssues = () => {
    getGithubIssues(props.org, props.repo).then((data) => props.setIssues(data));
  };
  
  return (
    <div className="d-flex main-header">
      <h3 className="app-title">
        <Link className="title-link" to="/"> GitApp</Link>
      </h3>
      <div className="d-flex search-container">
        <div className="div-input">
          <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            placeholder="Github username"
            onChange={(e) => props.setOrg(e.target.value)}
            value={props.org}
          />
        </div>
        <div className="div-input">
          <input
            className="form-control "
            id="repo"
            name="repo"
            type="text"
            placeholder="Github repo"
            onChange={(e) => props.setRepo(e.target.value)}
            value={props.repo}
          />
        </div>
        <button className="btn btn-secondary search-btn" onClick={searchIssues}>
          <Link className="btn-link" to="issues">Search Issues</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
