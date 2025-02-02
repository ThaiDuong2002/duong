const owner = {};
const repositories = {};

const apiContributors = (owner: string, repo: string) =>
  `https://api.github.com/repos/${owner}/${repo}/contributors`;

export { owner, repositories };
export default apiContributors;
