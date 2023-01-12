import React from "react";
import "./header.css";
import { getGithubIssues } from "../api/api";
import { Link } from "react-router-dom";

const Header = (props) => {
  
  const {org, repo, setOrg, setRepo, setIsLoading, setShownIssues, 
          setRepoLabels, setRepoAssignees, setIssues} = props;

  const searchIssues = () => {
   setIsLoading(true);
    
    getGithubIssues(org, repo).then((data) => {
      const currentLabels = [];
      const currentAssignees = [];

      data.forEach(issue => {
        issue.labels.forEach(label => {
          if(!currentLabels.some(existingLabel => existingLabel.id === label.id)) {
            currentLabels.push(label);
          }
        })
        issue.assignees.forEach(assignee => {
          if(!currentAssignees.some(existingAssignee => existingAssignee.id === assignee.id)) {
            currentAssignees.push(assignee);
          }
        })
      });
      setIsLoading(false);
      setShownIssues(data);
      setRepoLabels(currentLabels); // дістали унікальні значення
      setRepoAssignees(currentAssignees);
      setIssues([...data]); 
    });
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
            onChange={(e) => setOrg(e.target.value)}
            value={org}
          />
        </div>
        <div className="div-input">
          <input
            className="form-control "
            id="repo"
            name="repo"
            type="text"
            placeholder="Github repo"
            onChange={(e) => setRepo(e.target.value)}
            value={repo}
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
