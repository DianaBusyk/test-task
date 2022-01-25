import axios from 'axios';

export const getGithubIssues = (org, repo) => {
  const url = `https://api.github.com/repos/${org}/${repo}/issues?per_page=100&sort=created&direction=desc&assignee=*`
  return axios.get(url).then((res) => res.data);
}

export const getIssue = (org, repo, issueNumber) => {
  const url = `https://api.github.com/repos/${org}/${repo}/issues/${issueNumber}`
  return axios.get(url).then((res) => res.data);
}

export default getGithubIssues;