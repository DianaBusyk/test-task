import axios from 'axios';

export const getGithubIssues = (username, repo) => {
  const url = `https://api.github.com/repos/${username}/${repo}/issues`
  return axios.get(url).then((res) => res.data);
}
  
export default getGithubIssues;