import React from "react";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

import "./app.css";


function App() {
  let [org, setOrg] = React.useState("facebook");
  let [repo, setRepo] = React.useState("create-react-app");
  let [issues, setIssues] = React.useState([]);
  return (
    <div className="App">
      <Header setIssues={setIssues} org={org} setOrg={setOrg} repo={repo} setRepo={setRepo}/>
      <Outlet context={[issues]}/>
    </div>
  );
}

export default App;
