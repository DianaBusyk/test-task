import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

import "./app.css";


function App() {
  const [org, setOrg] = React.useState("facebook");
  const [repo, setRepo] = React.useState("create-react-app");
  const [issues, setIssues] = React.useState([]);
  const [repoLabels, setRepoLabels] = React.useState([]);
  const [repoAssignees, setRepoAssignees] = React.useState([]);
  const [shownIssues, setShownIssues] = React.useState([]);

  const [isLoading, setIsLoading ]= React.useState(false);

  return (
    <div className="App">
      <Header setRepoLabels={setRepoLabels} setIsLoading={setIsLoading} setRepoAssignees={setRepoAssignees}
              isLoading={isLoading} setIssues={setIssues} setShownIssues={setShownIssues}
              org={org} setOrg={setOrg} repo={repo} setRepo={setRepo}/>
      <Outlet context={[issues, isLoading, repoLabels, repoAssignees,
                        shownIssues, setShownIssues]}/>
    </div>
  );
}

export default App;
