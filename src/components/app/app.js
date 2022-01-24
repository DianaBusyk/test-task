import React from "react";
import Header from "../header/header";
import IssuesTable from "../issues-table/issues-table";
import './app.css'

function App() {
  let [issues, setIssues] = React.useState([]);
  return (
    <div className="App">
    <Header setIssues={setIssues}/>
     <IssuesTable issues={issues}/>
    </div>
  );
}
  
export default App;