import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './components/app/app';
import IssueDetail from './components/issue-detail/issue-detail';
import IssuesTable from "./components/issues-table/issues-table";


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="issues" element={<IssuesTable/>}/>
        <Route path="issues/:issueNumber" element={<IssueDetail />} />
      </Route>
      <Route
          path="*"
          element={
              <main style={{ padding: '1rem' }}>
                  <p>404 NOT FOUND</p>
              </main>
          }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);