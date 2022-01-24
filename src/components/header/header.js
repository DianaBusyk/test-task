import React from "react";
import "./header.css";
import getGithubIssues from "../api/api";

const Header = (props) => {
  let [username, setUsername] = React.useState("DianaBusyk");
  let [repo, setRepo] = React.useState("todo-list-react");

  let searchIssues = () => {
    getGithubIssues(username, repo).then((data) => props.setIssues(data));
  };
  return (
    <div className="d-flex main-header">
      <div className="div-input">
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Github username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
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
        Search Issues
      </button>
    </div>
  );
};

export default Header;
