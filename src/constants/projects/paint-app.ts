import { apiContributors, githubUrl, owner, repositories } from "../contributors";

const PaintAppConstants = {
  title: "Paint App - Windows Application",
  description: "description",
  type: "Windows Application",
  imageSrc: "/projects/paint-app/paint-app.png",
  githubUrl: githubUrl(owner[0].name, repositories[5].name),
  apiContributors: apiContributors(owner[0].name, repositories[5].name),
  multipleGit: false,
  owner: owner[0].name,
  repository: repositories[5].name,
  techs: [
    "C#",
    "WPF",
  ]
};

export default PaintAppConstants;
