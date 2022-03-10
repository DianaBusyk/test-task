import React, {useState} from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

import "./app.css";


function App() {
  const [org, setOrg] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [issues, setIssues] = useState([]);
  const [repoLabels, setRepoLabels] = useState([]);
  const [repoAssignees, setRepoAssignees] = useState([]);
  const [shownIssues, setShownIssues] = useState([]); 
  
  const [isLoading, setIsLoading ]= useState(false);

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
